# Red Hat Lightwell — What / How / Why / Where

## What is it?
**Red Hat Lightwell is a joint Red Hat and IBM subscription service that gives enterprises an alternative path to remediate vulnerable open source dependencies when a normal version upgrade would be too risky or disruptive.**

When a security vulnerability is found in an open source library, the usual advice is "just upgrade" — but in large enterprise environments, upgrading isn't always simple: it can break compatibility, trigger re-certification, require regression testing, or conflict with release windows and production stability needs. Lightwell extends Red Hat's long-standing practice of backporting security patches (something it's done across thousands of RHEL packages for decades) to a much broader range of open source ecosystems, using a combination of specialized AI agents and human security experts to triage and fix vulnerable code, then deliver the fix as a signed, patched artifact rather than requiring a full version upgrade.

## How does it work?
Lightwell is structured as an annual subscription with two tiers. **Lightwell Network** is the self-service entry point: it gives you consolidated access to a growing catalog of signed libraries, remediations, and patched artifacts for known open source vulnerabilities, delivered through Red Hat-secured repositories that plug into your existing build and delivery workflows alongside the public repositories you already use. **Lightwell Clearinghouse** is a higher-touch tier for organizations with more specific needs — it includes everything in Network, plus the ability to submit customer-specific vulnerability or package requests, vulnerability verification and coordinated disclosure support, and access to a dedicated Lightwell Security Technical Account Manager (TAM). In practice, your team identifies a vulnerable dependency, checks whether Lightwell covers it, and pulls the remediated artifact from the Lightwell repository instead of performing a disruptive upgrade.

## Why do I need it?
Running apps built on open source components exposes you to a steady stream of vulnerabilities, and AI-driven discovery has sharply increased how fast new ones surface. Upgrading to a patched version isn't always easy — especially in regulated environments where it means re-testing, re-certifying, or risking an outage. Lightwell gives you a vetted, Red Hat-backed way to resolve a known vulnerability without touching the rest of the dependency or system.

It's most relevant for:

- Large enterprises and regulated industries
- Any organization where upgrades routinely get blocked by compatibility, certification, or change-control requirements

## Where do I get it?
Lightwell is not sold through the self-serve Red Hat Store — Red Hat's own guidance is to start by talking to sales to determine whether it's relevant to your environment and which tier (Network or Clearinghouse) fits. **Contact Red Hat sales**: [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact).

## Related Products

- [Red Hat Sovereign Cloud](<red-hat-sovereign-cloud.md>) — digital sovereignty solutions built on Red Hat's hybrid cloud portfolio, mentioned alongside Lightwell in Red Hat's security ecosystem
- [Red Hat Hardened Images](<red-hat-hardened-images.md>) — free, pre-hardened container image catalog that complements Lightwell's dependency remediation focus
- **Red Hat Enterprise Linux Long-Life Add-On** — yearly add-on for indefinite RHEL support; see the full writeup in [`rhel/red-hat-enterprise-linux-long-life-add-on.md`](<../rhel/red-hat-enterprise-linux-long-life-add-on.md>)
- **Red Hat Advanced Developer Suite** — bundles developer/platform-engineering tools and explicitly pipes Lightwell's patches into automated deployment pipelines; see the full writeup in [`openshift/red-hat-advanced-developer-suite.md`](<../openshift/red-hat-advanced-developer-suite.md>)

## Learn more
Red Hat's [Topics](https://www.redhat.com/en/topics) index doesn't have a topic dedicated to Lightwell itself (it's a newer, narrowly-scoped product). The closest match is **Security** — specifically its software supply chain, vulnerability, and patch-management content, which overlaps directly with what Lightwell does (it's also listed under RHEL, since it's shared ground between the OS and this dependency-remediation service).

**Topics related to Lightwell:**

- [Security](https://www.redhat.com/en/topics/security)

**Top articles:**

- [What is software supply chain security?](https://www.redhat.com/en/topics/security/what-is-software-supply-chain-security)
- [What is a CVE?](https://www.redhat.com/en/topics/security/what-is-cve)
- [What is patch management (and automation)?](https://www.redhat.com/en/topics/management/what-patch-management-and-automation)
- [Security in the software development lifecycle](https://www.redhat.com/en/topics/security/software-development-lifecycle-security)
- [What is DevSecOps?](https://www.redhat.com/en/topics/devops/what-is-devsecops)

## Sources

- [https://www.redhat.com/en/lightwell](https://www.redhat.com/en/lightwell)
- [https://www.redhat.com/en/contact](https://www.redhat.com/en/contact)
- [https://www.redhat.com/en/topics](https://www.redhat.com/en/topics)
