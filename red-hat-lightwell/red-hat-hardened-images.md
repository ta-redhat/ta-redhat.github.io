# Red Hat Hardened Images

## What is it?
**Red Hat Hardened Images is a free, vendor-neutral catalog of trusted, micro-sized container images, built from Red Hat's open source expertise, designed to minimize attack surface and reduce the CVE triage work development and security teams normally have to do.**

Instead of starting a container build from a general-purpose base image and then stripping/hardening it yourself, Hardened Images gives you an already-minimal, already-scanned, already-documented starting point — at no cost, usable on any Linux distribution, Kubernetes platform, or container engine.

## How does it work?
Each image contains only the specific files an application actually needs to run (a "distroless," micro-sized architecture), which shrinks both the attack surface and the image size. Red Hat tracks upstream sources for each component and ships rapid CVE remediation, aiming for a "near-zero" known-vulnerability state at release. Every image comes with validated security profiles already applied and an integrated, automated Software Bill of Materials (SBOM) documenting exactly what's inside and where it came from — viewable in the public catalog at images.redhat.com, which also lets you inspect tags, verify build provenance, and check CVE status per image. The catalog spans common languages, runtimes, and services (Python, Node.js, Go, Java, .NET, PostgreSQL, Nginx, and more).

## Why do I need it?
Teams building images from general-purpose bases spend significant time chasing scanner noise — vulnerabilities in packages the app doesn't even use. Hardened Images starts from a minimal, pre-hardened, pre-documented image instead, with a verifiable SBOM and provenance trail built in.

## Where do I get it?
Red Hat Hardened Images are free to use. Browse and pull images directly from the catalog: [https://images.redhat.com/](https://images.redhat.com/), or learn more at [https://www.redhat.com/en/products/hardened-images](https://www.redhat.com/en/products/hardened-images).

## Sources

- [https://www.redhat.com/en/products/hardened-images](https://www.redhat.com/en/products/hardened-images)
- [https://images.redhat.com/](https://images.redhat.com/)
- [https://www.redhat.com/en/blog/red-hat-hardened-images](https://www.redhat.com/en/blog/red-hat-hardened-images)
