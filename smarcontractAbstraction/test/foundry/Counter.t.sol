// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "../../contracts/newAccount.sol";
import "../../contracts/interfaces/IEntryPoint.sol";

interface INewAccount {
    function initialize(address) external;
}

contract ContractTest is Test {
    ProxyAdmin public adminProxy = new ProxyAdmin();
    bytes public bytesToSend = new bytes(0);
    NewAccount public accountIface = new NewAccount(IEntryPoint(address(0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789)));

    bytes initializing = abi.encodeWithSelector(INewAccount.initialize.selector, address(1));
    TransparentUpgradeableProxy public vaultRaw = new TransparentUpgradeableProxy(
      address(accountIface),
      address(adminProxy),
      initializing
    );
}
