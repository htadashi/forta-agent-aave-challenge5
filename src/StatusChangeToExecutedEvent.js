const BigNumber = require("bignumber.js");
const { Finding, FindingSeverity, FindingType } = require("forta-agent");

const PROPOSAL_EXECUTED_EVENT = "event ProposalExecuted(uint256 id, address indexed initiatorExecution)";
const AAVE_GOVERNANCE_V2_ADDRESS = "0xEC568fffba86c094cf06b22134B23074DFE2252c";

const handleTransaction = async (txEvent) => {
  const findings = [];

  // filter the transaction logs for proposal execution events
  const proposalExecutionEvents = txEvent.filterLog(
    PROPOSAL_EXECUTED_EVENT,
    AAVE_GOVERNANCE_V2_ADDRESS
  );

  // fire alerts for each event executed
  proposalExecutionEvents.forEach((proposalExecution) => {

    findings.push(
      Finding.fromObject({
        name: "Proposal Executed",
        description: "Proposal Executed",
        alertId: "FORTA-5",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata: {
          id: proposalExecution.args.id,
          initiator: proposalExecution.args.initiatorExecution 
        },
      })
    );
  });

  return findings;
};

module.exports = {
  handleTransaction,
};