# Red Hat AI Inference

## What is it?
**Red Hat AI Inference is an integrated inference stack that runs any AI model on any hardware accelerator across the hybrid cloud, optimized specifically for fast, consistent, cost-effective model serving.**

Where other parts of the Red Hat AI portfolio focus on building and managing models, AI Inference focuses on the specific job of running a trained model in production efficiently — the part of the AI lifecycle that determines your response latency and your GPU bill.

## How does it work?
AI Inference is built on two open source engines: **vLLM**, which maximizes inference throughput and minimizes latency by making efficient use of GPU memory, and **llm-d**, a Kubernetes-native framework for distributed LLM inference at scale. It also includes a pre-optimized model repository for rapid model serving and an "LLM compressor" that shrinks models to reduce compute costs without sacrificing accuracy. It's designed to act as the engine behind agentic AI and Models-as-a-Service patterns, and can run on Red Hat Enterprise Linux or Red Hat OpenShift, with early access support for third-party Kubernetes environments too.

## Why do I need it?
Running AI models in production is often more expensive and slower than it needs to be if the serving layer isn't optimized — inefficient GPU usage means higher bills and slower responses. AI Inference gives you the operational control to run models faster and cheaper, on the accelerator and cloud of your choice, instead of overpaying for underutilized GPU capacity.

## Where do I get it?
Red Hat AI Inference is available as a standalone product (licensed per accelerator/GPU) or included within Red Hat AI Enterprise and Red Hat OpenShift AI. It's not sold through the self-serve Red Hat Store. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/products/ai/inference](https://www.redhat.com/en/products/ai/inference)
- [https://developers.redhat.com/products/red-hat-ai](https://developers.redhat.com/products/red-hat-ai)
