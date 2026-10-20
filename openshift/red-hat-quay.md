# Red Hat Quay — What / How / Why / Where

## What is it?
**Red Hat Quay is an enterprise-grade, security-focused container registry for storing, distributing, scanning, and governing container images and cloud-native artifacts across datacenter, cloud, OpenShift, and Kubernetes environments.**

It's the trusted, central source of truth that container platforms rely on to pull images from — built on the same codebase that powers the public Quay.io service, which delivers millions of images daily.

## How does it work?
Quay continuously analyzes container images for security vulnerabilities as they're stored, flagging issues before a given image is ever deployed, and offers a scale-out, geo-replicated architecture so a single registry can serve thousands of clusters across geographically distributed sites reliably. It provides granular access control with a full audit trail for team collaboration on shared content. Quay is available three ways: as a self-managed standalone product you run yourself (priced per deployment, purchasable with OpenShift or separately), included with Red Hat OpenShift Platform Plus, or as **Quay.io**, a fully managed hosted SaaS registry with public and private repository options priced per number of private repositories.

## Why do I need it?
Without a dedicated, resilient registry, container image storage and distribution becomes a single point of failure and a weak link in your software supply chain — especially across a multicluster, multisite deployment where images need to be available reliably everywhere, with no unscanned or untrusted content slipping through. Quay solves that by giving you a purpose-built, highly available registry with built-in vulnerability scanning and access control, whether you want to run it yourself or let Red Hat manage it for you.

## Where do I get it?
Available as a standalone self-managed subscription, included with OpenShift Platform Plus, or as the managed Quay.io service. Not sold through the self-serve Red Hat Store. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

**Quay.io hosted pricing** ([quay.io/plans](https://quay.io/plans/), also listed on [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-obcdisdfyp5oc)): public repositories are always free with unlimited storage. Private repositories are billed monthly by capacity tier — **Developer $15/mo** (5 private repos), **Micro $30/mo** (10), **Small $60/mo** (20), **Large $125/mo** (50), scaling up to **5XL $3,100/mo** (2,000). Self-managed Quay (standalone subscription or bundled with Platform Plus) remains quote-based — contact sales.

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/quay](https://www.redhat.com/en/technologies/cloud-computing/quay)
- [https://www.redhat.com/en/resources/quay-datasheet](https://www.redhat.com/en/resources/quay-datasheet)
