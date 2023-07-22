/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../contracts/samples/SimpleAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
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
  "0x60c0604052306080523480156200001557600080fd5b50604051620023c7380380620023c7833981016040819052620000389162000117565b6001600160a01b03811660a0526200004f62000056565b5062000149565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161462000115576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012a57600080fd5b81516001600160a01b03811681146200014257600080fd5b9392505050565b60805160a05161220b620001bc6000396000818161032401528181610828015281816108cf01528181610ca501528181610edc01528181610f23015281816112270152611485015260008181610646015281816106dc0152818161099301528181610a290152610b58015261220b6000f3fe6080604052600436106101285760003560e01c806352d1902d116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de8146103c5578063d087d288146103e5578063f23a6e61146103fa57600080fd5b8063bc197c8114610368578063c399ec88146103b057600080fd5b806352d1902d146102a85780638da5cb5b146102bd578063b0d691fe14610315578063b61d27f61461034857600080fd5b80633659cfe6116100fc5780634a58db19116100e15780634a58db191461026d5780634d44560d146102755780634f1ef2861461029557600080fd5b80633659cfe61461021f5780633a871cdd1461023f57600080fd5b806223de291461012d57806301ffc9a714610154578063150b7a021461018957806318dfb3c7146101ff575b600080fd5b34801561013957600080fd5b50610152610148366004611ab3565b5050505050505050565b005b34801561016057600080fd5b5061017461016f366004611b64565b610440565b60405190151581526020015b60405180910390f35b34801561019557600080fd5b506101ce6101a4366004611ba6565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610180565b34801561020b57600080fd5b5061015261021a366004611c5e565b610525565b34801561022b57600080fd5b5061015261023a366004611cca565b61062f565b34801561024b57600080fd5b5061025f61025a366004611ce7565b610800565b604051908152602001610180565b610152610826565b34801561028157600080fd5b50610152610290366004611d3b565b6108c5565b6101526102a3366004611d96565b61097c565b3480156102b457600080fd5b5061025f610b3e565b3480156102c957600080fd5b506000546102f09062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610180565b34801561032157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102f0565b34801561035457600080fd5b50610152610363366004611e78565b610c10565b34801561037457600080fd5b506101ce610383366004611ec8565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156103bc57600080fd5b5061025f610c5f565b3480156103d157600080fd5b506101526103e0366004611cca565b610d16565b3480156103f157600080fd5b5061025f610e8f565b34801561040657600080fd5b506101ce610415366004611f66565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806104d357507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061051f57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b61052d610f0b565b8281146105815760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610628576106168585838181106105a1576105a1611fe2565b90506020020160208101906105b69190611cca565b60008585858181106105ca576105ca611fe2565b90506020028101906105dc9190612011565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fba92505050565b8061062081612076565b915050610584565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036106da5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610578565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661074f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146107d85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610578565b6107e181611037565b604080516000808252602082019092526107fd9183919061103f565b50565b600061080a61120f565b6108148484611294565b905061081f8261134d565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b1580156108b157600080fd5b505af1158015610628573d6000803e3d6000fd5b6108cd6113b8565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610a275760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610578565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a9c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610b255760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610578565b610b2e82611037565b610b3a8282600161103f565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610beb5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610578565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610c18610f0b565b610c59848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fba92505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610ced573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1191906120d5565b905090565b600054610100900460ff1615808015610d365750600054600160ff909116105b80610d505750303b158015610d50575060005460ff166001145b610dc25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610578565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610e2057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610e298261142f565b8015610b3a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610cd0565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610f6c575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b610fb85760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610578565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610fe39190612112565b60006040518083038185875af1925050503d8060008114611020576040519150601f19603f3d011682016040523d82523d6000602084013e611025565b606091505b50915091508161062857805160208201fd5b6107fd6113b8565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561107757611072836114ce565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156110fc575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526110f9918101906120d5565b60015b61116e5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610578565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146112035760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610578565b506110728383836115be565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610fb85760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610578565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c81206113116112d4610140860186612011565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506115e39050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff90811691161461134357600191505061051f565b5060009392505050565b80156107fd5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610628576040519150601f19603f3d011682016040523d82523d6000602084013e610628565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314806113e357503330145b610fb85760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610578565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6115585760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610578565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6115c783611607565b6000825111806115d45750805b1561107257610c598383611654565b60008060006115f28585611679565b915091506115ff816116be565b509392505050565b611610816114ce565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061081f83836040518060600160405280602781526020016121af60279139611823565b60008082516041036116af5760208301516040840151606085015160001a6116a3878285856118a8565b945094505050506116b7565b506000905060025b9250929050565b60008160048111156116d2576116d261212e565b036116da5750565b60018160048111156116ee576116ee61212e565b0361173b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610578565b600281600481111561174f5761174f61212e565b0361179c5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610578565b60038160048111156117b0576117b061212e565b036107fd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610578565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161184d9190612112565b600060405180830381855af49150503d8060008114611888576040519150601f19603f3d011682016040523d82523d6000602084013e61188d565b606091505b509150915061189e86838387611997565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118df575060009050600361198e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611933573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166119875760006001925092505061198e565b9150600090505b94509492505050565b60608315611a13578251600003611a0c5773ffffffffffffffffffffffffffffffffffffffff85163b611a0c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610578565b5081611a1d565b611a1d8383611a25565b949350505050565b815115611a355781518083602001fd5b8060405162461bcd60e51b8152600401610578919061215d565b73ffffffffffffffffffffffffffffffffffffffff811681146107fd57600080fd5b60008083601f840112611a8357600080fd5b50813567ffffffffffffffff811115611a9b57600080fd5b6020830191508360208285010111156116b757600080fd5b60008060008060008060008060c0898b031215611acf57600080fd5b8835611ada81611a4f565b97506020890135611aea81611a4f565b96506040890135611afa81611a4f565b955060608901359450608089013567ffffffffffffffff80821115611b1e57600080fd5b611b2a8c838d01611a71565b909650945060a08b0135915080821115611b4357600080fd5b50611b508b828c01611a71565b999c989b5096995094979396929594505050565b600060208284031215611b7657600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461081f57600080fd5b600080600080600060808688031215611bbe57600080fd5b8535611bc981611a4f565b94506020860135611bd981611a4f565b935060408601359250606086013567ffffffffffffffff811115611bfc57600080fd5b611c0888828901611a71565b969995985093965092949392505050565b60008083601f840112611c2b57600080fd5b50813567ffffffffffffffff811115611c4357600080fd5b6020830191508360208260051b85010111156116b757600080fd5b60008060008060408587031215611c7457600080fd5b843567ffffffffffffffff80821115611c8c57600080fd5b611c9888838901611c19565b90965094506020870135915080821115611cb157600080fd5b50611cbe87828801611c19565b95989497509550505050565b600060208284031215611cdc57600080fd5b813561081f81611a4f565b600080600060608486031215611cfc57600080fd5b833567ffffffffffffffff811115611d1357600080fd5b84016101608187031215611d2657600080fd5b95602085013595506040909401359392505050565b60008060408385031215611d4e57600080fd5b8235611d5981611a4f565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611da957600080fd5b8235611db481611a4f565b9150602083013567ffffffffffffffff80821115611dd157600080fd5b818501915085601f830112611de557600080fd5b813581811115611df757611df7611d67565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611e3d57611e3d611d67565b81604052828152886020848701011115611e5657600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611e8e57600080fd5b8435611e9981611a4f565b935060208501359250604085013567ffffffffffffffff811115611ebc57600080fd5b611cbe87828801611a71565b60008060008060008060008060a0898b031215611ee457600080fd5b8835611eef81611a4f565b97506020890135611eff81611a4f565b9650604089013567ffffffffffffffff80821115611f1c57600080fd5b611f288c838d01611c19565b909850965060608b0135915080821115611f4157600080fd5b611f4d8c838d01611c19565b909650945060808b0135915080821115611b4357600080fd5b60008060008060008060a08789031215611f7f57600080fd5b8635611f8a81611a4f565b95506020870135611f9a81611a4f565b94506040870135935060608701359250608087013567ffffffffffffffff811115611fc457600080fd5b611fd089828a01611a71565b979a9699509497509295939492505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261204657600080fd5b83018035915067ffffffffffffffff82111561206157600080fd5b6020019150368190038213156116b757600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120ce577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000602082840312156120e757600080fd5b5051919050565b60005b838110156121095781810151838201526020016120f1565b50506000910152565b600082516121248184602087016120ee565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b602081526000825180602084015261217c8160408501602087016120ee565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122009c9be7cc19e23341b752af19d076787eb44dc1eb3273edc0f29ac3eb7b1861664736f6c63430008110033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}
