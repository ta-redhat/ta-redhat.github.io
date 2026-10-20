# Red Hat OpenShift Dev Spaces — What / How / Why / Where

## What is it?
**Red Hat OpenShift Dev Spaces provides instant, browser-based, container-based development environments on OpenShift — so developers get a fully configured, consistent coding environment without setting up anything locally.**

Built on the open source Eclipse Che project, it's designed to eliminate the classic "it works on my machine" problem by making the development environment itself part of what's reproducible and version-controlled.

## How does it work?
Each developer's workspace runs as a container-based pod on OpenShift, defined as code via a "devfile" so it's consistent and reproducible for every team member or contractor who spins one up. Workspaces include Microsoft Visual Studio Code (running in-browser by default) or JetBrains IntelliJ IDEA (via JetBrains Gateway for a native desktop feel) — developers only need a machine capable of running a web browser. Dev Spaces is included with your OpenShift subscription and installed via OperatorHub, with enterprise integration including OIDC authentication and OpenShift RBAC. Newer releases also support centrally-configured AI coding assistants inside the workspace, including for air-gapped deployments connecting to self-hosted models.

## Why do I need it?
Onboarding a new developer or contractor traditionally means hours (or days) spent installing the right tool versions, dependencies, and configuration just to get a working local environment — and even then, subtle environment differences between team members cause bugs that are hard to reproduce. Dev Spaces removes that setup entirely: a new team member gets a fully working, standardized environment in minutes, mirroring production, with platform engineers able to define the standard once and have every developer consume it without manual configuration.

## Where do I get it?
Included with your OpenShift subscription — install via OperatorHub, or try it free in the Developer Sandbox. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://developers.redhat.com/products/openshift-dev-spaces](https://developers.redhat.com/products/openshift-dev-spaces)
- [https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.29/discover-con_what_is_devspaces](https://docs.redhat.com/en/documentation/red_hat_openshift_dev_spaces/3.29/discover-con_what_is_devspaces)
