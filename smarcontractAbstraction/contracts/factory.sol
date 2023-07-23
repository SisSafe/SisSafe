// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Melon.sol";

contract MelonFactory {

    event MelonContractCreated(address indexed MelonContractAddress, address indexed creator);

    function createChildContract(bytes16 _appId, bytes16 _groupId, address _owner) external {
        Melon MelonContract = new Melon(_appId, _groupId, _owner);

    
        emit MelonContractCreated(address(MelonContract), msg.sender);
    }
}
