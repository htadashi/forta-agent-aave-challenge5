const {
  handleTransaction: handleProposalExecEvent,
} = require("./StatusChangeToExecutedEvent");

let findingsCount = 0;

const handleTransaction = async (txEvent) => {
  const findings = await handleProposalExecEvent(txEvent);
  findingsCount += findings.length;

  return findings;
};

module.exports = {
  handleTransaction,
};