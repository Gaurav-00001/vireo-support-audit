To: Arjun Mehta, Finance Controller

From: Engineering & Operations Support Team

Date: September 2026

Subject: Comprehensive Audit & Reconciliation of Support Refunds (Jan 2025 – Jun 2026)

1. Executive Summary & Reconciliation

The initial export showed refunds exceeding ₹1 Crore per quarter. This was caused by two legacy data issues:

- Legacy Scaling Artifact: Historical records migrated from Freshdesk (source_system: legacy_fd, up to Q3 2025) stored monetary values in paisa (multiplied by 100). Once normalized to rupees, total refunds across the 18 months come to ₹70.7 Lakh (~₹11.8 Lakh per quarter), which aligns with Sameer's helpdesk baseline report.
- Duplicate Entries: Ticket rows imported more than once during the migration phase have been filtered out in our updated audit pipeline.

2. Top Refund Drivers (Where the Money Goes)

- GW-OTHER (Goodwill / Other): Accounts for ₹8.96 Crore raw / ~₹89.6 Lakh normalized across the period. Agents tend to select this catch-all option because it is the first choice in the dropdown, making it the primary unmonitored financial leak.
- RETURN-QC-OK and DUP-PAYMENT: The second and third largest outflow categories.

3. Operational Trade-offs & Recommendations

- CX vs. Finance Balance: Priya's directive in Q4 to stop frontline customer disputes lifted CSAT by 0.4 but also led to a spike in goodwill payouts.
- Policy Enforcement: We recommend restricting GW-OTHER permissions in the helpdesk dropdown and requiring manager sign-off for goodwill refunds above ₹1,500. This should help curb unverified outflows ahead of the Board pack presentation.
