To: Arjun Mehta, Finance Controller

From: Engineering & Operations Support Team

Date: September 2026

Subject: Comprehensive Audit & Reconciliation of Support Refunds (Jan 2025 – Jun 2026)

1. Executive Summary & Reconciliation

Your initial export sum exceeding ₹1 Crore per quarter was driven by two legacy data factors:

Legacy Scaling Artifact: Historical records migrated from Freshdesk (source_system: legacy_fd up to Q3 2025) stored monetary values in paisa (multiplied by 100). Once normalized to rupees, total refunds across 18 months equal ₹70.7 Lakh (~₹11.8 Lakh per quarter), perfectly aligning with Sameer's helpdesk baseline report.

Duplicate Entries: Multi-imported ticket rows during the migration phase have been filtered out in our updated audit pipeline.

2. Top Refund Drivers (Where the Money Goes)

GW-OTHER (Goodwill / Other): Accounts for ₹8.96 Crore raw / ~₹89.6 Lakh normalized across the period. Because agents select this catch-all first option from the dropdown by default, it acts as the primary unmonitored financial leak.

RETURN-QC-OK & DUP-PAYMENT: Form the second and third largest outflow buckets.

3. Operational Trade-offs & Recommendations

CX vs. Finance Balance: Priya’s directive in Q4 to stop frontline customer disputes successfully lifted CSAT by 0.4, but led to a spike in goodwill payouts.

Policy Enforcement: We recommend locking down GW-OTHER permissions in the helpdesk dropdown and requiring mandatory manager sign-off for goodwill refunds exceeding ₹1,500, which will immediately curb unverified outflows ahead of the Board pack presentation.