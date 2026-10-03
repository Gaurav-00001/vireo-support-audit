# Vireo Audio - Support Refund Audit & Reconciliation Tool

Automated data pipeline and auditing tool designed to reconcile support refunds, normalize legacy currency systems, and isolate financial leakage for Vireo Audio.

---

## Prerequisites
- Node.js (v18 or higher recommended)
- npm

---

## Project Structure
```text
vireo-support-audit/
├── tickets.csv       # Support tickets dataset
├── agents.csv        # Support agent roster
├── orders.csv        # Reference order data
├── customers.csv     # Customer data
├── products.csv      # Product catalog and retail prices
├── package.json      # Node dependencies configuration
├── MEMORANDUM.md     # Executive financial memo for Arjun Mehta
├── README.md         # Project documentation & instructions
└── src/
    └── analyse.js    # Core data processing and reconciliation script
Quickstart (Fresh Machine Setup Instructions)
Follow these steps to set up and run the audit tool locally:

Clone the Repository & Navigate into the Folder:

Bash
git clone <your-repository-url>
cd vireo-support-audit
Install Dependencies:

Bash
npm install
(This installs csv-parse required for reading the ticket logs).

Verify Data Placement:
Ensure that all reference CSV files (tickets.csv, agents.csv, orders.csv, customers.csv, products.csv) are located directly in the root directory.

Run the Audit Script:

Bash
node src/analyse.js



