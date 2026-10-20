# Red Hat OpenShift Observability — What / How / Why / Where

## What is it?
**Red Hat OpenShift Observability is a unified set of capabilities — monitoring, logging, distributed tracing, OpenTelemetry, network observability, and power monitoring — for diagnosing the health and performance of applications and infrastructure running on OpenShift.**

Instead of stitching together separate tools for metrics, logs, and traces, Observability connects open source tooling into one coherent solution built into the platform.

## How does it work?
Monitoring is powered by the Cluster Monitoring Operator using Prometheus, Alertmanager, and Thanos Querier to track application and cluster health. Logging collects, visualizes, forwards, and stores log data (via Loki-based storage), supporting custom alerts and recorded metrics. Distributed tracing follows requests across your microservices to analyze latency, find root causes, and understand service dependencies, using the Red Hat build of OpenTelemetry for standardized, vendor-neutral data collection. The Cluster Observability Operator adds UI visualization directly in the OpenShift console, including **Korrel8r**, which correlates signals — so you can jump from an alert straight to the related logs, or from a log entry to related traces — without switching between separate dashboards.

## Why do I need it?
Diagnosing an issue in a modern, distributed application often means hunting across several disconnected tools — one for metrics, another for logs, another for traces — before you can even start root-causing the problem, which slows down incident response. OpenShift Observability solves that by collecting, correlating, and visualizing all of that signal data in one place using open standards (so you're not locked into a single proprietary vendor), cutting the time spent jumping between tools during troubleshooting.

## Where do I get it?
Included with Red Hat OpenShift as a set of operators/components you enable as needed. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/observability](https://www.redhat.com/en/technologies/cloud-computing/openshift/observability)
- [https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/observability/observability_overview/observability-overview](https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/observability/observability_overview/observability-overview)
