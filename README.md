# Forta Agent for monitoring Aave's Proposals Execution

## Description

This agent detects if a governance proposal is executed

## Supported Chains

- Ethereum

## Alerts

- FORTA-5
  - Fired when the event [`ProposalExecuted`](https://github.com/aave/governance-v2/blob/612833ab825f9cea57d82a5d214590ce16c7723d/contracts/interfaces/IAaveGovernanceV2.sol#L104) is executed
  - Severity is always set to "info"
  - Type is always set to "info"
  - Metadata
    - id: Id of the proposal
    - initiator: address of the initiator of the execution transaction

## Test Data

The agent behaviour can be verified with the following transaction:

- 0x55390f9ad5c1b325bc32f10f24c5a75d34a9d79869512f56ad95987044686ca1
