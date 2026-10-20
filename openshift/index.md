# Red Hat OpenShift — What / How / Why / Where

## What is it?
**Red Hat OpenShift is an enterprise application platform, built on Kubernetes, for building, deploying, running, and modernizing containerized applications and AI workloads across hybrid cloud environments.**

OpenShift takes open source Kubernetes and wraps it with the security, management tooling, developer experience, and vendor support an enterprise needs to run it in production at scale. It covers the whole application lifecycle — from building new cloud-native apps, to modernizing (rehosting, re-platforming, or refactoring) existing ones, to migrating traditional virtual machines onto the same platform, to deploying and managing predictive and generative AI models via Red Hat OpenShift AI. It's offered in several forms: fully managed cloud services on partner platforms (e.g., Google Cloud), and self-managed editions ranging from an entry-level Kubernetes container runtime up to an "Advanced" tier with multicluster security and management for large, complex environments — plus a VM-only edition for organizations focused purely on virtual machine migration.

## How does it work?
At its core, OpenShift runs your applications as containers orchestrated by Kubernetes, which automatically handles scheduling, scaling, networking, and recovery for those workloads across a cluster of machines. Red Hat adds a management console, built-in security controls, and a set of "operators" — add-on components you can enable from a single console to extend the platform, such as OpenShift GitOps and Pipelines for CI/CD, OpenShift Service Mesh and Serverless for microservices/infrastructure management, and OpenShift Observability for real-time monitoring. You can run OpenShift yourself (self-managed) on your own infrastructure or cloud, or let Red Hat/a cloud partner manage it for you as a hosted service — either way, the experience and tooling stay consistent, so teams use the same workflows regardless of where a given cluster lives.

## Why do I need it?
If your organization is trying to modernize legacy applications, move faster on new cloud-native development, or deploy AI models into production, doing it with raw, unmanaged Kubernetes means your team has to build and maintain all the security hardening, update management, and operational tooling themselves — which is a significant ongoing burden and a common source of production incidents. OpenShift solves that by giving you a single, supported platform where application modernization, new development, VM migration, and AI deployment all happen with the same security model, tooling, and operational practices, instead of stitching together separate one-off solutions. It's particularly valuable if you're consolidating multiple application types (containers and VMs) onto one platform, need to deploy AI/agentic workloads consistently across hybrid cloud, or want built-in CI/CD and observability instead of assembling that tooling from scratch.

## Where do I get it?
OpenShift is not sold through the self-serve Red Hat Store — purchasing typically goes through a sales conversation or a cloud marketplace. To get started, you can **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact), purchase through a **cloud marketplace** (OpenShift is available as a managed service on partner clouds such as Google Cloud), or work through a Red Hat partner. No-cost trials and pay-as-you-go options are also available for evaluation before committing to a subscription.

Red Hat publishes a central [**OpenShift pricing comparison page**](https://www.redhat.com/en/technologies/cloud-computing/openshift/pricing) covering all the managed cloud editions side by side; reserved-instance pricing starts as low as **$0.076/hour** (per 4 vCPU, 3-year contract). See each managed edition's own page in this project (ROSA, ARO, OpenShift Dedicated) for the specific published rates.

## Related Products
OpenShift has by far the largest ecosystem of related products of anything in this project — editions, managed-service variants, bundled capabilities, and standalone tools that extend it. Grouped for clarity:

**Editions & managed-service variants**

- [Red Hat OpenShift Platform Plus](<red-hat-openshift-platform-plus.md>) — the most complete self-managed edition (adds Advanced Cluster Management, Advanced Cluster Security, Quay, and storage)
- [Red Hat OpenShift Kubernetes Engine](<red-hat-openshift-kubernetes-engine.md>) — entry-level, lower-cost edition with a reduced feature set
- [Red Hat OpenShift Virtualization Engine](<red-hat-openshift-virtualization-engine.md>) — self-managed, VM-only edition
- [Red Hat OpenShift Dedicated](<red-hat-openshift-dedicated.md>) — fully managed by Red Hat on AWS or Google Cloud
- [Red Hat OpenShift Service on AWS (ROSA)](<red-hat-openshift-service-on-aws-(rosa).md>) — native, jointly managed AWS service
- [Azure Red Hat OpenShift (ARO)](<azure-red-hat-openshift-(aro).md>) — native, jointly managed Azure service

**Bundled capabilities (included with OpenShift)**

- [Red Hat OpenShift Virtualization](<red-hat-openshift-virtualization.md>) — run VMs alongside containers on any OpenShift edition
- [Red Hat OpenShift GitOps](<red-hat-openshift-gitops.md>) — Argo CD-based GitOps operator
- [Red Hat OpenShift Pipelines](<red-hat-openshift-pipelines.md>) — Tekton-based CI/CD
- [Red Hat OpenShift Service Mesh](<red-hat-openshift-service-mesh.md>) — Istio-based microservices connectivity/security
- [Red Hat OpenShift Serverless](<red-hat-openshift-serverless.md>) — Knative-based event-driven/scale-to-zero apps
- [Red Hat OpenShift Observability](<red-hat-openshift-observability.md>) — unified monitoring, logging, and tracing
- [Red Hat OpenShift Dev Spaces](<red-hat-openshift-dev-spaces.md>) — browser-based cloud development environments
- **Red Hat OpenShift AI** — AI/ML model and agent lifecycle platform; fully documented under [`red-hat-ai/red-hat-openshift-ai.md`](<../red-hat-ai/red-hat-openshift-ai.md>) since it's also a core Red Hat AI product

**Fleet management & security (Platform Plus components, also available standalone)**

- [Red Hat Advanced Cluster Management for Kubernetes](<red-hat-advanced-cluster-management-for-kubernetes.md>) — multicluster fleet management and governance
- [Red Hat Advanced Cluster Security for Kubernetes](<red-hat-advanced-cluster-security-for-kubernetes.md>) — Kubernetes-native security across build/deploy/runtime
- [Red Hat Quay](<red-hat-quay.md>) — enterprise container registry

**Developer experience & software supply chain security**

- [Red Hat Advanced Developer Suite](<red-hat-advanced-developer-suite.md>) — bundled developer productivity + supply chain security suite (also connects to Lightwell)
- [Red Hat Developer Hub](<red-hat-developer-hub.md>) — Backstage-based internal developer portal
- [Red Hat Trusted Profile Analyzer](<red-hat-trusted-profile-analyzer.md>) — SBOM/CVE/VEX risk analysis
- [Red Hat Trusted Artifact Signer](<red-hat-trusted-artifact-signer.md>) — cryptographic artifact signing/verification

**Local development & AI assistance**

- [Red Hat OpenShift Local](<red-hat-openshift-local.md>) — free, single-node OpenShift cluster for your laptop
- [Red Hat OpenShift Lightspeed](<red-hat-openshift-lightspeed.md>) — generative AI assistant built into the OpenShift console

## Learn more
Red Hat's [Topics](https://www.redhat.com/en/topics) index groups its educational content by subject. OpenShift is, by far, the largest cluster of related topics — covering containers, Kubernetes, cloud-native development, and the broader hybrid cloud platform ecosystem.

**Topics related to OpenShift:**

- [5G networks](https://www.redhat.com/en/topics/5g-networks)
- [APIs](https://www.redhat.com/en/topics/api)
- [Application modernization](https://www.redhat.com/en/topics/application-modernization)
- [Big data](https://www.redhat.com/en/topics/big-data)
- [Cloud computing](https://www.redhat.com/en/topics/cloud-computing)
- [Cloud-native apps](https://www.redhat.com/en/topics/cloud-native-apps)
- [Cloud services](https://www.redhat.com/en/topics/cloud-computing/what-are-cloud-services)
- [Containers](https://www.redhat.com/en/topics/containers)
- [Data services](https://www.redhat.com/en/topics/data-services)
- [Data storage](https://www.redhat.com/en/topics/data-storage)
- [DevOps](https://www.redhat.com/en/topics/devops)
- [Healthcare IT](https://www.redhat.com/en/topics/healthcare-it)
- [Hyperconverged infrastructure](https://www.redhat.com/en/topics/hyperconverged-infrastructure)
- [Integration](https://www.redhat.com/en/topics/integration)
- [Microservices](https://www.redhat.com/en/topics/microservices)
- [Middleware](https://www.redhat.com/en/topics/middleware)
- [Modernizing payments infrastructure](https://www.redhat.com/en/topics/financial-services/what-is-payments-infrastructure)
- [Mobile](https://www.redhat.com/en/topics/mobile)
- [OpenStack](https://www.redhat.com/en/topics/openstack)
- [Virtualization](https://www.redhat.com/en/topics/virtualization)
- [Platform engineering](https://www.redhat.com/en/topics/platform-engineering)

**Top articles:**

- [What is Kubernetes?](https://www.redhat.com/en/topics/containers/what-is-kubernetes)
- [What is containerization?](https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization)
- [What is a container registry?](https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry)
- [Why choose Red Hat for Kubernetes?](https://www.redhat.com/en/topics/containers/why-choose-red-hat-kubernetes)
- [Why choose Red Hat for containers?](https://www.redhat.com/en/topics/containers/why-choose-red-hat-containers)
- [What is Docker?](https://www.redhat.com/en/topics/containers/what-is-docker)
- [What is container orchestration?](https://www.redhat.com/en/topics/containers/what-is-container-orchestration)
- [Containers vs VMs](https://www.redhat.com/en/topics/containers/containers-vs-vms)
- [What is a Kubernetes cluster?](https://www.redhat.com/en/topics/containers/what-is-a-kubernetes-cluster)
- [Introduction to Kubernetes architecture](https://www.redhat.com/en/topics/containers/kubernetes-architecture)

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift](https://www.redhat.com/en/technologies/cloud-computing/openshift)
- [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact)
- [https://www.redhat.com/en/topics](https://www.redhat.com/en/topics)
