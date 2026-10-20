# Red Hat OpenShift Service on AWS (ROSA) — What / How / Why / Where

## What is it?
**Red Hat OpenShift Service on AWS (ROSA) is a fully managed OpenShift service, natively integrated into AWS and jointly operated and supported by Red Hat and Amazon.**

It brings the same production-ready application platform many enterprises already run on-premises directly into the AWS console, so teams moving workloads to AWS don't have to change platforms to get there.

## How does it work?
You access and purchase ROSA directly from the AWS Management Console, the same way you'd spin up any other native AWS service (like EC2), and it's billed through AWS on a pay-as-you-go basis (with 1- or 3-year commitment options for deeper discounts). Each cluster comes with a fully managed control plane and application nodes; installation, maintenance, and upgrades are handled by Red Hat SREs with joint Red Hat/AWS support, backed by a 99.95% uptime SLA. Because it's a native AWS service, it integrates seamlessly with other AWS services — compute, database, analytics, ML, networking — through the same management interface, and includes built-in CI/CD, monitoring, and developer tooling out of the box.

## Why do I need it?
If you're standardized on AWS and want OpenShift's consistency without managing the platform yourself, ROSA removes that friction:

- One AWS bill and one AWS console
- Joint Red Hat/AWS support
- No separate OpenShift installation or upgrade work on your end

## Where do I get it?
Purchased directly through the AWS Management Console (not the Red Hat Store). Total cost includes ROSA service fees plus AWS infrastructure fees. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact), or go directly through AWS.

**Published AWS pricing** ([aws.amazon.com/rosa/pricing](https://aws.amazon.com/rosa/pricing/)): ROSA service fees accrue on-demand at **$0.171/hour per 4 worker vCPUs**; ROSA with hosted control planes (HCP) adds a **$0.25/hour** per-cluster fee. Worker-node fees also support annual contracts: **$1,500/year** (on-demand equivalent), **$1,000/year** with a 1-year contract, or **$667/year** with a 3-year contract, all per 4 vCPUs. AWS infrastructure (EC2, EBS, data transfer, etc.) is billed separately.

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/aws](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws)
- [https://www.redhat.com/en/technologies/cloud-computing/openshift/aws/faq](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws/faq)
