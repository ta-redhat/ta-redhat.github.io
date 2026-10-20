# Red Hat Enterprise Linux (RHEL) — What / How / Why / Where

## What is it?
**Red Hat Enterprise Linux (RHEL) is a commercially supported, enterprise-grade Linux operating system that gives organizations a consistent, secure foundation for running applications across physical servers, virtual machines, private and public clouds, and edge devices.**

RHEL is Red Hat's flagship product and the OS layer underneath most of its other platforms (OpenShift, Ansible Automation Platform, and Red Hat AI all run on or alongside it). Instead of assembling and maintaining your own Linux distribution from open source components, you get a hardened, tested, and certified OS backed by a subscription that includes security patches, bug fixes, technical support, and a predictable multi-year lifecycle. It comes in two main editions — RHEL Server for general production workloads and RHEL for Workstations for high-performance graphics, animation, and scientific computing — and runs across x86, ARM, IBM Power, IBM Z, and IBM LinuxONE hardware.

The current major version, RHEL 10, adds AI-readiness features, tools to reduce "drift" from container use, and early post-quantum security support, continuing RHEL's pattern of evolving to meet new infrastructure demands (cloud, containers, edge, AI) while keeping a stable, certified core.

## How does it work?
You install RHEL on a physical server, virtual machine, or cloud instance (RHEL images are available on AWS, Microsoft Azure, and Google Cloud), or use a pre-built image from a cloud marketplace. Once installed, the system is registered to a Red Hat subscription, which unlocks access to Red Hat's software repositories, security patches, and support. From there, Red Hat handles the ongoing work of testing and certifying updates, issuing security patches (including live kernel patching, so systems rarely need a reboot for critical fixes), and supporting the OS through a standardized lifecycle of full support, maintenance support, and an optional extended-life phase. Built-in tooling like Red Hat Lightspeed provides continuous vulnerability alerts and guidance, and features like image mode and edge-optimized images make it easier to manage consistent, automatically-updating fleets of systems at scale, including at the edge.

## Why do I need it?
Running production workloads on an unsupported or community Linux distribution means your organization is on its own when something breaks, a vulnerability is disclosed, or hardware/software needs certification — there's no vendor accountable for fixing it or guaranteeing compatibility. RHEL solves that by giving you one consistent, certified OS that behaves the same way whether it's running on-prem, in a VM, in the cloud, or at the edge, which reduces the "it works here but not there" problems that come from mixing different Linux setups. It matters most if you're running mission-critical applications, need to pass compliance/security certifications, are modernizing legacy infrastructure (e.g., migrating off CentOS Linux 7, which reached end of life), are standing up AI workloads that need a predictable foundation to scale on, or are managing infrastructure at a scale (hundreds to hundreds of thousands of nodes) where manual patching and inconsistent environments become a real operational risk.

## Where do I get it?
RHEL is sold directly through the **Red Hat Store**: [https://www.redhat.com/en/store](https://www.redhat.com/en/store). Current list pricing (1-year term) for **RHEL Server**: [Self-Support US$383.90](https://www.redhat.com/en/store/red-hat-enterprise-linux-server), Standard US$878.90, Premium US$1,428.90; for **RHEL Workstation**: [Self-Support US$196.90](https://www.redhat.com/en/store/red-hat-enterprise-linux-workstation), Standard US$328.90. For larger deployments, custom agreements, or if you want guidance on which subscription fits your environment, you can **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

RHEL is also available as a pay-as-you-go image directly from the major cloud marketplaces, which bills usage through your existing cloud account instead of a separate Red Hat purchase:

- **AWS**: [Red Hat Enterprise Linux (RHEL) for AWS on AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-aezl6to7jjkao) — pay-as-you-go software fee starting around **$0.03/hour** for smaller instance types (e.g., t2.micro, t3.micro, m5.large), scaling up with instance size (e.g., ~$0.362/hour for c3.8xlarge); AWS EC2 compute costs are billed separately.
- **Microsoft Azure**: [Red Hat Enterprise Linux (RHEL) for Microsoft Azure on Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/redhat.rh-rhel?tab=overview)
- **Google Cloud**: [Red Hat Enterprise Linux (RHEL 9) on Google Cloud Marketplace](https://console.cloud.google.com/marketplace/product/rhel-cloud/rhel-9)

A free 60-day trial is available for evaluation before purchasing on any of these.

## Related Products

- [Red Hat Satellite](<red-hat-satellite.md>) — patch, provisioning, and configuration management add-on for managing a RHEL fleet at scale
- [Red Hat Lightspeed for Red Hat Enterprise Linux](<red-hat-lightspeed-for-red-hat-enterprise-linux.md>) — proactive, AI-powered monitoring included with every RHEL subscription (formerly Red Hat Insights)
- [Red Hat Enterprise Linux Long-Life Add-On](<red-hat-enterprise-linux-long-life-add-on.md>) — yearly add-on for indefinite, no-end-date support on a specific RHEL release

## Learn more
Red Hat's [Topics](https://www.redhat.com/en/topics) index groups its educational content by subject. Here are the topics that relate most directly to RHEL, and a selection of articles worth reading.

**Topics related to RHEL:**

- [Linux](https://www.redhat.com/en/topics/linux)
- [Edge computing](https://www.redhat.com/en/topics/edge-computing)
- [Internet of Things](https://www.redhat.com/en/topics/internet-of-things)
- [IT management](https://www.redhat.com/en/topics/management)
- [Security](https://www.redhat.com/en/topics/security)

**Top articles:**

- [What is Linux?](https://www.redhat.com/en/topics/linux/what-is-linux)
- [Understanding Linux](https://www.redhat.com/en/topics/linux)
- [What is SELinux?](https://www.redhat.com/en/topics/linux/what-is-selinux)
- [What's the difference between Fedora and Red Hat Enterprise Linux?](https://www.redhat.com/en/topics/linux/fedora-vs-red-hat-enterprise-linux)
- [Why choose Red Hat for Linux?](https://www.redhat.com/en/topics/linux/why-choose-red-hat-enterprise-linux)
- [What is high availability?](https://www.redhat.com/en/topics/linux/what-is-high-availability)
- [What is the Linux kernel?](https://www.redhat.com/en/topics/linux/what-is-the-linux-kernel)
- [Understanding IT security](https://www.redhat.com/en/topics/security)
- [What is patch management (and automation)?](https://www.redhat.com/en/topics/management/what-patch-management-and-automation)
- [What is a CVE?](https://www.redhat.com/en/topics/security/what-is-cve)

## Sources

- [https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)
- [https://www.redhat.com/en/store](https://www.redhat.com/en/store)
- [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact)
- [https://aws.amazon.com/marketplace/pp/prodview-aezl6to7jjkao](https://aws.amazon.com/marketplace/pp/prodview-aezl6to7jjkao)
- [https://azuremarketplace.microsoft.com/en-us/marketplace/apps/redhat.rh-rhel?tab=overview](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/redhat.rh-rhel?tab=overview)
- [https://console.cloud.google.com/marketplace/product/rhel-cloud/rhel-9](https://console.cloud.google.com/marketplace/product/rhel-cloud/rhel-9)
- [https://www.redhat.com/en/topics](https://www.redhat.com/en/topics)
