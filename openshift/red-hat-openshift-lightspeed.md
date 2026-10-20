# Red Hat OpenShift Lightspeed — What / How / Why / Where

## What is it?
**Red Hat OpenShift Lightspeed is a generative AI virtual assistant built directly into the OpenShift web console, letting users ask natural-language questions about OpenShift and get step-by-step guidance in return.**

It's aimed at users of every skill level — helping new users learn OpenShift faster while also speeding up day-to-day troubleshooting for experienced administrators.

## How does it work?
OpenShift Lightspeed generates answers using the official OpenShift documentation (and, on ROSA clusters, ROSA-specific documentation automatically), with every knowledge answer linking back to the source documentation so you can verify where the information came from. Beyond answering questions, it helps troubleshoot directly: you can attach an alert message, a YAML file, or a pod's status information to the chat and ask what to do about it. It's installed via OperatorHub and requires OpenShift 4.15+ plus a supported LLM provider — IBM watsonx, OpenAI, Microsoft Azure OpenAI Service, or models served by Red Hat Enterprise Linux AI or Red Hat OpenShift AI. Red Hat doesn't provide or endorse a specific model; you bring your own connected provider.

## Why do I need it?
Learning OpenShift's full surface area — and quickly diagnosing why a specific pod or alert is misbehaving — traditionally means digging through documentation or escalating to a more experienced team member, both of which slow things down. OpenShift Lightspeed shortens that loop: instead of searching docs or waiting on someone else, you ask directly inside the console and get a documented, contextual answer (or a diagnosis of the specific object you're looking at) immediately.

## Where do I get it?
Available through OpenShift OperatorHub; requires OpenShift 4.15+ and your own LLM provider subscription. If you don't yet have OpenShift, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/cloud-computing/openshift/lightspeed](https://www.redhat.com/en/technologies/cloud-computing/openshift/lightspeed)
- [https://developers.redhat.com/products/openshift/lightspeed](https://developers.redhat.com/products/openshift/lightspeed)
