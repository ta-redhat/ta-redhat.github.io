# Red Hat OpenShift Virtualization

## What is it?
**Red Hat OpenShift Virtualization is a built-in OpenShift capability that lets you migrate, run, and manage traditional virtual machines alongside containers and serverless workloads on the same unified platform.**

Unlike OpenShift Virtualization Engine (a separate, VM-only edition), this is the virtualization feature included in every OpenShift edition — meant for teams who want VMs and containers managed together, not VMs instead of containers.

## How does it work?
Built on the open source KVM hypervisor and the KubeVirt project, OpenShift Virtualization runs each VM as a pod on OpenShift, with its own control plane managed like any other containerized workload — access, storage, and start/stop/restart/delete operations are all handled through the standard OpenShift/Kubernetes interface. It's included as an operator with every OpenShift edition, out of the box. The included migration toolkit for virtualization supports both "lift and shift" migrations and gradual migration over time, so you can bring existing VMs onto OpenShift without rewriting them, and then modernize at your own pace — containerizing, adopting microservices, or integrating AI — without disrupting the VM workloads still running as-is.

## Why do I need it?
Most organizations run a mix of legacy VMs and newer containers, and running them on two separate platforms means two sets of tools and extra complexity. OpenShift Virtualization removes that split — VMs and containers are managed consistently from the same console, with the same CI/CD, GitOps, and service mesh tooling available to both.

## Where do I get it?
Included with any Red Hat OpenShift edition at no additional cost — there's nothing separate to buy. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization](https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization)
- [https://developers.redhat.com/products/openshift/virtualization](https://developers.redhat.com/products/openshift/virtualization)
