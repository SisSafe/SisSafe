export const melonABI =
  [
    {
      "inputs": [
        {
          "internalType": "bytes16",
          "name": "_appId",
          "type": "bytes16"
        },
        {
          "internalType": "bytes16",
          "name": "_groupId",
          "type": "bytes16"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ADDRESSES_PROVIDER_V2",
      "outputs": [
        {
          "internalType": "contract IAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "APP_ID",
      "outputs": [
        {
          "internalType": "bytes16",
          "name": "",
          "type": "bytes16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "IS_IMPERSONATION_MODE",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SISMO_CONNECT_LIB_VERSION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "actionDone",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "config",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes16",
              "name": "appId",
              "type": "bytes16"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "isImpersonationMode",
                  "type": "bool"
                }
              ],
              "internalType": "struct VaultConfig",
              "name": "vault",
              "type": "tuple"
            }
          ],
          "internalType": "struct SismoConnectConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "daoContract",
      "outputs": [
        {
          "internalType": "contract IDAO",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minRank",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxNumberActions",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_contract",
          "type": "address"
        }
      ],
      "name": "giveAction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastAuth",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastResult",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "maxActionById",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_rank",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_wallet",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_arg",
          "type": "bytes32"
        }
      ],
      "name": "melonAction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes16",
              "name": "appId",
              "type": "bytes16"
            },
            {
              "internalType": "bytes16",
              "name": "namespace",
              "type": "bytes16"
            },
            {
              "internalType": "bytes32",
              "name": "version",
              "type": "bytes32"
            },
            {
              "components": [
                {
                  "internalType": "enum AuthType",
                  "name": "authType",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isAnon",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "userId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "proofData",
                  "type": "bytes"
                }
              ],
              "internalType": "struct VerifiedAuth[]",
              "name": "auths",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "enum ClaimType",
                  "name": "claimType",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes16",
                  "name": "groupId",
                  "type": "bytes16"
                },
                {
                  "internalType": "bytes16",
                  "name": "groupTimestamp",
                  "type": "bytes16"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "proofId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "proofData",
                  "type": "bytes"
                }
              ],
              "internalType": "struct VerifiedClaim[]",
              "name": "claims",
              "type": "tuple[]"
            },
            {
              "internalType": "bytes",
              "name": "signedMessage",
              "type": "bytes"
            }
          ],
          "internalType": "struct SismoConnectVerifiedResult",
          "name": "result",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "minRank",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "withdrawToOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]