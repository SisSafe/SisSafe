// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IDAO {
    function MelonAction(uint256 _rank, address _wallet, bytes32 _args) external;
}
