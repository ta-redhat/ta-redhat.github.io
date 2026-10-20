# Red Hat OpenShift Serverless — What / How / Why / Where

## What is it?
**Red Hat OpenShift Serverless lets developers build and run event-driven applications that automatically scale up and down — including all the way down to zero — without managing the underlying Kubernetes infrastructure.**

It brings a serverless development experience to OpenShift, so teams get the "don't think about infrastructure" benefit of serverless computing while staying on the same consistent, supported application platform as the rest of their workloads.

## How does it work?
Built on the open source **Knative** project, OpenShift Serverless provides several components: Knative Serving (deploys and automatically scales containerized applications and functions based on incoming traffic, including scale-to-zero when idle), Knative Eventing (composable building blocks for connecting event sources to event consumers), Serverless Functions (write and deploy individual functions as Knative services), and Serverless Logic (define declarative, visualized workflows in YAML/JSON to orchestrate event-driven applications, with built-in error handling). It's available as part of any OpenShift subscription, including the managed ROSA and Azure Red Hat OpenShift services.

## Why do I need it?
Provisioning and maintaining servers for workloads that only run occasionally wastes infrastructure spend and developer time. OpenShift Serverless scales your application to match actual demand automatically — down to zero when idle — while developers keep writing code the way they already do.

## Where do I get it?
Included with Red Hat OpenShift — install the operator from OperatorHub. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/serverless](https://www.redhat.com/en/technologies/cloud-computing/openshift/serverless)
- [https://docs.redhat.com/en/documentation/red_hat_openshift_serverless/1.37/html/about_openshift_serverless/about-serverless](https://docs.redhat.com/en/documentation/red_hat_openshift_serverless/1.37/html/about_openshift_serverless/about-serverless)
