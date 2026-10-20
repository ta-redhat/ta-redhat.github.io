# Red Hat AI — What / How / Why / Where

## What is it?
**Red Hat AI is a portfolio of products that helps organizations build, deploy, and manage AI models and AI agents — predictive, generative, and agentic — consistently across any hardware, cloud, or datacenter.**

Rather than being a single product, Red Hat AI is an umbrella covering four main offerings that handle different parts of the AI lifecycle: **Red Hat AI Enterprise** (an integrated platform for building and running AI models, agentic workflows, and AI-powered applications), **Red Hat AI Inference** (a stack focused specifically on serving models fast and cost-effectively), **Red Hat OpenShift AI** (an MLOps/GenAIOps/AgentOps platform for training, tuning, deploying, and monitoring models at scale), and **Red Hat Enterprise Linux AI** (a platform for running large language models, including IBM's Granite family, on individual servers). All of it is built on open source technologies — including vLLM, llm-d, PyTorch, MLflow, and Kubeflow — so customers aren't locked into one model provider or one hardware vendor.

## How does it work?
Red Hat AI gives you the pieces to run AI workloads at whichever "layer" you need. Red Hat OpenShift AI provides the platform for data scientists and ML engineers to experiment, train, tune, and deploy models using familiar open source tools, with governance features like tool-access control for AI agents and a model hub for managing trusted assets centrally. Underneath that (or standalone), Red Hat AI Inference handles the actual job of running a trained model efficiently — using open source engines like vLLM and llm-d to serve responses quickly and make better use of expensive GPU/accelerator hardware, including compressing models to cut compute costs without losing accuracy. Red Hat AI Enterprise bundles the platform and inference layers together into one integrated product for organizations that want an end-to-end solution, while Red Hat Enterprise Linux AI offers a simpler path for running an LLM on a single server. Because all of these run on open, Kubernetes- or Linux-based infrastructure, the same AI workload can move between on-prem, private cloud, and public cloud without being rebuilt for each environment.

## Why do I need it?
Deploying AI in production raises problems that a single model or a single cloud provider's tools don't fully solve: GPU/accelerator costs can spiral if inference isn't optimized, AI agents given access to internal tools and data need governance so they don't become a security or compliance liability, and committing to one vendor's model-serving stack can lock you into their hardware and pricing. Red Hat AI is built to address these by giving you a consistent, open source-based platform that runs "any model and any agent, on any hardware accelerator, across the hybrid cloud" — so you can choose models and infrastructure based on cost, performance, or compliance needs rather than being boxed in. It's most relevant if you're moving AI from experimentation into production and need cost-efficient inference at scale, if you're building agentic AI applications and need governance/traceability over what those agents can access, or if you have data sovereignty requirements that require running models on-premise or disconnected rather than through a public AI API.

## Where do I get it?
Red Hat AI's products are not sold through the self-serve Red Hat Store — they're enterprise subscriptions with usage-based licensing (e.g., per-node for AI Enterprise, per-accelerator for AI Inference and Enterprise Linux AI). To get pricing or determine which product(s) fit your environment, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact). You can also review the individual product pages (AI Enterprise, AI Inference, OpenShift AI) and the Red Hat AI Subscription Guide to understand licensing before reaching out.

## Related Products

- [Red Hat AI Enterprise](<red-hat-ai-enterprise.md>) — the all-in-one, per-node AI platform bundling OpenShift AI, OpenShift Container Platform, and unlimited accelerator entitlements
- [Red Hat AI Inference](<red-hat-ai-inference.md>) — the dedicated, per-accelerator inference stack (vLLM + llm-d) for fast, cost-efficient model serving
- [Red Hat OpenShift AI](<red-hat-openshift-ai.md>) — the MLOps/GenAIOps/AgentOps platform for training, tuning, deploying, and governing models and agents at scale
- [Red Hat Enterprise Linux AI](<red-hat-enterprise-linux-ai.md>) — the single-server foundation model platform, including IBM's Granite LLMs

## Learn more
Red Hat's [Topics](https://www.redhat.com/en/topics) index groups its educational content by subject. Red Hat AI maps to two topics: the broad AI topic, and InstructLab, the open source project for building custom LLM capabilities that's now part of the Red Hat AI portfolio.

**Topics related to Red Hat AI:**

- [AI](https://www.redhat.com/en/topics/ai)
- [InstructLab](https://www.redhat.com/en/topics/ai/what-is-instructlab)

**Top articles:**

- [What is vLLM?](https://www.redhat.com/en/topics/ai/what-is-vllm)
- [What is agentic AI?](https://www.redhat.com/en/topics/ai/what-is-agentic-ai)
- [What is machine learning?](https://www.redhat.com/en/topics/ai/what-is-machine-learning)
- [What are large language models?](https://www.redhat.com/en/topics/ai/what-are-large-language-models)
- [What is AI inference?](https://www.redhat.com/en/topics/ai/what-is-ai-inference)
- [What is an AI platform?](https://www.redhat.com/en/topics/ai/what-is-an-ai-platform)
- [What is generative AI?](https://www.redhat.com/en/topics/ai/what-is-generative-ai)
- [What is retrieval-augmented generation?](https://www.redhat.com/en/topics/ai/what-is-retrieval-augmented-generation)
- [What is InstructLab?](https://www.redhat.com/en/topics/ai/what-is-instructlab)
- [What are Granite models?](https://www.redhat.com/en/topics/ai/what-are-granite-models)

## Sources

- [https://www.redhat.com/en/products/ai](https://www.redhat.com/en/products/ai)
- [https://developers.redhat.com/products/red-hat-ai](https://developers.redhat.com/products/red-hat-ai)
- [https://www.redhat.com/en/resources/ai-subscription-guide-detail](https://www.redhat.com/en/resources/ai-subscription-guide-detail)
- [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact)
- [https://www.redhat.com/en/topics](https://www.redhat.com/en/topics)
