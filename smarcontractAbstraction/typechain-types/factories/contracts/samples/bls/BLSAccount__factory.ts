/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BLSAccount,
  BLSAccountInterface,
} from "../../../../contracts/samples/bls/BLSAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[4]",
        name: "oldPublicKey",
        type: "uint256[4]",
      },
      {
        indexed: false,
        internalType: "uint256[4]",
        name: "newPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "PublicKeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlsPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "",
        type: "uint256[4]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "newPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "setBlsPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0604052306080523480156200001557600080fd5b50604051620026183803806200261883398101604081905262000038916200013e565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017d565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161462000123576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013b57600080fd5b50565b600080604083850312156200015257600080fd5b82516200015f8162000125565b6020840151909250620001728162000125565b809150509250929050565b60805160a05160c051612417620002016000396000818161029d01526116a10152600081816103c40152818161091b015281816109c201528181610d9801528181610fcf0152818161116e01528181611530015261179a01526000818161073c015281816107d201528181610a8601528181610b1c0152610c4b01526124176000f3fe6080604052600436106101745760003560e01c806352d1902d116100cb578063c399ec881161007f578063e02afbae11610059578063e02afbae1461049a578063ee472f36146104bc578063f23a6e61146104dc57600080fd5b8063c399ec8814610450578063c4d66de814610465578063d087d2881461048557600080fd5b8063b0d691fe116100b0578063b0d691fe146103b5578063b61d27f6146103e8578063bc197c811461040857600080fd5b806352d1902d1461036d5780638da5cb5b1461038257600080fd5b8063245a7bfc1161012d5780634a58db19116101075780634a58db19146103325780634d44560d1461033a5780634f1ef2861461035a57600080fd5b8063245a7bfc1461028b5780633659cfe6146102e45780633a871cdd1461030457600080fd5b8063150b7a021161015e578063150b7a02146101d557806318dfb3c71461024b57806318fc5c441461026b57600080fd5b806223de291461017957806301ffc9a7146101a0575b600080fd5b34801561018557600080fd5b5061019e610194366004611b7e565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb366004611c2f565b610522565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b5061021a6101f0366004611c71565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101cc565b34801561025757600080fd5b5061019e610266366004611d29565b610607565b34801561027757600080fd5b5061019e610286366004611e13565b610711565b34801561029757600080fd5b506102bf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cc565b3480156102f057600080fd5b5061019e6102ff366004611e91565b610725565b34801561031057600080fd5b5061032461031f366004611eae565b6108f3565b6040519081526020016101cc565b61019e610919565b34801561034657600080fd5b5061019e610355366004611f02565b6109b8565b61019e610368366004611f2e565b610a6f565b34801561037957600080fd5b50610324610c31565b34801561038e57600080fd5b506000546102bf9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103c157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102bf565b3480156103f457600080fd5b5061019e610403366004611ff4565b610d03565b34801561041457600080fd5b5061021a610423366004612044565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561045c57600080fd5b50610324610d52565b34801561047157600080fd5b5061019e610480366004611e91565b610e09565b34801561049157600080fd5b50610324610f82565b3480156104a657600080fd5b506104af610ffe565b6040516101cc9190612105565b3480156104c857600080fd5b5061019e6104d7366004611e13565b611039565b3480156104e857600080fd5b5061021a6104f7366004612113565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105b557507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061060157507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b61060f611156565b8281146106635760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561070a576106f88585838181106106835761068361218f565b90506020020160208101906106989190611e91565b60008585858181106106ac576106ac61218f565b90506020028101906106be91906121be565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061120592505050565b8061070281612252565b915050610666565b5050505050565b610719611282565b610722816112f9565b50565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036107d05760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161065a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108457f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146108ce5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161065a565b6108d781611340565b6040805160008082526020820190925261072291839190611348565b60006108fd611518565b610907848461159d565b9050610912826116d9565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b1580156109a457600080fd5b505af115801561070a573d6000803e3d6000fd5b6109c0611282565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610a5357600080fd5b505af1158015610a67573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610b1a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161065a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b8f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610c185760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161065a565b610c2182611340565b610c2d82826001611348565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cde5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161065a565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610d0b611156565b610d4c848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061120592505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610de0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e04919061228a565b905090565b600054610100900460ff1615808015610e295750600054600160ff909116105b80610e435750303b158015610e43575060005460ff166001145b610eb55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161065a565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610f1357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610f1c82611744565b8015610c2d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610dc3565b611006611aa2565b6040805160808101918290529060019060049082845b81548152602001906001019080831161101c575050505050905090565b600054610100900460ff16158080156110595750600054600160ff909116105b806110735750303b158015611073575060005460ff166001145b6110e55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161065a565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561114357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61114d6000611744565b610f1c826112f9565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806111b7575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b6112035760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161065a565b565b6000808473ffffffffffffffffffffffffffffffffffffffff16848460405161122e91906122c7565b60006040518083038185875af1925050503d806000811461126b576040519150601f19603f3d011682016040523d82523d6000602084013e611270565b606091505b50915091508161070a57805160208201fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314806112ad57503330145b6112035760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161065a565b7f42e4c4ce1432650f17e41c4ea77ed12c0ab20b229d3ffd84a2ebc9f8abb25a8360018260405161132b9291906122e3565b60405180910390a1610c2d6001826004611ac0565b610722611282565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156113805761137b836117e3565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611405575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526114029181019061228a565b60015b6114775760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161065a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461150c5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161065a565b5061137b8383836118d3565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146112035760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161065a565b60006115ac60408401846121be565b1590506116805760006115bd610ffe565b6040516020016115cd9190612105565b604051602081830303815290604052805190602001209050808480604001906115f691906121be565b608061160560408901896121be565b61161092915061231c565b61161b92829061232f565b604051611629929190612359565b60405180910390201461167e5760405162461bcd60e51b815260206004820152600c60248201527f77726f6e67207075626b65790000000000000000000000000000000000000000604482015260640161065a565b505b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001680825260006020830181905291909201529392505050565b80156107225760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461070a576040519150601f19603f3d011682016040523d82523d6000602084013e61070a565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b61186d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161065a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6118dc836118f8565b6000825111806118e95750805b1561137b57610d4c8383611945565b611901816117e3565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061091283836040518060600160405280602781526020016123bb6027913960606000808573ffffffffffffffffffffffffffffffffffffffff168560405161198f91906122c7565b600060405180830381855af49150503d80600081146119ca576040519150601f19603f3d011682016040523d82523d6000602084013e6119cf565b606091505b50915091506119e0868383876119ea565b9695505050505050565b60608315611a66578251600003611a5f5773ffffffffffffffffffffffffffffffffffffffff85163b611a5f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065a565b5081611a70565b611a708383611a78565b949350505050565b815115611a885781518083602001fd5b8060405162461bcd60e51b815260040161065a9190612369565b60405180608001604052806004906020820280368337509192915050565b8260048101928215611aee579160200282015b82811115611aee578251825591602001919060010190611ad3565b50611afa929150611afe565b5090565b5b80821115611afa5760008155600101611aff565b73ffffffffffffffffffffffffffffffffffffffff8116811461072257600080fd5b60008083601f840112611b4757600080fd5b50813567ffffffffffffffff811115611b5f57600080fd5b602083019150836020828501011115611b7757600080fd5b9250929050565b60008060008060008060008060c0898b031215611b9a57600080fd5b8835611ba581611b13565b97506020890135611bb581611b13565b96506040890135611bc581611b13565b955060608901359450608089013567ffffffffffffffff80821115611be957600080fd5b611bf58c838d01611b35565b909650945060a08b0135915080821115611c0e57600080fd5b50611c1b8b828c01611b35565b999c989b5096995094979396929594505050565b600060208284031215611c4157600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461091257600080fd5b600080600080600060808688031215611c8957600080fd5b8535611c9481611b13565b94506020860135611ca481611b13565b935060408601359250606086013567ffffffffffffffff811115611cc757600080fd5b611cd388828901611b35565b969995985093965092949392505050565b60008083601f840112611cf657600080fd5b50813567ffffffffffffffff811115611d0e57600080fd5b6020830191508360208260051b8501011115611b7757600080fd5b60008060008060408587031215611d3f57600080fd5b843567ffffffffffffffff80821115611d5757600080fd5b611d6388838901611ce4565b90965094506020870135915080821115611d7c57600080fd5b50611d8987828801611ce4565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e0b57611e0b611d95565b604052919050565b600060808284031215611e2557600080fd5b82601f830112611e3457600080fd5b6040516080810181811067ffffffffffffffff82111715611e5757611e57611d95565b604052806080840185811115611e6c57600080fd5b845b81811015611e86578035835260209283019201611e6e565b509195945050505050565b600060208284031215611ea357600080fd5b813561091281611b13565b600080600060608486031215611ec357600080fd5b833567ffffffffffffffff811115611eda57600080fd5b84016101608187031215611eed57600080fd5b95602085013595506040909401359392505050565b60008060408385031215611f1557600080fd5b8235611f2081611b13565b946020939093013593505050565b60008060408385031215611f4157600080fd5b8235611f4c81611b13565b915060208381013567ffffffffffffffff80821115611f6a57600080fd5b818601915086601f830112611f7e57600080fd5b813581811115611f9057611f90611d95565b611fc0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611dc4565b91508082528784828501011115611fd657600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000806060858703121561200a57600080fd5b843561201581611b13565b935060208501359250604085013567ffffffffffffffff81111561203857600080fd5b611d8987828801611b35565b60008060008060008060008060a0898b03121561206057600080fd5b883561206b81611b13565b9750602089013561207b81611b13565b9650604089013567ffffffffffffffff8082111561209857600080fd5b6120a48c838d01611ce4565b909850965060608b01359150808211156120bd57600080fd5b6120c98c838d01611ce4565b909650945060808b0135915080821115611c0e57600080fd5b8060005b6004811015610d4c5781518452602093840193909101906001016120e6565b6080810161060182846120e2565b60008060008060008060a0878903121561212c57600080fd5b863561213781611b13565b9550602087013561214781611b13565b94506040870135935060608701359250608087013567ffffffffffffffff81111561217157600080fd5b61217d89828a01611b35565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121f357600080fd5b83018035915067ffffffffffffffff82111561220e57600080fd5b602001915036819003821315611b7757600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361228357612283612223565b5060010190565b60006020828403121561229c57600080fd5b5051919050565b60005b838110156122be5781810151838201526020016122a6565b50506000910152565b600082516122d98184602087016122a3565b9190910192915050565b6101008101818460005b600481101561230c5781548352602090920191600191820191016122ed565b50505061091260808301846120e2565b8181038181111561060157610601612223565b6000808585111561233f57600080fd5b8386111561234c57600080fd5b5050820193919092039150565b8183823760009101908152919050565b60208152600082518060208401526123888160408501602087016122a3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220cb75935d2c26c45dc6614b5de525c8f41641c3d50289ddadeba2a639d2f433cb64736f6c63430008110033";

type BLSAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BLSAccount__factory extends ContractFactory {
  constructor(...args: BLSAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSAccount> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<BLSAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): BLSAccount {
    return super.attach(address) as BLSAccount;
  }
  override connect(signer: Signer): BLSAccount__factory {
    return super.connect(signer) as BLSAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSAccountInterface {
    return new utils.Interface(_abi) as BLSAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSAccount {
    return new Contract(address, _abi, signerOrProvider) as BLSAccount;
  }
}