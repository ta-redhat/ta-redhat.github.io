# Red Hat Advanced Cluster Management for Kubernetes — What / How / Why / Where

## What is it?
**Red Hat Advanced Cluster Management for Kubernetes gives you end-to-end management, visibility, and control over your entire fleet of Kubernetes/OpenShift clusters — across datacenter, cloud, and edge — from a single console.**

Running one cluster is relatively simple; running dozens or hundreds across different environments, each needing consistent policy enforcement and application deployment, is where this product comes in.

## How does it work?
Using a hub-and-spoke architecture, Advanced Cluster Management provides a unified control plane for provisioning clusters and applications, self-service cluster setup, and full cluster lifecycle management (create, upgrade, destroy) across any CNCF-conformant Kubernetes distribution, not just OpenShift. It layers in fleet observability, built-in governance/security policies enforced consistently across clusters, GitOps-based application lifecycle deployment with placement rules for availability, and multisite/multicluster disaster recovery with persistent-volume replication. It also pairs with Ansible Automation Platform (including Event-Driven Ansible) to operationalize OpenShift environments through automation, and has a dedicated "for Virtualization" variant that manages VM fleets (view, snapshot/restore, live-migrate) exclusively.

## Why do I need it?
Once you're operating more than a handful of clusters, managing each one individually — separately provisioning, patching, securing, and deploying applications to each — becomes both slow and inconsistent, with policy drift between clusters a near certainty. Advanced Cluster Management solves that by giving you one place to enforce policy, deploy applications, and recover from disaster across your whole fleet, reducing both operational overhead and the cognitive load of tracking what's running where.

## Where do I get it?
Included with Red Hat OpenShift Platform Plus; also available standalone or on-demand via AWS Marketplace. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

**AWS Marketplace pricing** ([listing](https://aws.amazon.com/marketplace/pp/prodview-s2nb6rqz2i3ru)): standalone 12-month contract lists **$240.63 per vCPU-hour unit**, with a **$0.041/unit** overage rate; Premium Support is included at no extra charge. (If bundled into Platform Plus for ROSA specifically, pricing is lower — see the [Platform Plus entry](<red-hat-openshift-platform-plus.md>).)

## Sources

- [https://www.redhat.com/en/technologies/management/advanced-cluster-management](https://www.redhat.com/en/technologies/management/advanced-cluster-management)
- [https://www.redhat.com/en/resources/advanced-cluster-management-kubernetes-datasheet](https://www.redhat.com/en/resources/advanced-cluster-management-kubernetes-datasheet)
