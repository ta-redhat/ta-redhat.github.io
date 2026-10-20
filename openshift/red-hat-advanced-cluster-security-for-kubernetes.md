# Red Hat Advanced Cluster Security for Kubernetes — What / How / Why / Where

## What is it?
**Red Hat Advanced Cluster Security for Kubernetes, powered by StackRox technology, is a Kubernetes-native security platform that protects applications across the build, deploy, and runtime stages of the software lifecycle.**

Rather than bolting generic security tools onto Kubernetes, it's built specifically to understand Kubernetes constructs — so policies and vulnerability detection apply natively to clusters, workloads, and namespaces.

## How does it work?
Advanced Cluster Security integrates with your CI/CD pipelines and image registries for continuous vulnerability scanning before deployment, then applies deploy-time and runtime policies to block risky workloads from running in the first place. It delivers Kubernetes security posture management (KSPM) to harden cluster infrastructure against targeted exploits, and provides hundreds of built-in compliance controls mapped to standards like CIS and NIST. It can be deployed self-managed inside your own Kubernetes infrastructure or consumed as a fully managed SaaS (Cloud Service), and a dedicated "for Virtualization" variant extends the same visibility and policy enforcement to VM workloads on OpenShift Virtualization Engine.

## Why do I need it?
Generic security tooling often doesn't understand Kubernetes-specific risk — a misconfigured pod security policy or an overly permissive service account can be a serious exposure that traditional scanners miss entirely. Advanced Cluster Security solves that by giving DevOps and InfoSec teams a single, Kubernetes-native view of vulnerabilities and policy violations across the whole application lifecycle, so issues get caught and enforced consistently from the first commit through to what's actually running in production.

## Where do I get it?
Included with Red Hat OpenShift Platform Plus; also available as a standalone subscription or managed cloud service (via AWS Marketplace). **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

**AWS Marketplace pricing** ([listing](https://aws.amazon.com/marketplace/pp/prodview-epwnwxab4jwdo)): the Advanced Cluster Security Cloud Service is billed on-demand at **$0.028 per vCPU per hour** across secured Kubernetes/OpenShift clusters, with no upfront commitment and the ability to cancel anytime. A 60-day free trial is available.

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes](https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes)
- [https://www.redhat.com/en/resources/advanced-cluster-security-for-kubernetes-datasheet](https://www.redhat.com/en/resources/advanced-cluster-security-for-kubernetes-datasheet)
