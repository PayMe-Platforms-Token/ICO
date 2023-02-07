// contracts/TokenVesting.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "../ico/PaymeTokenVesting.sol";

/**
 * @title MockToken1Vesting
 * WARNING: use only for testing and debugging purpose
 */
contract MockTokenVesting is PaymeTokenVesting{

    uint256 mockTime;

    constructor(IERC20 iToken,uint256 iTGEPercent,uint256 iTGEOpeningTime) 
    PaymeTokenVesting (iToken, iTGEPercent,iTGEOpeningTime ) {
      
    }

    function setCurrentTime(uint256 _time)
        external{
        mockTime = _time;
    }

    function getCurrentTime()
        public 
        virtual
        override
        view
        returns(uint256){
        return mockTime;
    }
}