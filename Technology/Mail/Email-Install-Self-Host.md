# Email Install (Self Host)

## Table of Content

- [Install](#install)
  - [Domain Name System (DNS)](#domain-name-system-dns)
- [Configure](#configure)
  - [Cloudflare](#cloudflare)
- [Reference](#reference)
  - [General](#general)
  - [Authentication](#authentication)
    - [Sender Policy Framework (SPF)](#sender-policy-framework-spf)
    - [DomainKeys Identified Mail (DKIM)](#domainkeys-identified-mail-dkim)
    - [DMARC](#dmarc)

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
    - Name: `smtp` (`autodiscover`)
    - Target: `mail.example.com`

## Reference

### General

- [How to Host Your Own Email Server (for free)](https://www.youtube.com/watch?v=8G93NVWkXZk)
- [Mailcow Setup Guide 2025 – Self Host a Secure Mailserver with Docker & Nginx on Linux!](https://www.youtube.com/watch?v=rylCQdx3di8)
- [NEW EMAIL REQUIREMENTS - Watch if you have your own domain (SPF, DKIM, and DMARC)](https://www.youtube.com/watch?v=s3Qg0Yo7KlY)

### Authentication

#### Sender Policy Framework (SPF)

- [Sender Policy Framework](https://en.wikipedia.org/wiki/Sender_Policy_Framework)
- [About SPF records](https://support.google.com/a/answer/10683907)
- [Set up SPF to identify valid email sources for your custom cloud domains](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure)

#### DomainKeys Identified Mail (DKIM)
