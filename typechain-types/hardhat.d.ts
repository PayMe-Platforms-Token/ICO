/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Crowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Crowdsale__factory>;
    getContractFactory(
      name: "FinalizableCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FinalizableCrowdsale__factory>;
    getContractFactory(
      name: "CappedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CappedCrowdsale__factory>;
    getContractFactory(
      name: "PausableCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableCrowdsale__factory>;
    getContractFactory(
      name: "TimedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimedCrowdsale__factory>;
    getContractFactory(
      name: "WhitelistCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WhitelistCrowdsale__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Capped",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Capped__factory>;
    getContractFactory(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Crowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Crowdsale__factory>;
    getContractFactory(
      name: "FinalizableCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FinalizableCrowdsale__factory>;
    getContractFactory(
      name: "CappedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CappedCrowdsale__factory>;
    getContractFactory(
      name: "IndividuallyCappedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IndividuallyCappedCrowdsale__factory>;
    getContractFactory(
      name: "PausableCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableCrowdsale__factory>;
    getContractFactory(
      name: "TimedCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimedCrowdsale__factory>;
    getContractFactory(
      name: "WhitelistCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WhitelistCrowdsale__factory>;
    getContractFactory(
      name: "PaymeTokenCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymeTokenCrowdsale__factory>;
    getContractFactory(
      name: "PaymeTokenVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymeTokenVesting__factory>;
    getContractFactory(
      name: "BUSDToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BUSDToken__factory>;
    getContractFactory(
      name: "MockCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCrowdsale__factory>;
    getContractFactory(
      name: "MockTokenVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTokenVesting__factory>;
    getContractFactory(
      name: "Payme",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Payme__factory>;
    getContractFactory(
      name: "PaymeMultiSigWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymeMultiSigWallet__factory>;
    getContractFactory(
      name: "PaymeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymeToken__factory>;

    getContractAt(
      name: "Crowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Crowdsale>;
    getContractAt(
      name: "FinalizableCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FinalizableCrowdsale>;
    getContractAt(
      name: "CappedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CappedCrowdsale>;
    getContractAt(
      name: "PausableCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableCrowdsale>;
    getContractAt(
      name: "TimedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimedCrowdsale>;
    getContractAt(
      name: "WhitelistCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WhitelistCrowdsale>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Capped",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Capped>;
    getContractAt(
      name: "ERC20Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Pausable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Crowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Crowdsale>;
    getContractAt(
      name: "FinalizableCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FinalizableCrowdsale>;
    getContractAt(
      name: "CappedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CappedCrowdsale>;
    getContractAt(
      name: "IndividuallyCappedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IndividuallyCappedCrowdsale>;
    getContractAt(
      name: "PausableCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableCrowdsale>;
    getContractAt(
      name: "TimedCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimedCrowdsale>;
    getContractAt(
      name: "WhitelistCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WhitelistCrowdsale>;
    getContractAt(
      name: "PaymeTokenCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymeTokenCrowdsale>;
    getContractAt(
      name: "PaymeTokenVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymeTokenVesting>;
    getContractAt(
      name: "BUSDToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BUSDToken>;
    getContractAt(
      name: "MockCrowdsale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockCrowdsale>;
    getContractAt(
      name: "MockTokenVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTokenVesting>;
    getContractAt(
      name: "Payme",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Payme>;
    getContractAt(
      name: "PaymeMultiSigWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymeMultiSigWallet>;
    getContractAt(
      name: "PaymeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymeToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
