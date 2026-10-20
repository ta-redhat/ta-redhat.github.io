# Red Hat Lightspeed for Automation — What / How / Why / Where

## What is it?
**Red Hat Lightspeed for automation (formerly Red Hat Insights for Ansible) gives administrators full visibility into the health, configuration, security, and performance of their Ansible Automation Platform infrastructure, so problems can be caught before they affect automation performance.**

It monitors the automation platform itself — running on RHEL or OpenShift — rather than the systems Ansible is automating, helping operations teams keep the automation layer itself reliable and secure.

## How does it work?
Lightspeed continuously analyzes your Ansible Automation Platform infrastructure and surfaces actionable, predictive insights: system health and configuration status, known security vulnerabilities, and performance issues. On its own, it's a monitoring and advisory tool — but paired with **Event-Driven Ansible**, Lightspeed's notifications can act as an event source, automatically triggering remediation. For example, it can kick off a playbook to resolve an OpenShift cluster capacity issue, fix a SELinux violation flagged in system logs, or simultaneously open a ServiceNow incident while remediating, closing the loop from detection to resolution automatically.

## Why do I need it?
As your automation estate grows, the automation platform itself becomes critical infrastructure — if it's unhealthy, misconfigured, or vulnerable, every automated process that depends on it is at risk. Without a dedicated way to monitor that layer, issues with the automation platform tend to surface only when something downstream breaks. Lightspeed for automation gives you that missing visibility, and — combined with Event-Driven Ansible — a way to resolve many of those issues automatically rather than reactively.

## Where do I get it?
Red Hat Lightspeed for automation requires an Ansible Automation Platform subscription. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/management/ansible/red-hat-lightspeed](https://www.redhat.com/en/technologies/management/ansible/red-hat-lightspeed)
- [https://www.redhat.com/en/technologies/management/ansible/features](https://www.redhat.com/en/technologies/management/ansible/features)
