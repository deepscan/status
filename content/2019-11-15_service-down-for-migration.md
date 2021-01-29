---
title: Service outage for DB migration
description: Our Database was responding abnormally.
date: 2019-11-15T02:02:51.959Z
modified: 2019-11-15T02:10:51.959Z
severity: "partial-outage"
affectedsystems:
  - site
  - git-service
resolved: true
---

<!-- Your General content -->
During DB migrations, the service will not be responding. Webhook requests including commits and pull requests will not be processed. No data will be corrupted.

The service is working now. The outage took less than 5 minutes. Thanks.
