# Red Hat Advanced Developer Suite — What / How / Why / Where

## What is it?
**Red Hat Advanced Developer Suite is a curated bundle of developer-productivity and software-supply-chain-security tools that extends OpenShift, letting platform engineers enforce governance while developers and AI agents build and ship faster.**

It combines an internal developer portal, software supply chain security, and automated vulnerability remediation into one offering, aimed at teams that need both velocity and strict security guardrails on the same software delivery lifecycle.

## How does it work?
The suite bundles **Red Hat Developer Hub** (a Backstage-based internal developer portal providing self-service workflows, "golden path" templates, and enterprise context for developers and AI agents), **Red Hat Trusted Profile Analyzer** (real-time vulnerability tracking and SBOM management to build trust in your codebase), and **Red Hat Trusted Artifact Signer** (cryptographic signing and verification of software artifacts, AI models, and metadata). It automates SLSA Level 3 build pipelines, provenance tracking, and vulnerability analysis, and integrates with OpenShift Pipelines, OpenShift GitOps, OpenShift Dev Spaces, Podman Desktop, and the migration toolkit for applications. Notably, it connects directly to **Red Hat Lightwell**: dependency patches from Lightwell can flow straight into automated deployment pipelines on OpenShift, shrinking the critical CVE patch-to-production window from months to days without application downtime.

## Why do I need it?
Developers are under pressure to ship fast, but that runs against rising open source supply-chain risk — and enforcing security usually means manual review gates that slow delivery. Advanced Developer Suite removes that trade-off:

- Self-service tools and golden paths so developers (and AI coding agents) move fast
- Background governance, automated signing, and SBOM/CVE tracking enforce policy without manual bottlenecks
- Automatically turns a Lightwell-identified vulnerability into a deployed fix

## Where do I get it?
Supports deployment on OpenShift clusters (including ROSA and Azure Red Hat OpenShift) and other Kubernetes providers. A sales-assisted product trial is available. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/products/advanced-developer-suite](https://www.redhat.com/en/products/advanced-developer-suite)
- [https://developers.redhat.com/articles/2025/05/20/what-red-hat-advanced-developer-suite-overview](https://developers.redhat.com/articles/2025/05/20/what-red-hat-advanced-developer-suite-overview)
- [https://www.redhat.com/en/about/press-releases/red-hat-delivers-red-hat-advanced-developer-suite-accelerate-application-development](https://www.redhat.com/en/about/press-releases/red-hat-delivers-red-hat-advanced-developer-suite-accelerate-application-development)
