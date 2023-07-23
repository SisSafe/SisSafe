// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../lib/sismo-connect-solidity/src/SismoConnectLib.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract DAO {
    function MelonAction(uint256 _rank, address _wallet, bytes32 _args) external {
        require(_rank <= 3 && _rank >= 0, "Rank error");
        if (_rank == 1) {} else if (_rank == 2) {} else {}
    }
}
