# Red Hat OpenShift Service Mesh — What / How / Why / Where

## What is it?
**Red Hat OpenShift Service Mesh gives you a uniform way to connect, secure, monitor, and control communication between microservices — without changing a single line of application code.**

As applications break apart into many small, independently deployed microservices, keeping track of how they talk to each other, securing those connections, and diagnosing failures gets hard fast. Service Mesh exists to manage exactly that layer of communication.

## How does it work?
Built on the open source **Istio**, **Envoy**, and **Kiali** projects, OpenShift Service Mesh inserts itself into service-to-service traffic to provide discovery, load balancing, service-to-service authentication, failure recovery, metrics, and more advanced capabilities like A/B testing, canary rollouts, and end-to-end tracing — all configured centrally rather than coded into each service. The Istioctl CLI and Kiali/OpenShift Service Mesh Console dashboards give visibility into and control over the mesh. It's production-ready, pre-validated, and fully supported on OpenShift, and integrates with other OpenShift capabilities like GitOps, Observability, and OpenShift Virtualization — the latest release (3.4) even brings AI-powered diagnostics via Red Hat OpenShift Lightspeed into Kiali as a technology preview.

## Why do I need it?
As soon as an application is broken into more than a few microservices, implementing consistent security, retries, and observability in every single service's code becomes impractical — and inconsistent implementations become a real operational risk. Service Mesh solves that by applying those policies uniformly at the infrastructure layer instead, supporting zero-trust networking at scale and removing the need to duplicate connectivity/security logic across every service your teams write, regardless of what language each one is built in.

## Where do I get it?
Included with Red Hat OpenShift — install the operator from OperatorHub. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/what-is-openshift-service-mesh](https://www.redhat.com/en/technologies/cloud-computing/openshift/what-is-openshift-service-mesh)
- [https://www.redhat.com/en/blog/introducing-red-hat-openshift-service-mesh-34](https://www.redhat.com/en/blog/introducing-red-hat-openshift-service-mesh-34)
