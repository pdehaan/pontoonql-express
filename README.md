# pontoonql-express

Express front end for PontoonQL

## Usage:

Go to **/:product/:pct?**, where `:product` is the project slug from https://pontoon.mozilla.org/projects/, and the optional `:pct` is the minimum translation percentage for the locale (default **80** percent).

## Example:

- [https://pontoonql.now.sh/firefox-monitor-website](/firefox-monitor-website) &mdash; Fetch all locales with at least **80%** translations (default) for the **"firefox-monitor-website"** project.
- [https://pontoonql.now.sh/firefox-accounts/90](/firefox-accounts/90) &mdash; Fetch all locales with at least **90%** translations for the **"firefox-accounts"** project.
