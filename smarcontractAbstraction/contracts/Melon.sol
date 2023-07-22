// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../lib/sismo-connect-solidity/src/SismoConnectLib.sol"; 

contract Melon is SismoConnect {

    constructor()
        SismoConnect(
            buildConfig({
                appId: 0x4b23209e82c689fad20b91d2331e6668
            })
        )
    {}

    function action(bytes memory response, bytes16 _groupId, address _wallet) public returns (SismoConnectVerifiedResult memory result) {
        result = verify({
            responseBytes: response,
            claim: buildClaim({groupId: _groupId}),
            signature: buildSignature({message: abi.encode(_wallet)})
        });
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