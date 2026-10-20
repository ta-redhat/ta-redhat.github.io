# Red Hat OpenShift GitOps — What / How / Why / Where

## What is it?
**Red Hat OpenShift GitOps is an OpenShift operator, built on the open source Argo CD project, that uses your Git repository as the single source of truth for how applications and clusters should be configured — and automatically keeps reality in sync with it.**

It's the tool that makes "GitOps" workflows possible on OpenShift: instead of manually applying changes to a cluster, you commit the desired configuration to Git, and the operator handles making the cluster match.

## How does it work?
OpenShift GitOps continuously compares the configuration declared in your Git repository against the live state of your cluster(s), and automatically reconciles any differences — deploying updates, catching drift, and (depending on configuration) rolling back changes that fall out of the desired state. It integrates Argo Rollouts to support advanced deployment strategies with automated testing to decide whether a promotion or rollback should happen. For large, multicluster fleets, **Argo CD Agent** (included with OpenShift Platform Plus) extends this to centralized, unified management at scale. Because it's a Red Hat-supported operator, it adds hardened security and enterprise support on top of what the upstream Argo CD project provides.

## Why do I need it?
Manually applying configuration changes across many clusters is slow and error-prone, and it's easy to lose track of exactly what's deployed where or how it drifted from what was intended. GitOps solves that by making Git the authoritative record — every change is version-controlled, auditable, and reviewable before it ever reaches a cluster, and the operator keeps clusters consistent with that record automatically. This matters most once you're managing more than one cluster or need a clear audit trail of every infrastructure/application change.

## Where do I get it?
Included as a feature of Red Hat OpenShift — install the operator from OperatorHub. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/gitops](https://www.redhat.com/en/technologies/cloud-computing/openshift/gitops)
- [https://docs.redhat.com/en/documentation/openshift_container_platform/4.22/html-single/gitops/index](https://docs.redhat.com/en/documentation/openshift_container_platform/4.22/html-single/gitops/index)
