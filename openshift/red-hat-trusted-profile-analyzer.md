# Red Hat Trusted Profile Analyzer — What / How / Why / Where

## What is it?
**Red Hat Trusted Profile Analyzer manages your organization's Software Bills of Materials (SBOMs), vendor VEX, and CVE data so developers and security teams can analyze software risk across custom, third-party, and open source components from one shared system of record.**

It's part of Red Hat Trusted Software Supply Chain, focused specifically on the "do we actually know what's in our software, and is any of it risky" question.

## How does it work?
Trusted Profile Analyzer stores and manages SBOMs and cross-references them against CVEs and security advisories that are continuously ingested from trusted sources, including Red Hat itself. That cross-referencing means you can quickly see, for any given application or component, exactly what vulnerabilities apply to it — without manually matching dependency lists against vulnerability databases yourself. It's designed to plug into the development process early, so risky components get flagged before they become expensive rework later in production.

## Why do I need it?
Over two-thirds of application code today is inherited open source dependencies, and most organizations lack a reliable, continuously updated record of what's in their software or which components carry known vulnerabilities — so risk is often discovered late. Trusted Profile Analyzer gives you a curated, cross-referenced view of your software risk profile across all your code.

## Where do I get it?
Available standalone or bundled (with Red Hat Developer Hub and Red Hat Trusted Artifact Signer) as part of **Red Hat Advanced Developer Suite**. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://developers.redhat.com/products/trusted-profile-analyzer](https://developers.redhat.com/products/trusted-profile-analyzer)
- [https://developers.redhat.com/products/trusted-software-supply-chain](https://developers.redhat.com/products/trusted-software-supply-chain)
