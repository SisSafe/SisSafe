// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../lib/sismo-connect-solidity/src/SismoConnectLib.sol"; 
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Melon is Ownable, SismoConnect {

    bytes16 immutable groupId;
    mapping(uint => mapping(uint => uint)) public actionDone;
    mapping(uint => uint) public maxActionById;
    mapping(uint => uint) public minRank;
    mapping(uint => address) public contracts;
    uint256 public lastResult; 
    uint256 public lastAuth;

    constructor(bytes16 _groupId, address _owner)
        Ownable()
        SismoConnect(
            buildConfig({
                appId: 0x4b23209e82c689fad20b91d2331e6668
            })
        )
    {
        groupId = _groupId;
        transferOwnership(_owner);
    }

    function melonAction(bytes memory response, address _wallet, uint _id) external returns (SismoConnectVerifiedResult memory result) {
        result = verify({
            responseBytes: response,
            claim: buildClaim({groupId: groupId}),
            signature: buildSignature({message: abi.encode(_wallet)})
        });
        require(minRank[_id] <= result.claims[0].value, "ERROR: your rank is too low");
        require(actionDone[_id][result.auths[0].userId] < maxActionById[_id], "ERROR: you reached the maxActions for this id");
        actionDone[_id][result.auths[0].userId]++;
        
    }

    function giveAction(uint _id, uint _minRank, uint _maxNumberActions, address _contract) external onlyOwner {
        require(_minRank >= 1, "ERROR: can't be lower than 1");
        maxActionById[_id] = _maxNumberActions;
        minRank[_id] = _minRank;
        contracts[_id] = _contract;
    }
}

/*
function writeMessage(bytes memory response, bytes16 _groupId, string memory _title, string memory _description) public {
        uint actualCount = messageCount;
        messageCount++;
        uint timestamp = block.timestamp;

        verify({
            responseBytes: response,
            claim: buildClaim({groupId: _groupId}),
            signature: buildSignature({message: abi.encode(msg.sender)})
        });

        messages[actualCount] = Message(actualCount, timestamp, _groupId, _title, _description);

        groupIds.add(_groupId);

        emit MessageWritten(actualCount, _groupId, _title);
    }*/