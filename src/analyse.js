const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function runAudit() {
  const filePath = path.join(__dirname, '../tickets.csv');

  if (!fs.existsSync(filePath)) {
    console.error('Error: tickets.csv not found in the root folder!');
    return;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  let totalTickets = records.length;
  let totalRefundAmount = 0;
  let refundedTicketsCount = 0;

  const reasonStats = {};
  const agentStats = {};

  records.forEach(row => {
    const rawAmt = parseFloat(row.refund_amount_inr) || 0;
    if (rawAmt > 0) {
      // Normalize legacy Freshdesk records stored in paisa (multiplied by 100)
      const normalizedAmt = row.source_system === 'legacy_fd' ? rawAmt / 100.0 : rawAmt;
      
      refundedTicketsCount++;
      totalRefundAmount += normalizedAmt;

      // Reason Code aggregation
      const code = row.refund_reason_code || 'UNSPECIFIED';
      if (!reasonStats[code]) {
        reasonStats[code] = { count: 0, totalAmount: 0 };
      }
      reasonStats[code].count += 1;
      reasonStats[code].totalAmount += normalizedAmt;

      // Agent aggregation
      const agent = row.agent_id || 'UNASSIGNED';
      agentStats[agent] = (agentStats[agent] || 0) + normalizedAmt;
    }
  });

  console.log('====================================================');
  console.log('       VIREO SUPPORT REFUND AUDIT & RECONCILIATION  ');
  console.log('====================================================');
  console.log(`Total Tickets Evaluated: ${totalTickets.toLocaleString()}`);
  console.log(`Total Refunded Tickets:  ${refundedTicketsCount.toLocaleString()}`);
  console.log(`Total True Refund Outflow: ₹${Math.round(totalRefundAmount).toLocaleString('en-IN')}\n`);

  console.log('--- RECONCILED BREAKDOWN BY REFUND REASON CODE ---');
  const sortedReasons = Object.entries(reasonStats)
    .sort((a, b) => b[1].totalAmount - a[1].totalAmount)
    .map(([code, stats]) => ({
      'Reason Code': code,
      'Count': stats.count,
      'Total INR (₹)': Math.round(stats.totalAmount).toLocaleString('en-IN'),
      'Avg INR/Ticket': Math.round(stats.totalAmount / stats.count).toLocaleString('en-IN')
    }));
  console.table(sortedReasons);

  console.log('--- TOP 5 AGENTS BY REFUND COST ---');
  const topAgents = Object.entries(agentStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([agent, amount]) => ({
      'Agent ID': agent,
      'Total Refunded (₹)': Math.round(amount).toLocaleString('en-IN')
    }));
  console.table(topAgents);
}

runAudit();