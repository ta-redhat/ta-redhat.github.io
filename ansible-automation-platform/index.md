# Ansible Automation Platform — What / How / Why / Where

## What is it?
**Red Hat Ansible Automation Platform is an enterprise automation platform that lets IT teams create, manage, and scale automation — from routine configuration tasks to AI-assisted operations and incident response — under one consistent governance model.**

Rather than automating one tool or team at a time, Ansible Automation Platform is meant to be the common execution layer across an organization's entire IT estate: infrastructure provisioning and virtual machine lifecycle management, network configuration across campus/branch/cloud/edge environments, and security operations like automated investigation and compliance enforcement. Red Hat describes it as the "trusted execution layer for mission-critical IT operations in the AI era," meaning it's increasingly built to pair deterministic automation (rules you define and trust) with AI-driven recommendations and AIOps, rather than purely replacing human judgment with AI.

## How does it work?
Automation in the Ansible ecosystem is written as human-readable instructions (playbooks) describing the desired end state of a system — for example, "this server should have this package installed and this service running" — and then executed against your infrastructure to make reality match that description. Ansible Automation Platform adds an enterprise layer on top of this: a central controller for running and auditing automation at scale, an automation orchestrator for designing and managing larger multi-step IT operations workflows, and integration with AIOps so that AI-detected issues (like a false-positive alert or a service that needs restarting) can trigger governed, automated remediation instead of a manual ticket. All of this sits under one management plane and governance model, so automation written for one use case (say, network configuration) follows the same access, auditing, and approval rules as automation for another (say, security response).

## Why do I need it?
Manually configuring servers, networks, and security responses one at a time doesn't scale — it's slow, inconsistent between environments, and prone to human error, and as AI-driven threats and infrastructure complexity grow, manual response times increasingly can't keep up. Ansible Automation Platform solves this by letting you write automation once (as a reusable playbook) and run it consistently and safely across your entire estate, with centralized governance so you can trust what's being automated and audit what happened. In practice, customers have used it to cut incident response time by automatically verifying and resolving false positives instead of pulling in an engineer, to reduce service tickets by pairing observability with self-healing automation, and to apply the same automation approach consistently across branch, campus, and data center networks instead of maintaining separate processes for each. It's most valuable once you have automation needs spanning more than one team or use case and need a consistent, auditable way to manage all of it.

## Where do I get it?
Ansible Automation Platform is not sold through the self-serve Red Hat Store — it's an enterprise subscription product. To purchase or get pricing details for your environment, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact). It's also available through Red Hat's partner ecosystem and select cloud marketplaces.

**AWS Marketplace pricing** has two published paths: a fully managed **[Ansible Automation Platform Service on AWS](https://aws.amazon.com/marketplace/pp/prodview-mpuxxhsen5qre)**, billed monthly by managed-node tier from **$412.50/mo** (50 nodes) up to **$70,125/mo** (10,000 nodes), plus **$8.25/managed node/mo** and **$0.10/cluster-CPU/hour** for overages; and a **[self-managed subscription](https://aws.amazon.com/marketplace/pp/prodview-xy6tb27e6rkjm)** at **$19,250 per 12 months** per 100-node pack.

## Related Products

- [Event-Driven Ansible](<event-driven-ansible.md>) — included capability that turns monitoring/observability events into automated remediation actions
- [Red Hat Lightspeed for Automation](<red-hat-lightspeed-for-automation.md>) — proactive health, security, and performance monitoring for your Ansible Automation Platform infrastructure
- [Red Hat Automation Coding Assistant](<red-hat-automation-coding-assistant.md>) — generative AI service (formerly branded Ansible Lightspeed) that writes Ansible YAML/playbooks from natural-language prompts

## Learn more
Red Hat's [Topics](https://www.redhat.com/en/topics) index groups its educational content by subject. Ansible Automation Platform maps to a single topic covering automation broadly.

**Topics related to Ansible Automation Platform:**

- [Automation](https://www.redhat.com/en/topics/automation)

**Top articles:**

- [What is an Ansible Rulebook?](https://www.redhat.com/en/topics/automation/what-is-an-ansible-rulebook)
- [What is an Ansible module—and how does it work?](https://www.redhat.com/en/topics/automation/what-is-an-ansible-module)
- [What is an Ansible Role—and how is it used?](https://www.redhat.com/en/topics/automation/what-is-an-ansible-role)
- [Understanding Ansible, Terraform, Puppet, Chef, and Salt](https://www.redhat.com/en/topics/automation/understanding-ansible-vs-terraform-puppet-chef-and-salt)
- [Which Ansible cloud deployment option is right for you?](https://www.redhat.com/en/technologies/management/ansible/ansible-deployment-options)
- [What is event-driven automation?](https://www.redhat.com/en/topics/automation/what-is-event-driven-automation)
- [What is Infrastructure as Code (IaC)?](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)
- [What is infrastructure automation?](https://www.redhat.com/en/topics/automation/what-is-infrastructure-automation)
- [What is network automation?](https://www.redhat.com/en/topics/automation/what-is-network-automation)
- [What is configuration management?](https://www.redhat.com/en/topics/automation/what-is-configuration-management)

## Sources

- [https://www.redhat.com/en/technologies/management/ansible](https://www.redhat.com/en/technologies/management/ansible)
- [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact)
- [https://www.redhat.com/en/topics](https://www.redhat.com/en/topics)
