# Event-Driven Ansible — What / How / Why / Where

## What is it?
**Event-Driven Ansible is a capability included with Ansible Automation Platform that automatically turns events from monitoring and observability tools into automated remediation actions, without waiting for a human to notice and respond.**

Rather than automation that only runs on a schedule or when someone triggers it manually, Event-Driven Ansible listens continuously for conditions in your IT environment and reacts to them in real time, closing the loop between "something happened" and "something was fixed."

## How does it work?
You define **Ansible Rulebooks** — conditional "if-this-then-that" instructions that specify an event source (e.g., a monitoring tool, Red Hat Lightspeed, Splunk, or another observability platform) and the action to take when a matching event occurs. When Event-Driven Ansible detects that event, it matches it against your rulebooks and automatically executes the corresponding action — which can include running your existing, trusted Ansible Playbooks, templates, or modules. It ships as part of your Ansible Automation Platform subscription (version 2.4+), so there's nothing extra to buy to start using it.

## Why do I need it?
Even with good automation in place, most IT operations still rely on a person noticing an alert and manually kicking off the fix — which adds delay and inconsistency, especially at 2 a.m. or at scale across thousands of systems. Event-Driven Ansible removes that human bottleneck for well-understood, repeatable problems: a known alert pattern can trigger an immediate, consistent remediation every time, freeing your team to focus on the issues that actually need human judgment.

## Where do I get it?
Event-Driven Ansible is included with your Ansible Automation Platform subscription at no additional cost — there's nothing separate to purchase. If you don't yet have Ansible Automation Platform, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/management/ansible/event-driven-ansible](https://www.redhat.com/en/technologies/management/ansible/event-driven-ansible)
- [https://www.redhat.com/en/technologies/management/ansible/features](https://www.redhat.com/en/technologies/management/ansible/features)
