// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../lib/sismo-connect-solidity/src/SismoConnectLib.sol"; 
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IDAO.sol";
import "./interfaces/IERC20.sol";

contract Melon is Ownable, SismoConnect {

    bytes16 immutable groupId;
    mapping(uint => mapping(uint => uint)) public actionDone;
    mapping(uint => uint) public maxActionById;
    mapping(uint => uint) public minRank;
    mapping(uint => address) public contracts;
    uint256 public lastResult; 
    uint256 public lastAuth;
    uint256 public id;
    IDAO public daoContract;

    constructor(bytes16 _appId, bytes16 _groupId, address _owner)
        Ownable()
        SismoConnect(
            buildConfig({
                appId: _appId
            })
        )
    {
        groupId = _groupId;
        transferOwnership(_owner);
    }

    function withdrawToOwner(uint256 amount, address token) external onlyOwner {
        require(amount > 0, "The amount must be greater than zero");
        bool success;
        
        if (token != address(0)) {
            IERC20 tokenContract = IERC20(token);
            require(tokenContract.transfer(owner(), amount), "Token transfer failed");
        } else {
            require(address(this).balance >= amount, "Insufficient balance");
            (success, ) = owner().call{value: amount}("");
            require(success, "Ethers transfer failed");
        }
    }

    function refundGas() private {
        uint256 gasSpent = gasleft();

        payable(msg.sender).transfer(gasSpent * tx.gasprice);
    }

    function melonAction(bytes memory response, uint _rank,address _wallet, uint _id, bytes32 _arg) external returns (SismoConnectVerifiedResult memory result) {
        require(id > _id, "Id doesn't exist");
        result = verify({
            responseBytes: response,
            claim: buildClaim({groupId: groupId, value: _rank}),
            signature: buildSignature({message: abi.encode(_wallet)})
        });
        require(minRank[_id] <= result.claims[0].value, "ERROR: your rank is too low");
        require(actionDone[_id][result.auths[0].userId] < maxActionById[_id], "ERROR: you reached the maxActions for this id");
        actionDone[_id][result.auths[0].userId]++;
        IDAO(contracts[_id]).MelonAction(result.claims[0].value, _wallet, _arg);
        refundGas();
    }

    function giveAction(uint _minRank, uint _maxNumberActions, address _contract) external onlyOwner {
        uint acutalId = id;
        id++;
        require(_minRank >= 1, "ERROR: can't be lower than 1");
        maxActionById[acutalId] = _maxNumberActions;
        minRank[acutalId] = _minRank;
        contracts[acutalId] = _contract;
    }
}