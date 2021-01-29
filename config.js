module.exports = {
  "title": "DeepScan Status",
  "name": "deepscan_status",
  "description": "This page continuously shows status reports of deepscan.io.",
  "baseUrl": "https://status.deepscan.io",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": ["site", "git-service"]
  }
}
