# Azure Red Hat OpenShift (ARO)

## What is it?
**Azure Red Hat OpenShift (ARO) is a fully managed OpenShift service, jointly engineered, operated, and supported by Microsoft and Red Hat, available as a native service inside Microsoft Azure.**

It's the Azure equivalent of ROSA on AWS — the same OpenShift experience, run and billed as a first-party Azure offering, including managing VMs and containers side by side via OpenShift Virtualization on Azure.

## How does it work?
Each ARO cluster has a fully managed control plane and application nodes, with installation, maintenance, and critical patch upgrades performed by joint Red Hat/Microsoft site reliability teams under a 99.95% uptime SLA. ARO is billed directly through Microsoft, and customers can apply existing Azure Monetary Commitments toward it. Because ARO is based on OpenShift's upstream code, the experience is identical to on-prem OpenShift — the same logging, service mesh, serverless, DevOps pipelines, and GitOps capabilities — effectively bringing the OpenShift on-prem experience into the Azure cloud. A newer deployment option, ARO with hosted control planes, runs the control plane as a separate managed service from your worker nodes for cleaner maintenance boundaries.

## Why do I need it?
For organizations standardized on Azure, running OpenShift any other way means self-managing it or dealing with a separate vendor relationship. ARO removes both frictions:

- Billed through Microsoft, counting toward existing Azure spending commitments
- Jointly operated by people who know both OpenShift and Azure
- Full OpenShift feature set with Azure-native procurement and support

## Where do I get it?
Start from the Azure Portal and select ARO, or get expert help choosing the right OpenShift offering for Azure. Total cost = ARO service fees + Azure infrastructure fees. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact), or go through Azure directly: [https://azure.microsoft.com/en-us/products/openshift](https://azure.microsoft.com/en-us/products/openshift).

**Published Azure pricing** ([azure.microsoft.com/en-us/pricing/details/openshift](https://azure.microsoft.com/en-us/pricing/details/openshift/)): the OpenShift license component is a flat **$0.171/hour per 4 worker vCPUs (cores)**, the same rate regardless of VM series, size, or generation. Azure infrastructure (control plane if applicable, worker VMs, storage, networking) is billed separately at standard Azure Linux VM rates. Pay-as-you-go and 1- or 3-year reservations are both available on the license component.

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/azure](https://www.redhat.com/en/technologies/cloud-computing/openshift/azure)
- [https://azure.microsoft.com/en-us/products/openshift](https://azure.microsoft.com/en-us/products/openshift)
- [https://www.redhat.com/en/technologies/cloud-computing/openshift/azure/get-started](https://www.redhat.com/en/technologies/cloud-computing/openshift/azure/get-started)
