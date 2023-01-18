/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PaymeTokenVesting,
  PaymeTokenVestingInterface,
} from "../../../contracts/ico/PaymeTokenVesting";

const _abi = [
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Revoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenReleasedAtTGE",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "VestingScheduleCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "computeNextVestingScheduleIdForHolder",
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
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "computeReleasableAmount",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "computeVestingScheduleIdForAddressAndIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "iBeneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "iStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iCliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iSlicePeriodSeconds",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "iRevocable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "iAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "iReleaseAtTGE",
        type: "bool",
      },
    ],
    name: "createVestingSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crowdsalesAddress",
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
    name: "getCurrentTime",
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
        name: "holder",
        type: "address",
      },
    ],
    name: "getLastVestingScheduleForHolder",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTgeTotalAmount",
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
    name: "getToken",
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
    name: "getTotalInvestmentAmountBalance",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingIdAtIndex",
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
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "getVestingSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingScheduleByAddressAndIndex",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "releaseAtTGE",
            type: "bool",
          },
        ],
        internalType: "struct PaymeTokenVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVestingSchedulesCount",
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
        name: "iBeneficiary",
        type: "address",
      },
    ],
    name: "getVestingSchedulesCountByBeneficiary",
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
    name: "getVestingSchedulesTotalAmount",
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
    name: "getWithdrawableAmount",
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
        internalType: "contract IERC20Upgradeable",
        name: "iToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "iTGEPercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iTGEOpeningTime",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "releaseForTGE",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "icrowdsalesAddress",
        type: "address",
      },
    ],
    name: "setCrowdsaleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tgeOpeningTime",
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
    name: "tgePercent",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tgeTokenParticipants",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120b2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638af104da11610104578063c8ac75d2116100a2578063f2fde38b11610071578063f2fde38b146103ba578063f51321d7146103cd578063f7c469f0146103e0578063f9079b37146103f357600080fd5b8063c8ac75d214610376578063c990c2f714610396578063e2f0f42d1461039e578063ea1bb3d5146103a757600080fd5b806390be10cc116100de57806390be10cc146103405780639ef346b414610348578063b75c7dc61461035b578063c07aa6561461036e57600080fd5b80638af104da146103095780638c81a7d71461031c5780638da5cb5b1461032f57600080fd5b806348deb47111610171578063715018a61161014b578063715018a6146102bb5780637a1ac61e146102c35780637df8df92146102d65780637e913dc6146102e957600080fd5b806348deb471146102775780635a7bb69a1461027f57806366afd8ef146102a857600080fd5b8063260a51e5116101ad578063260a51e51461024257806329cb924d146102555780632e1a7d4d1461025b57806340a9627f1461026e57600080fd5b806313083617146101d45780631f35bc40146101eb57806321df0da71461021d575b600080fd5b609a545b6040519081526020015b60405180910390f35b61021b6101f9366004611c6a565b60a080546001600160a01b0319166001600160a01b0392909216919091179055565b005b6097546001600160a01b03165b6040516001600160a01b0390911681526020016101e2565b60a05461022a906001600160a01b031681565b426101d8565b61021b610269366004611c87565b610406565b6101d860995481565b609c546101d8565b6101d861028d366004611c6a565b6001600160a01b03166000908152609e602052604090205490565b61021b6102b6366004611ca0565b610543565b61021b610769565b61021b6102d1366004611cc2565b61077d565b61021b6102e4366004611d05565b61094a565b6102fc6102f7366004611c6a565b610eb6565b6040516101e29190611d81565b6101d8610317366004611e19565b610f9c565b61021b61032a366004611c87565b610fe3565b6033546001600160a01b031661022a565b6101d861123f565b6102fc610356366004611c87565b6112d1565b61021b610369366004611c87565b611383565b6101d861152c565b6101d8610384366004611c87565b609f6020526000908152604090205481565b609d546101d8565b6101d860985481565b6101d86103b5366004611c87565b61153e565b61021b6103c8366004611c6a565b611633565b6102fc6103db366004611e19565b6116ac565b6101d86103ee366004611c6a565b6116c8565b6101d8610401366004611c87565b6116f2565b600260655414156104325760405162461bcd60e51b815260040161042990611e45565b60405180910390fd5b600260655561043f61177a565b80306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611e7c565b10156105135760405162461bcd60e51b815260206004820152602b60248201527f546f6b656e56657374696e673a206e6f7420656e6f756768207769746864726160448201526a7761626c652066756e647360a81b6064820152608401610429565b61053b6105286033546001600160a01b031690565b6097546001600160a01b031690836117d4565b506001606555565b600260655414156105665760405162461bcd60e51b815260040161042990611e45565b60026065556000828152609b6020526040902054829060ff1661058857600080fd5b6000818152609b602052604090206008015460ff16156105a757600080fd5b6000838152609b602052604090208054603354336001600160a01b0361010090930483168114929091161481806105db5750805b6105f75760405162461bcd60e51b815260040161042990611e95565b6040805161016081018252845460ff808216151583526001600160a01b03610100928390041660208401526001870154938301939093526002860154606083015260038601546080830152600486015460a083015260058601548316151560c0830152600686015460e0830152600786015481830152600886015480841615156101208401520490911615156101408201526000906106959061182b565b90508581101561070d5760405162461bcd60e51b815260206004820152603d60248201527f546f6b656e56657374696e673a2063616e6e6f742072656c6561736520746f6b60448201527f656e732c206e6f7420656e6f7567682076657374656420746f6b656e730000006064820152608401610429565b600784015461071c9087611924565b60078501558354609c546101009091046001600160a01b0316906107409088611930565b609c5560975461075a906001600160a01b031682896117d4565b50506001606555505050505050565b61077161177a565b61077b600061193c565b565b600054610100900460ff161580801561079d5750600054600160ff909116105b806107b75750303b1580156107b7575060005460ff166001145b61081a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610429565b6000805460ff19166001179055801561083d576000805461ff0019166101001790555b6001600160a01b03841661085057600080fd5b6000831180156108605750606483105b6108c95760405162461bcd60e51b815260206004820152603460248201527f5447452050657263656e74206d7573742062652067726561746572207468616e6044820152730203020616e64204c657373207468616e203130360641b6064820152608401610429565b6108d161198e565b6108d96119be565b609780546001600160a01b0319166001600160a01b038616179055609982905560988390558015610944576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b60a0546001600160a01b031633148061096d57506033546001600160a01b031633145b6109a55760405162461bcd60e51b81526020600482015260096024820152684e6f2041636365737360b81b6044820152606401610429565b81306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109df57600080fd5b505afa1580156109f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a179190611e7c565b1015610a9e5760405162461bcd60e51b815260206004820152604a60248201527f546f6b656e56657374696e673a2063616e6e6f7420637265617465207665737460448201527f696e67207363686564756c652062656361757365206e6f742073756666696369606482015269656e7420746f6b656e7360b01b608482015260a401610429565b60008511610af95760405162461bcd60e51b815260206004820152602260248201527f546f6b656e56657374696e673a206475726174696f6e206d757374206265203e604482015261020360f41b6064820152608401610429565b60008211610b495760405162461bcd60e51b815260206004820181905260248201527f546f6b656e56657374696e673a20616d6f756e74206d757374206265203e20306044820152606401610429565b6001841015610bb05760405162461bcd60e51b815260206004820152602d60248201527f546f6b656e56657374696e673a20736c696365506572696f645365636f6e647360448201526c206d757374206265203e3d203160981b6064820152608401610429565b604051630f7c469f60e41b81526001600160a01b0389166004820152600090309063f7c469f09060240160206040518083038186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a9190611e7c565b90506000610c388989611924565b90506040518061016001604052806001151581526020018b6001600160a01b031681526020018281526020018a8152602001888152602001878152602001861515815260200185815260200160008152602001600015158152602001841515815250609b600084815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010155606082015181600201556080820151816003015560a0820151816004015560c08201518160050160006101000a81548160ff02191690831515021790555060e0820151816006015561010082015181600701556101208201518160080160006101000a81548160ff0219169083151502179055506101408201518160080160016101000a81548160ff021916908315150217905550905050610db184609c5461192490919063ffffffff16565b609c558215610df1576000610ddc6064610dd6609854886119ec90919063ffffffff16565b906119f8565b609d54909150610dec9082611924565b609d55505b609a805460018181019092557f44da158ba27f9252712a74ff6a55c5d531f69609f1f6e7f17c4443a8e2089be4018390556001600160a01b038b166000908152609e602052604090205490610e47908290611924565b6001600160a01b038c166000908152609e6020908152604080832093909355858252609f905281812055517f7deecc243dec36156ece079ae8e71cb3f5b8a86d4ee141e3733216e23614e0c390610ea19085815260200190565b60405180910390a15050505050505050505050565b610ebe611bea565b6001600160a01b0382166000908152609e6020526040812054609b9190610eed90859061031790600190611f13565b81526020808201929092526040908101600020815161016081018352815460ff808216151583526001600160a01b036101009283900416958301959095526001830154938201939093526002820154606082015260038201546080820152600482015460a082015260058201548416151560c0820152600682015460e0820152600782015483820152600890910154808416151561012083015291909104909116151561014082015292915050565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b600260655414156110065760405162461bcd60e51b815260040161042990611e45565b60026065556000818152609b602052604090208054603354336001600160a01b03610100909304831681149290911614818061103f5750805b61105b5760405162461bcd60e51b815260040161042990611e95565b6008830154610100900460ff166110da5760405162461bcd60e51b815260206004820152603860248201527f52656c65617365546f6b656e41745447453a206f6e6c7920696e766573746f7260448201527f732063616e20636c61696d20746f6b656e2061742054474500000000000000006064820152608401610429565b60995442908110156111275760405162461bcd60e51b81526020600482015260166024820152755447453a2074696d65206e6f7420726561636865642160501b6044820152606401610429565b6000858152609f6020526040902054156111835760405162461bcd60e51b815260206004820152601a60248201527f5447453a20546f6b656e20416c726561647920636c61696d65640000000000006044820152606401610429565b60006111a36064610dd660985488600601546119ec90919063ffffffff16565b6000878152609f602052604090208190558554609d5491925061010090046001600160a01b0316906111d59083611930565b609d556097546111ef906001600160a01b031682846117d4565b604080516001600160a01b0383168152602081018490527fd9215c0345f0d530c5101edea49413960423257c62dd4dcc18b5e6c0b63a0227910160405180910390a1505060016065555050505050565b609c546097546040516370a0823160e01b81523060048201526000926112cc9290916001600160a01b03909116906370a082319060240160206040518083038186803b15801561128e57600080fd5b505afa1580156112a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c69190611e7c565b90611930565b905090565b6112d9611bea565b506000908152609b6020908152604091829020825161016081018452815460ff808216151583526001600160a01b036101009283900416948301949094526001830154948201949094526002820154606082015260038201546080820152600482015460a082015260058201548316151560c0820152600682015460e082015260078201548482015260089091015480831615156101208301529290920416151561014082015290565b61138b61177a565b6000818152609b6020526040902054819060ff166113a857600080fd5b6000818152609b602052604090206008015460ff16156113c757600080fd5b6000828152609b60205260409020600581015460ff166114385760405162461bcd60e51b815260206004820152602660248201527f546f6b656e56657374696e673a2076657374696e67206973206e6f74207265766044820152656f6361626c6560d01b6064820152608401610429565b6040805161016081018252825460ff808216151583526001600160a01b03610100928390041660208401526001850154938301939093526002840154606083015260038401546080830152600484015460a083015260058401548316151560c0830152600684015460e0830152600784015481830152600884015480841615156101208401520490911615156101408201526000906114d69061182b565b905080156114e8576114e88482610543565b60006115058360070154846006015461193090919063ffffffff16565b609c549091506115159082611930565b609c555050600801805460ff191660011790555050565b6000609c54609d546112cc9190611f2a565b6000818152609b6020526040812054829060ff1661155b57600080fd5b6000818152609b602052604090206008015460ff161561157a57600080fd5b6000838152609b6020908152604091829020825161016081018452815460ff808216151583526001600160a01b036101009283900416948301949094526001830154948201949094526002820154606082015260038201546080820152600482015460a082015260058201548316151560c0820152600682015460e0820152600782015484820152600882015480841615156101208301529390930490911615156101408301529061162b9061182b565b949350505050565b61163b61177a565b6001600160a01b0381166116a05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610429565b6116a98161193c565b50565b6116b4611bea565b6116c16103568484610f9c565b9392505050565b6001600160a01b0381166000908152609e60205260408120546116ec908390610f9c565b92915050565b60006116fd609a5490565b82106117555760405162461bcd60e51b815260206004820152602160248201527f546f6b656e56657374696e673a20696e646578206f7574206f6620626f756e646044820152607360f81b6064820152608401610429565b609a828154811061176857611768611f42565b90600052602060002001549050919050565b6033546001600160a01b0316331461077b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610429565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611826908490611a04565b505050565b60e08101516101408201516000914291156118765760006118606064610dd66098548860e001516119ec90919063ffffffff16565b60e08601519091506118729082611930565b9150505b836040015182108061188f575061012084015115156001145b1561189e575060009392505050565b608084015160608501516118b191611924565b82106118c85761010084015161162b908290611930565b60006118e185606001518461193090919063ffffffff16565b905060006119008660800151610dd684866119ec90919063ffffffff16565b905061191a8661010001518261193090919063ffffffff16565b9695505050505050565b60006116c18284611f2a565b60006116c18284611f13565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166119b55760405162461bcd60e51b815260040161042990611f58565b61077b3361193c565b600054610100900460ff166119e55760405162461bcd60e51b815260040161042990611f58565b6001606555565b60006116c18284611fa3565b60006116c18284611fc2565b6000611a59826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611ad69092919063ffffffff16565b8051909150156118265780806020019051810190611a779190611fe4565b6118265760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610429565b606061162b8484600085856001600160a01b0385163b611b385760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610429565b600080866001600160a01b03168587604051611b54919061202d565b60006040518083038185875af1925050503d8060008114611b91576040519150601f19603f3d011682016040523d82523d6000602084013e611b96565b606091505b5091509150611ba6828286611bb1565b979650505050505050565b60608315611bc05750816116c1565b825115611bd05782518084602001fd5b8160405162461bcd60e51b81526004016104299190612049565b60405180610160016040528060001515815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000151581526020016000151581525090565b6001600160a01b03811681146116a957600080fd5b600060208284031215611c7c57600080fd5b81356116c181611c55565b600060208284031215611c9957600080fd5b5035919050565b60008060408385031215611cb357600080fd5b50508035926020909101359150565b600080600060608486031215611cd757600080fd5b8335611ce281611c55565b95602085013595506040909401359392505050565b80151581146116a957600080fd5b600080600080600080600080610100898b031215611d2257600080fd5b8835611d2d81611c55565b97506020890135965060408901359550606089013594506080890135935060a0890135611d5981611cf7565b925060c0890135915060e0890135611d7081611cf7565b809150509295985092959890939650565b81511515815261016081016020830151611da660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c0830151611de260c084018215159052565b5060e08381015190830152610100808401519083015261012080840151151590830152610140928301511515929091019190915290565b60008060408385031215611e2c57600080fd5b8235611e3781611c55565b946020939093013593505050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600060208284031215611e8e57600080fd5b5051919050565b60208082526042908201527f546f6b656e56657374696e673a206f6e6c792062656e6566696369617279206160408201527f6e64206f776e65722063616e2072656c656173652076657374656420746f6b656060820152616e7360f01b608082015260a00190565b634e487b7160e01b600052601160045260246000fd5b600082821015611f2557611f25611efd565b500390565b60008219821115611f3d57611f3d611efd565b500190565b634e487b7160e01b600052603260045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611fbd57611fbd611efd565b500290565b600082611fdf57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611ff657600080fd5b81516116c181611cf7565b60005b8381101561201c578181015183820152602001612004565b838111156109445750506000910152565b6000825161203f818460208701612001565b9190910192915050565b6020815260008251806020840152612068816040850160208701612001565b601f01601f1916919091016040019291505056fea2646970667358221220fbc9d8c02c9fc42cb0da7f6634288aae1f521270464f4f39949daf10eb7ad1a264736f6c63430008090033";

type PaymeTokenVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymeTokenVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymeTokenVesting__factory extends ContractFactory {
  constructor(...args: PaymeTokenVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymeTokenVesting> {
    return super.deploy(overrides || {}) as Promise<PaymeTokenVesting>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PaymeTokenVesting {
    return super.attach(address) as PaymeTokenVesting;
  }
  override connect(signer: Signer): PaymeTokenVesting__factory {
    return super.connect(signer) as PaymeTokenVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymeTokenVestingInterface {
    return new utils.Interface(_abi) as PaymeTokenVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymeTokenVesting {
    return new Contract(address, _abi, signerOrProvider) as PaymeTokenVesting;
  }
}
