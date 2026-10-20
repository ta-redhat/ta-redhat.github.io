# Event-Driven Ansible — What / How / Why / Where

## What is it?
**Event-Driven Ansible is a capability included with Ansible Automation Platform that automatically turns events from monitoring and observability tools into automated remediation actions, without waiting for a human to notice and respond.**

Rather than automation that only runs on a schedule or when someone triggers it manually, Event-Driven Ansible listens continuously for conditions in your IT environment and reacts to them in real time, closing the loop between "something happened" and "something was fixed."

## How does it work?
You define **Ansible Rulebooks** — conditional "if-this-then-that" instructions that specify an event source (e.g., a monitoring tool, Red Hat Lightspeed, Splunk, or another observability platform) and the action to take when a matching event occurs. When Event-Driven Ansible detects that event, it matches it against your rulebooks and automatically executes the corresponding action — which can include running your existing, trusted Ansible Playbooks, templates, or modules. It ships as part of your Ansible Automation Platform subscription (version 2.4+), so there's nothing extra to buy to start using it.

## Why do I need it?
Most IT operations still rely on a person noticing an alert and manually fixing it — adding delay and inconsistency, especially at scale or at 2 a.m. Event-Driven Ansible removes that bottleneck for well-understood problems: a known alert pattern triggers an immediate, consistent remediation every time, freeing your team for issues that need real judgment.

## Where do I get it?
Event-Driven Ansible is included with your Ansible Automation Platform subscription at no additional cost — there's nothing separate to purchase. If you don't yet have Ansible Automation Platform, **contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Sources

- [https://www.redhat.com/en/technologies/management/ansible/event-driven-ansible](https://www.redhat.com/en/technologies/management/ansible/event-driven-ansible)
- [https://www.redhat.com/en/technologies/management/ansible/features](https://www.redhat.com/en/technologies/management/ansible/features)
