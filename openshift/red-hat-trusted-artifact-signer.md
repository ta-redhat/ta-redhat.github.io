# Red Hat Trusted Artifact Signer — What / How / Why / Where

## What is it?
**Red Hat Trusted Artifact Signer enhances software supply chain security by making it simple to cryptographically sign and verify software artifacts — container images, binaries, documents, Git commits, and even AI models.**

It's a production-ready, enterprise deployment of the open source **Sigstore** project (which Red Hat itself founded in 2020 before donating it to the Linux Foundation/OpenSSF), bringing the same signing approach that's become standard for package ecosystems like NPM, Python, and Maven into your own organization.

## How does it work?
Trusted Artifact Signer provides a transparent, auditable system for signing software artifacts and recording provenance — an immutable, verifiable record of who signed what and when, making it much harder for an attacker to tamper with an artifact without detection. Its broad compatibility means it integrates straightforwardly into an existing supply chain; multiple Red Hat products (Podman, Quay, Ansible, Advanced Cluster Security, and others) have adopted or are integrating Sigstore-based signing.

## Why do I need it?
Without cryptographic signing, there's no reliable way to prove a container image, binary, or commit is actually the one your team built and approved — opening the door to supply chain attacks. Trusted Artifact Signer closes that gap with a verifiable, auditable signature and provenance trail for every artifact, using an open approach already adopted across major open source ecosystems.

## Where do I get it?
Available standalone or bundled (with Red Hat Developer Hub and Red Hat Trusted Profile Analyzer) as part of **Red Hat Advanced Developer Suite**. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://developers.redhat.com/products/trusted-artifact-signer](https://developers.redhat.com/products/trusted-artifact-signer)
- [https://access.redhat.com/products/red-hat-trusted-artifact-signer/](https://access.redhat.com/products/red-hat-trusted-artifact-signer/)
