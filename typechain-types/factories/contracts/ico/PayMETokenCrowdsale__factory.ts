/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PayMETokenCrowdsale,
  PayMETokenCrowdsaleInterface,
} from "../../../contracts/ico/PayMETokenCrowdsale";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "iBUSDT",
        type: "address",
      },
      {
        internalType: "address",
        name: "iVestingAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "iRate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "iWallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "iToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "iCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iOpeningTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iClosingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iTGETime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "IndividuallyMaximumCappedCrowdsale",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "IndividuallyMinimumCappedCrowdsale",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "NotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "TotalExceedTotalSupply",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "CrowdsaleFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevClosingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newClosingTime",
        type: "uint256",
      },
    ],
    name: "TimedCrowdsaleExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "BUSINESS_DEVELOPERS_PERCENTAGE",
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
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "PROJECT_TEAM_PERCENTAGE",
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
    name: "TECHINCAL_DEVELOPERS_PERCENTAGE",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addWhitelisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bUSDT",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyTokensInBUSD",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
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
    name: "capReached",
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
    inputs: [],
    name: "cliff",
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
    name: "closingTime",
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
    name: "createInvestors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
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
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalized",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasClosed",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "isOpen",
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
    inputs: [],
    name: "maximumSale",
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
    name: "minimumSale",
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
    name: "openingTime",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "rate",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenGenerationEventTime",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingAddress",
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
    name: "wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weiRaised",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040527ff5ddd805fa96b7c3d4f3ea55114f966ab9aad1de73aff48d008717b66678bb36600a553480156200003557600080fd5b50604051620026ae380380620026ae833981016040819052620000589162000713565b60016000558383868a8a8a82620000b65760405162461bcd60e51b815260206004820152601460248201527f43726f776473616c653a2072617465206973203000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0382166200011c5760405162461bcd60e51b815260206004820152602560248201527f43726f776473616c653a2077616c6c657420697320746865207a65726f206164604482015264647265737360d81b6064820152608401620000ad565b6001600160a01b038116620001805760405162461bcd60e51b8152602060048201526024808201527f43726f776473616c653a20746f6b656e20697320746865207a65726f206164646044820152637265737360e01b6064820152608401620000ad565b6004839055600380546001600160a01b038085166001600160a01b0319928316179092556002805492841692909116919091179055620001c260003362000608565b50506006805460ff1916905550620001da3362000618565b600081116200022c5760405162461bcd60e51b815260206004820152601960248201527f43617070656443726f776473616c653a206361702069732030000000000000006044820152606401620000ad565b60075542821015620002965760405162461bcd60e51b815260206004820152603360248201526000805160206200268e83398151915260448201527f6265666f72652063757272656e742074696d65000000000000000000000000006064820152608401620000ad565b818111620002fc5760405162461bcd60e51b815260206004820152603760248201526000805160206200268e83398151915260448201527f6e6f74206265666f726520636c6f73696e672074696d650000000000000000006064820152608401620000ad565b600891909155600955600b805460ff191690556001600160a01b038a16620003675760405162461bcd60e51b815260206004820152601360248201527f56616c69642042555344207265717569726564000000000000000000000000006044820152606401620000ad565b6001600160a01b038916620003bf5760405162461bcd60e51b815260206004820152601f60248201527f56616c69642056657374696e6720636f6e7472616374207265717569726564006044820152606401620000ad565b846200040e5760405162461bcd60e51b815260206004820152601d60248201527f436170206d7573742062652067726561746572207468616e205a65726f0000006044820152606401620000ad565b428410156200046c5760405162461bcd60e51b815260206004820152602360248201527f6f70656e696e672074696d65206973206265666f72652063757272656e742074604482015262696d6560e81b6064820152608401620000ad565b838311620004cd5760405162461bcd60e51b815260206004820152602760248201527f6f70656e696e672074696d65206973206e6f74206265666f726520636c6f73696044820152666e672074696d6560c81b6064820152608401620000ad565b838211620005445760405162461bcd60e51b815260206004820152603a60248201527f546f6b656e2047656e65726174696f6e204576656e742074696d65206973206e60448201527f6f74206265666f72652074686520636c6f73696e672074696d650000000000006064820152608401620000ad565b62f099c08111620005a65760405162461bcd60e51b815260206004820152602560248201527f4475726174696f6e206d7573742062652067726561746572207468616e20366d6044820152646f6e74687360d81b6064820152608401620000ad565b600c80546001600160a01b0319166001600160a01b039b8c16179055600d919091556000600e55600f555050600b8054610100600160a81b0319166101009690971695909502959095179093555050606460105550506103e8601155620007b9565b62000614828262000672565b5050565b600680546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620006145760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6001600160a01b03811681146200071057600080fd5b50565b6000806000806000806000806000806101408b8d0312156200073457600080fd5b8a516200074181620006fa565b60208c0151909a506200075481620006fa565b60408c015160608d0151919a5098506200076e81620006fa565b60808c01519097506200078181620006fa565b8096505060a08b0151945060c08b0151935060e08b015192506101008b015191506101208b015190509295989b9194979a5092959850565b611ec580620007c96000396000f3fe6080604052600436106102345760003560e01c8063715018a61161012e578063b5af1b2f116100ab578063e994e4751161006f578063e994e475146105ed578063ec8ac4d814610602578063f2d5879014610610578063f2fde38b14610626578063fc0c546a1461064657610249565b8063b5af1b2f1461055e578063b7a8807c1461057e578063c77c738714610593578063d547741f146105b8578063e5a2be8e146105d857610249565b806391d14854116100f257806391d14854146104e957806393fc645a1461050957806395e7a6a31461051e578063a217fddf14610531578063b3f05b971461054657610249565b8063715018a61461047057806372fc035214610485578063762e93761461049b5780638456cb59146104b15780638da5cb5b146104c657610249565b806336568abe116101bc5780634b6753bc116101805780634b6753bc146103e75780634bb278f3146103fc5780634f93594514610411578063521eb273146104265780635c975abb1461045857610249565b806336568abe146103735780633f4ba83a146103935780634042b66f146103a857806347535d7b146103bd5780634b20ab1a146103d257610249565b80631515bc2b116102035780631515bc2b146102e1578063248a9ca3146102f85780632c4e722e146103295780632f2ff15d1461033e578063355274ea1461035e57610249565b806301ffc9a7146102525780630fb5a6b41461028757806310154bad146102ab57806313d033c0146102cb57610249565b366102495761024733610664565b610664565b005b61024733610664565b34801561025e57600080fd5b5061027261026d366004611bb0565b6106e5565b60405190151581526020015b60405180910390f35b34801561029357600080fd5b5061029d600f5481565b60405190815260200161027e565b3480156102b757600080fd5b506102476102c6366004611bf6565b61071c565b3480156102d757600080fd5b5061029d600e5481565b3480156102ed57600080fd5b506009544211610272565b34801561030457600080fd5b5061029d610313366004611c11565b6000908152600160208190526040909120015490565b34801561033557600080fd5b5060045461029d565b34801561034a57600080fd5b50610247610359366004611c2a565b61074b565b34801561036a57600080fd5b5060075461029d565b34801561037f57600080fd5b5061024761038e366004611c2a565b610776565b34801561039f57600080fd5b506102476107f0565b3480156103b457600080fd5b5060055461029d565b3480156103c957600080fd5b5061027261080a565b3480156103de57600080fd5b5061029d600581565b3480156103f357600080fd5b5060095461029d565b34801561040857600080fd5b50610247610825565b34801561041d57600080fd5b50610272610835565b34801561043257600080fd5b506003546001600160a01b03165b6040516001600160a01b03909116815260200161027e565b34801561046457600080fd5b5060065460ff16610272565b34801561047c57600080fd5b5061024761084a565b34801561049157600080fd5b5061029d600d5481565b3480156104a757600080fd5b5061029d60115481565b3480156104bd57600080fd5b5061024761085c565b3480156104d257600080fd5b5060065461010090046001600160a01b0316610440565b3480156104f557600080fd5b50610272610504366004611c2a565b610874565b34801561051557600080fd5b5061029d601481565b61024761052c366004611c56565b61089f565b34801561053d57600080fd5b5061029d600081565b34801561055257600080fd5b50600b5460ff16610272565b34801561056a57600080fd5b50600c54610440906001600160a01b031681565b34801561058a57600080fd5b5060085461029d565b34801561059f57600080fd5b50600b546104409061010090046001600160a01b031681565b3480156105c457600080fd5b506102476105d3366004611c2a565b610b06565b3480156105e457600080fd5b5061029d600a81565b3480156105f957600080fd5b50610247610b2c565b610247610242366004611bf6565b34801561061c57600080fd5b5061029d60105481565b34801561063257600080fd5b50610247610641366004611bf6565b610cc2565b34801561065257600080fd5b506002546001600160a01b0316610440565b600260005414156106bc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260005560405163fa5cd00f60e01b81526001600160a01b03821660048201526024016106b3565b60006001600160e01b03198216637965db0b60e01b148061071657506301ffc9a760e01b6001600160e01b03198316145b92915050565b600a546000908152600160208190526040909120015461073b81610d3b565b610747600a548361074b565b5050565b6000828152600160208190526040909120015461076781610d3b565b6107718383610d45565b505050565b6001600160a01b03811633146107e65760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016106b3565b6107478282610db0565b6107f8610e17565b610800610e77565b610808610ec0565b565b6000600854421015801561082057506009544211155b905090565b61082d610e17565b610808610f12565b600060075461084360055490565b1015905090565b610852610e17565b6108086000611006565b610864610e17565b61086c611060565b6108086110a6565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600260005414156108f25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106b3565b60026000556001600160a01b03821661095b5760405162461bcd60e51b815260206004820152602560248201527f56616c69642042656e65666963696172792061646472657373206973207265716044820152641d5a5c995960da1b60648201526084016106b3565b600081116109b75760405162461bcd60e51b815260206004820152602360248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526228302960e81b60648201526084016106b3565b806109c283826110e3565b60006109cd82611229565b9050610aa28482604080516060810182526001600160a01b03808516825260208201848152600093830184815260128054600181018255955292517fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444600390950294850180546001600160a01b0319169190931617909155517fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3445830155517fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3446909101805460ff19169115159190911790555050565b60408051838152602081018390526001600160a01b0386169133917f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b910160405180910390a3610af28483611240565b610afb8261128d565b505060016000555050565b60008281526001602081905260409091200154610b2281610d3b565b6107718383610db0565b6009544211610b7d5760405162461bcd60e51b815260206004820181905260248201527f46696e616c697a61626c6543726f776473616c653a206e6f7420636c6f73656460448201526064016106b3565b600b5461010090046001600160a01b031660005b60125481101561074757600060128281548110610bb057610bb0611c80565b600091825260209182902060408051606081018252600390930290910180546001600160a01b0316835260018101549383019390935260029092015460ff16158015928201929092529150610c055750610cb0565b8051600d54600e54600f546020850151604051633efc6fc960e11b81526001600160a01b039586166004820152602481019490945260448401929092526064830152600160848301819052600060a484015260c483019190915260e482015290841690637df8df929061010401600060405180830381600087803b158015610c8c57600080fd5b505af1158015610ca0573d6000803e3d6000fd5b5050600160409093019290925250505b80610cba81611cac565b915050610b91565b610cca610e17565b6001600160a01b038116610d2f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106b3565b610d3881611006565b50565b610d3881336112b7565b610d4f8282610874565b6107475760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b610dba8282610874565b156107475760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6006546001600160a01b036101009091041633146108085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106b3565b60065460ff166108085760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106b3565b610ec8610e77565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600b5460ff1615610f755760405162461bcd60e51b815260206004820152602760248201527f46696e616c697a61626c6543726f776473616c653a20616c72656164792066696044820152661b985b1a5e995960ca1b60648201526084016106b3565b6009544211610fc65760405162461bcd60e51b815260206004820181905260248201527f46696e616c697a61626c6543726f776473616c653a206e6f7420636c6f73656460448201526064016106b3565b600b805460ff19166001179055610fdb61131b565b6040517f9270cc390c096600a1c17c44345a1ba689fafd99d97487b10cfccf86cf73183690600090a1565b600680546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60065460ff16156108085760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106b3565b6110ae611060565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ef53390565b600c546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561112757600080fd5b505afa15801561113b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115f9190611cc7565b90508082111561118c5760405163cf47918160e01b815260048101829052602481018390526044016106b3565b6010548210156111b2576040516314e6bbf160e21b8152600481018390526024016106b3565b6011546001600160a01b0384166000908152601360205260409020546111d8908461149e565b111561121f576001600160a01b038316600090815260136020526040902054601154611203916114b1565b6040516398c1d8ab60e01b81526004016106b391815260200190565b61077183836114bd565b6000610716600454836114cf90919063ffffffff16565b61124a82826114db565b6001600160a01b03821660009081526013602052604090205461126d908261149e565b6001600160a01b0390921660009081526013602052604090209190915550565b610d38336112a36003546001600160a01b031690565b600c546001600160a01b03169190846114e8565b6112c18282610874565b610747576112d9816001600160a01b03166014611559565b6112e4836020611559565b6040516020016112f5929190611d0c565b60408051601f198184030181529082905262461bcd60e51b82526106b391600401611d81565b600061132f6002546001600160a01b031690565b90506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136c57600080fd5b505afa158015611380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a49190611cc7565b905060006113b160055490565b905060006113be60045490565b905060006113d860646113d286600a6114cf565b906116f5565b905060006113ec60646113d28760056114cf565b9050600061140060646113d28860146114cf565b9050600061141882611412868661149e565b9061149e565b9050600061142687876114cf565b90506000611434838361149e565b90508881111561145a57604051639446517d60e01b8152600481018290526024016106b3565b600b5461148a9061010090046001600160a01b0316611479858561149e565b6001600160a01b038d169190611701565b611492610b2c565b50505050505050505050565b60006114aa8284611db4565b9392505050565b60006114aa8284611dcc565b6114c5611060565b6107478282611731565b60006114aa8284611de3565b600554610771908261149e565b6040516001600160a01b03808516602483015283166044820152606481018290526115539085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526117e1565b50505050565b60606000611568836002611de3565b611573906002611db4565b67ffffffffffffffff81111561158b5761158b611e02565b6040519080825280601f01601f1916602001820160405280156115b5576020820181803683370190505b509050600360fc1b816000815181106115d0576115d0611c80565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106115ff576115ff611c80565b60200101906001600160f81b031916908160001a9053506000611623846002611de3565b61162e906001611db4565b90505b60018111156116a6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061166257611662611c80565b1a60f81b82828151811061167857611678611c80565b60200101906001600160f81b031916908160001a90535060049490941c9361169f81611e18565b9050611631565b5083156114aa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b3565b60006114aa8284611e2f565b6040516001600160a01b03831660248201526044810182905261077190849063a9059cbb60e01b9060640161151c565b61175b7ff5ddd805fa96b7c3d4f3ea55114f966ab9aad1de73aff48d008717b66678bb3683610874565b6117d75760405162461bcd60e51b815260206004820152604160248201527f57686974656c69737443726f776473616c653a2062656e65666963696172792060448201527f646f65736e27742068617665207468652057686974656c697374656420726f6c6064820152606560f81b608482015260a4016106b3565b61074782826118b3565b6000611836826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119119092919063ffffffff16565b80519091501561077157808060200190518101906118549190611e51565b6107715760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016106b3565b6118bb61080a565b6119075760405162461bcd60e51b815260206004820152601860248201527f54696d656443726f776473616c653a206e6f74206f70656e000000000000000060448201526064016106b3565b6107478282611928565b60606119208484600085611990565b949350505050565b6119328282611ac1565b6007546119428261141260055490565b11156107475760405162461bcd60e51b815260206004820152601d60248201527f43617070656443726f776473616c653a2063617020657863656564656400000060448201526064016106b3565b6060824710156119f15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016106b3565b6001600160a01b0385163b611a485760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106b3565b600080866001600160a01b03168587604051611a649190611e73565b60006040518083038185875af1925050503d8060008114611aa1576040519150601f19603f3d011682016040523d82523d6000602084013e611aa6565b606091505b5091509150611ab6828286611b77565b979650505050505050565b6001600160a01b038216611b2a5760405162461bcd60e51b815260206004820152602a60248201527f43726f776473616c653a2062656e656669636961727920697320746865207a65604482015269726f206164647265737360b01b60648201526084016106b3565b806107475760405162461bcd60e51b815260206004820152601960248201527f43726f776473616c653a20776569416d6f756e7420697320300000000000000060448201526064016106b3565b60608315611b865750816114aa565b825115611b965782518084602001fd5b8160405162461bcd60e51b81526004016106b39190611d81565b600060208284031215611bc257600080fd5b81356001600160e01b0319811681146114aa57600080fd5b80356001600160a01b0381168114611bf157600080fd5b919050565b600060208284031215611c0857600080fd5b6114aa82611bda565b600060208284031215611c2357600080fd5b5035919050565b60008060408385031215611c3d57600080fd5b82359150611c4d60208401611bda565b90509250929050565b60008060408385031215611c6957600080fd5b611c7283611bda565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611cc057611cc0611c96565b5060010190565b600060208284031215611cd957600080fd5b5051919050565b60005b83811015611cfb578181015183820152602001611ce3565b838111156115535750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d44816017850160208801611ce0565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611d75816028840160208801611ce0565b01602801949350505050565b6020815260008251806020840152611da0816040850160208701611ce0565b601f01601f19169190910160400192915050565b60008219821115611dc757611dc7611c96565b500190565b600082821015611dde57611dde611c96565b500390565b6000816000190483118215151615611dfd57611dfd611c96565b500290565b634e487b7160e01b600052604160045260246000fd5b600081611e2757611e27611c96565b506000190190565b600082611e4c57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611e6357600080fd5b815180151581146114aa57600080fd5b60008251611e85818460208701611ce0565b919091019291505056fea26469706673582212202ef8663feab2af84f397a91c58889977ac58288ec15248bb544dbc0b4ea5860864736f6c6343000809003354696d656443726f776473616c653a206f70656e696e672074696d6520697320";

type PayMETokenCrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayMETokenCrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayMETokenCrowdsale__factory extends ContractFactory {
  constructor(...args: PayMETokenCrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    iBUSDT: PromiseOrValue<string>,
    iVestingAddress: PromiseOrValue<string>,
    iRate: PromiseOrValue<BigNumberish>,
    iWallet: PromiseOrValue<string>,
    iToken: PromiseOrValue<string>,
    iCap: PromiseOrValue<BigNumberish>,
    iOpeningTime: PromiseOrValue<BigNumberish>,
    iClosingTime: PromiseOrValue<BigNumberish>,
    iTGETime: PromiseOrValue<BigNumberish>,
    iDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PayMETokenCrowdsale> {
    return super.deploy(
      iBUSDT,
      iVestingAddress,
      iRate,
      iWallet,
      iToken,
      iCap,
      iOpeningTime,
      iClosingTime,
      iTGETime,
      iDuration,
      overrides || {}
    ) as Promise<PayMETokenCrowdsale>;
  }
  override getDeployTransaction(
    iBUSDT: PromiseOrValue<string>,
    iVestingAddress: PromiseOrValue<string>,
    iRate: PromiseOrValue<BigNumberish>,
    iWallet: PromiseOrValue<string>,
    iToken: PromiseOrValue<string>,
    iCap: PromiseOrValue<BigNumberish>,
    iOpeningTime: PromiseOrValue<BigNumberish>,
    iClosingTime: PromiseOrValue<BigNumberish>,
    iTGETime: PromiseOrValue<BigNumberish>,
    iDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      iBUSDT,
      iVestingAddress,
      iRate,
      iWallet,
      iToken,
      iCap,
      iOpeningTime,
      iClosingTime,
      iTGETime,
      iDuration,
      overrides || {}
    );
  }
  override attach(address: string): PayMETokenCrowdsale {
    return super.attach(address) as PayMETokenCrowdsale;
  }
  override connect(signer: Signer): PayMETokenCrowdsale__factory {
    return super.connect(signer) as PayMETokenCrowdsale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayMETokenCrowdsaleInterface {
    return new utils.Interface(_abi) as PayMETokenCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayMETokenCrowdsale {
    return new Contract(address, _abi, signerOrProvider) as PayMETokenCrowdsale;
  }
}