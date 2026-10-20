# Red Hat OpenShift AI — What / How / Why / Where

## What is it?
**Red Hat OpenShift AI is a platform, built on Red Hat OpenShift, for training, tuning, deploying, and monitoring predictive and generative AI models — and increasingly, agentic AI — at scale across hybrid cloud environments.**

It's the MLOps/GenAIOps/AgentOps layer of the Red Hat AI portfolio: the place data scientists and ML engineers actually do the day-to-day work of experimenting with, serving, and operating AI models and applications, using familiar open source tools rather than a proprietary workflow.

## How does it work?
OpenShift AI is built on the upstream **Open Data Hub** project (a meta-project integrating 20+ open source AI/ML tools) and runs on Kubernetes via OpenShift, so AI workloads benefit from the same scaling, scheduling, and operational consistency as any other OpenShift workload. It integrates open source tools like PyTorch, Kubeflow, MLflow, and vLLM directly into the product — including Kubeflow's notebook controller, model serving, and data science pipeline components. Notable capabilities include MLflow-based agentic AI tracing, Model Context Protocol (MCP) server governance for controlling what tools an AI agent can access, Models-as-a-Service for self-governed internal model hosting, an **AI hub** for centrally managing trusted model assets, and **Gen AI studio**, a playground for rapidly prototyping generative AI applications.

## Why do I need it?
Without a dedicated MLOps platform, data science teams stitch together notebooks, training infrastructure, model serving, and monitoring themselves — slowing production and making agentic AI hard to govern. OpenShift AI solves both:

- A consistent, scalable environment to go from experiment to production
- Governance tooling for agentic AI: tool-access control, tracing, centralized model management

## Where do I get it?
Red Hat OpenShift AI is not sold through the self-serve Red Hat Store. Its subscription mirrors standard Red Hat OpenShift units (per vCPU or per bare-metal node) and requires an underlying Red Hat OpenShift entitlement. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

**AWS Marketplace pricing** ([listing](https://aws.amazon.com/marketplace/pp/prodview-fuxkweo2tdmr2)): usage-based at **$0.022 per vCPU-hour** (e.g., 2 hours on an m5.xlarge = 8 vCPU-hours). AWS infrastructure costs are billed separately. Red Hat AI Inference is priced per physical accelerator (GPU/TPU) rather than vCPU; no single public marketplace rate was found for it as a standalone listing — contact sales for a quote.

## Sources

- [https://www.redhat.com/en/products/ai/openshift-ai](https://www.redhat.com/en/products/ai/openshift-ai)
- [https://developers.redhat.com/products/red-hat-ai](https://developers.redhat.com/products/red-hat-ai)
- [https://www.redhat.com/en/resources/ai-subscription-guide-detail](https://www.redhat.com/en/resources/ai-subscription-guide-detail)
