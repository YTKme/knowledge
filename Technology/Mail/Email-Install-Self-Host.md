# Email Install (Self Host)

## Table of Content

- [Install](#install)
  - [Domain Name System (DNS)](#domain-name-system-dns)
- [Configure](#configure)
  - [Cloudflare](#cloudflare)
- [Reference](#reference)

## Install

### Domain Name System (DNS)

## Configure

### Cloudflare

- Navigate to [CLOUDFLARE](https://www.cloudflare.com/) and [Log in](https://dash.cloudflare.com/login) to the [Account home](https://dash.cloudflare.com/) (Dashboard) page.
- Select the domain (domain.xyz) from the **Domains** tab for configuration.
- On the left navigation, select **DNS**.

#### DNS Records

- Click **Add record** from the **DNS management** section.
- Add an [A record](https://simple.wikipedia.org/wiki/A_record) for the
  mail server itself.
    - Type: `A`
    - Name: `mail`
    - IPv4 address: `YOUR_SERVER_IP`
    - Proxy status: `DNS only`
    - TTL: `Auto`
- Add a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record) alias
  for the mail server.
    - Type: `CNAME`
    - Name: `smtp` (`autoconfig`)
    - Target: `mail.domain.xyz`
- Add a [MX record](https://en.wikipedia.org/wiki/MX_record) for the
  mail exchanger.
    - Type: `MX`
    - Name: `@`
    - Mail server: `mail.domain.xyz`
    - TTL: `Auto`
    - Priority: `10`
- Add a [SRV record](https://en.wikipedia.org/wiki/SRV_record) for the
  mail server.
    - Type: `SRV`
    - Name: `_autodiscover._tcp`
    - Priority: `0`
    - Weight: `5`
    - TTL: `Auto`
    - Port: `443`
    - Target: `mail.domain.xyz`
- Add a [TXT record](https://en.wikipedia.org/wiki/TXT_record) for the
  mail server. (The `ip6:YOUR_SERVER_IP` is optional)
    - Type: `TXT`
    - Name: `@`
    - TTL: `Auto`
    - Content: `"v=spf1 ip4:YOUR_SERVER_IP ip6:YOUR_SERVER_IP -all"`
- Add a [TXT record](https://en.wikipedia.org/wiki/TXT_record) for the
  mail server. (For security, leave `rua=mailto:YOUR_EMAIL` for now)
    - Type: `TXT`
    - Name: `_dmarc`
    - TTL: `Auto`
    - Content: `"v=DMARC1; p=quarantine; adkim=s; aspf=s; rua=mailto:YOUR_EMAIL"`

## Reference

- [How to Host Your Own Email Server (for free)](https://www.youtube.com/watch?v=8G93NVWkXZk)
- [Mailcow Setup Guide 2026 – Self Host a Secure Mailserver with Docker & Nginx on Linux!](https://www.youtube.com/watch?v=rylCQdx3di8)
