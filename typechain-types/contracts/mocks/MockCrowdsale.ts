/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MockCrowdsaleInterface extends utils.Interface {
  functions: {
    "BUSINESS_DEVELOPERS_PERCENTAGE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "PROJECT_TEAM_PERCENTAGE()": FunctionFragment;
    "TECHINCAL_DEVELOPERS_PERCENTAGE()": FunctionFragment;
    "addWhitelisted(address)": FunctionFragment;
    "bUSDT()": FunctionFragment;
    "buyTokens(address)": FunctionFragment;
    "buyTokensInBUSD(address,uint256)": FunctionFragment;
    "cap()": FunctionFragment;
    "capReached()": FunctionFragment;
    "cliff()": FunctionFragment;
    "closingTime()": FunctionFragment;
    "createInvestors()": FunctionFragment;
    "duration()": FunctionFragment;
    "finalize()": FunctionFragment;
    "finalized()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasClosed()": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "isOpen()": FunctionFragment;
    "maximumSale()": FunctionFragment;
    "minimumSale()": FunctionFragment;
    "openingTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "rate()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "token()": FunctionFragment;
    "tokenGenerationEventTime()": FunctionFragment;
    "totalTeamShare()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "vestingAddress()": FunctionFragment;
    "wallet()": FunctionFragment;
    "weiRaised()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BUSINESS_DEVELOPERS_PERCENTAGE"
      | "DEFAULT_ADMIN_ROLE"
      | "PROJECT_TEAM_PERCENTAGE"
      | "TECHINCAL_DEVELOPERS_PERCENTAGE"
      | "addWhitelisted"
      | "bUSDT"
      | "buyTokens"
      | "buyTokensInBUSD"
      | "cap"
      | "capReached"
      | "cliff"
      | "closingTime"
      | "createInvestors"
      | "duration"
      | "finalize"
      | "finalized"
      | "getRoleAdmin"
      | "grantRole"
      | "hasClosed"
      | "hasRole"
      | "isOpen"
      | "maximumSale"
      | "minimumSale"
      | "openingTime"
      | "owner"
      | "pause"
      | "paused"
      | "rate"
      | "renounceOwnership"
      | "renounceRole"
      | "revokeRole"
      | "setCurrentTime"
      | "supportsInterface"
      | "token"
      | "tokenGenerationEventTime"
      | "totalTeamShare"
      | "transferOwnership"
      | "unpause"
      | "vestingAddress"
      | "wallet"
      | "weiRaised"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BUSINESS_DEVELOPERS_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROJECT_TEAM_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TECHINCAL_DEVELOPERS_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addWhitelisted",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "bUSDT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokensInBUSD",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "cap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "capReached",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cliff", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closingTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createInvestors",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
  encodeFunctionData(functionFragment: "finalized", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "hasClosed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maximumSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenGenerationEventTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalTeamShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestingAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BUSINESS_DEVELOPERS_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROJECT_TEAM_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TECHINCAL_DEVELOPERS_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bUSDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokensInBUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "capReached", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cliff", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createInvestors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClosed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maximumSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenGenerationEventTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTeamShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;

  events: {
    "CrowdsaleFinalized()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "TimedCrowdsaleExtended(uint256,uint256)": EventFragment;
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrowdsaleFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TimedCrowdsaleExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CrowdsaleFinalizedEventObject {}
export type CrowdsaleFinalizedEvent = TypedEvent<
  [],
  CrowdsaleFinalizedEventObject
>;

export type CrowdsaleFinalizedEventFilter =
  TypedEventFilter<CrowdsaleFinalizedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TimedCrowdsaleExtendedEventObject {
  prevClosingTime: BigNumber;
  newClosingTime: BigNumber;
}
export type TimedCrowdsaleExtendedEvent = TypedEvent<
  [BigNumber, BigNumber],
  TimedCrowdsaleExtendedEventObject
>;

export type TimedCrowdsaleExtendedEventFilter =
  TypedEventFilter<TimedCrowdsaleExtendedEvent>;

export interface TokensPurchasedEventObject {
  purchaser: string;
  beneficiary: string;
  value: BigNumber;
  amount: BigNumber;
}
export type TokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokensPurchasedEventObject
>;

export type TokensPurchasedEventFilter = TypedEventFilter<TokensPurchasedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface MockCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockCrowdsaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BUSINESS_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PROJECT_TEAM_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    TECHINCAL_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addWhitelisted(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bUSDT(overrides?: CallOverrides): Promise<[string]>;

    buyTokens(
      beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyTokensInBUSD(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cap(overrides?: CallOverrides): Promise<[BigNumber]>;

    capReached(overrides?: CallOverrides): Promise<[boolean]>;

    cliff(overrides?: CallOverrides): Promise<[BigNumber]>;

    closingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    createInvestors(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalized(overrides?: CallOverrides): Promise<[boolean]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasClosed(overrides?: CallOverrides): Promise<[boolean]>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    maximumSale(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumSale(overrides?: CallOverrides): Promise<[BigNumber]>;

    openingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCurrentTime(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenGenerationEventTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalTeamShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vestingAddress(overrides?: CallOverrides): Promise<[string]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BUSINESS_DEVELOPERS_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  PROJECT_TEAM_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  TECHINCAL_DEVELOPERS_PERCENTAGE(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addWhitelisted(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bUSDT(overrides?: CallOverrides): Promise<string>;

  buyTokens(
    beneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyTokensInBUSD(
    beneficiary: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cap(overrides?: CallOverrides): Promise<BigNumber>;

  capReached(overrides?: CallOverrides): Promise<boolean>;

  cliff(overrides?: CallOverrides): Promise<BigNumber>;

  closingTime(overrides?: CallOverrides): Promise<BigNumber>;

  createInvestors(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  finalize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalized(overrides?: CallOverrides): Promise<boolean>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasClosed(overrides?: CallOverrides): Promise<boolean>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  maximumSale(overrides?: CallOverrides): Promise<BigNumber>;

  minimumSale(overrides?: CallOverrides): Promise<BigNumber>;

  openingTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCurrentTime(
    _time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenGenerationEventTime(overrides?: CallOverrides): Promise<BigNumber>;

  totalTeamShare(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vestingAddress(overrides?: CallOverrides): Promise<string>;

  wallet(overrides?: CallOverrides): Promise<string>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BUSINESS_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    PROJECT_TEAM_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    TECHINCAL_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addWhitelisted(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    bUSDT(overrides?: CallOverrides): Promise<string>;

    buyTokens(
      beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyTokensInBUSD(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    capReached(overrides?: CallOverrides): Promise<boolean>;

    cliff(overrides?: CallOverrides): Promise<BigNumber>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    createInvestors(overrides?: CallOverrides): Promise<void>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    finalize(overrides?: CallOverrides): Promise<void>;

    finalized(overrides?: CallOverrides): Promise<boolean>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasClosed(overrides?: CallOverrides): Promise<boolean>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    maximumSale(overrides?: CallOverrides): Promise<BigNumber>;

    minimumSale(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrentTime(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenGenerationEventTime(overrides?: CallOverrides): Promise<BigNumber>;

    totalTeamShare(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    vestingAddress(overrides?: CallOverrides): Promise<string>;

    wallet(overrides?: CallOverrides): Promise<string>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "CrowdsaleFinalized()"(): CrowdsaleFinalizedEventFilter;
    CrowdsaleFinalized(): CrowdsaleFinalizedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

    "TimedCrowdsaleExtended(uint256,uint256)"(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;
    TimedCrowdsaleExtended(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;

    "TokensPurchased(address,address,uint256,uint256)"(
      purchaser?: PromiseOrValue<string> | null,
      beneficiary?: PromiseOrValue<string> | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
    TokensPurchased(
      purchaser?: PromiseOrValue<string> | null,
      beneficiary?: PromiseOrValue<string> | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    BUSINESS_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PROJECT_TEAM_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    TECHINCAL_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addWhitelisted(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bUSDT(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokens(
      beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyTokensInBUSD(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    capReached(overrides?: CallOverrides): Promise<BigNumber>;

    cliff(overrides?: CallOverrides): Promise<BigNumber>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    createInvestors(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalized(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasClosed(overrides?: CallOverrides): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    maximumSale(overrides?: CallOverrides): Promise<BigNumber>;

    minimumSale(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCurrentTime(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenGenerationEventTime(overrides?: CallOverrides): Promise<BigNumber>;

    totalTeamShare(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vestingAddress(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BUSINESS_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROJECT_TEAM_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TECHINCAL_DEVELOPERS_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addWhitelisted(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bUSDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTokens(
      beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyTokensInBUSD(
      beneficiary: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    capReached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cliff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createInvestors(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maximumSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCurrentTime(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenGenerationEventTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTeamShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vestingAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
