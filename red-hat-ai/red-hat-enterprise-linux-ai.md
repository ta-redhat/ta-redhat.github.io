# Red Hat Enterprise Linux AI — What / How / Why / Where

## What is it?
**Red Hat Enterprise Linux AI is a foundation model platform for running, testing, and optimizing large language models — including IBM's open source Granite family — on individual server environments.**

It's the simplest entry point into the Red Hat AI portfolio: rather than standing up a full Kubernetes-based AI platform, RHEL AI lets you run an LLM directly on a single server, combining the efficiency of Red Hat AI Inference with an image-mode instance of Red Hat Enterprise Linux.

## How does it work?
RHEL AI packages a LLM runtime together with an immutable, image-mode build of RHEL, so a server is provisioned with everything needed to serve a model already in place and consistently reproducible. It ships with IBM's **Granite** family of LLMs — open source, enterprise-ready, multimodal models benchmarked on safety and tasks like cybersecurity and retrieval-augmented generation (RAG) — and inherits the efficiency components of Red Hat AI Inference (vLLM-based serving) to make good use of available GPU capacity. It's licensed per accelerator, same as AI Inference.

## Why do I need it?
Not every AI use case justifies a full Kubernetes/OpenShift AI platform — sometimes you just need a capable LLM running reliably on a server or two. RHEL AI gives you a straightforward, cost-efficient way to run a trusted, open source LLM in your own environment — ideal for smaller deployments, edge use cases, or getting started with on-prem generative AI.

## Where do I get it?
Red Hat Enterprise Linux AI is not sold through the self-serve Red Hat Store; it's licensed per accelerator as an enterprise subscription. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

**AWS Marketplace pricing** ([listing](https://aws.amazon.com/marketplace/pp/prodview-ymlols4ldtldu)): usage-based at **$0.40/hour**, consistent across the supported GPU instance types (p5.48xlarge, p4d.24xlarge, g6e.48xlarge). AWS infrastructure costs are billed separately.

## Sources

- [https://developers.redhat.com/products/red-hat-ai](https://developers.redhat.com/products/red-hat-ai)
- [https://www.redhat.com/en/resources/ai-subscription-guide-detail](https://www.redhat.com/en/resources/ai-subscription-guide-detail)
