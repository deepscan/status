# DeepScan status page
DeepScan status page. https://status.deepscan.io.

# How to use
- `git clone repo`
- `npm install`
- `npm run new-incident`
  - Follow screen messages
- `npm run generate`
  - Static files are generated in dist/
- `npm run deploy`
  - dist/ is deployed to `gh-pages` branch.
  
# Adding an incident
See https://docs.statusfy.co/guide/incidents.html#example-file

Make a file with filename in a format `/content/YYYY-MM-DD_example-service-down.md`.

# Test
`npm run dev` runs a server

# GitHub Actions
The page is automatically generated by GitHub Actions when a change is pushed or every hour. Then it is served using GitHub Pages.

# Reference
See https://docs.statusfy.co/

# Author
WooYoung Cho
