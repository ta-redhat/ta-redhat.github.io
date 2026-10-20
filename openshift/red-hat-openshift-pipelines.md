# Red Hat OpenShift Pipelines — What / How / Why / Where

## What is it?
**Red Hat OpenShift Pipelines is a cloud-native CI/CD solution, built on the open source Tekton project, that automates building, testing, and deploying applications directly on OpenShift.**

It's the OpenShift-native way to define a continuous integration/continuous delivery pipeline as Kubernetes resources, rather than relying on an entirely separate CI/CD system bolted onto the side of your cluster.

## How does it work?
OpenShift Pipelines uses Tekton's standard custom resource definitions (CRDs) to define pipelines as declarative, containerized tasks that scale on demand — each pipeline specifies a set of tasks, their order of execution, and the shared storage (workspaces) they need. As an OpenShift operator, it adds hardened security and a curated, supported set of tasks and tooling on top of the open source Tekton building blocks, plus integrations with other Tekton projects like Tekton Triggers, Chains, and Results. Pipelines runs as fully isolated, serverless containers, so it scales on demand without you managing dedicated CI/CD infrastructure, and definitions live versioned alongside your application source code.

## Why do I need it?
Bolting a separate CI/CD tool onto your OpenShift environment means managing another system, another set of credentials, and another integration surface to keep secure — and it rarely has the same native visibility into your Kubernetes resources as a pipeline built for Kubernetes from the ground up. OpenShift Pipelines solves that by giving you CI/CD that's portable across Kubernetes distributions, versioned with your code, and able to apply DevSecOps practices (catching vulnerabilities early) using the same platform you already run your applications on — including support for AI/ML model training and delivery pipelines.

## Where do I get it?
Available with any Red Hat OpenShift subscription — install the operator from OperatorHub. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/pipelines](https://www.redhat.com/en/technologies/cloud-computing/openshift/pipelines)
- [https://docs.redhat.com/en/documentation/red_hat_openshift_pipelines/1.24/](https://docs.redhat.com/en/documentation/red_hat_openshift_pipelines/1.24/)
