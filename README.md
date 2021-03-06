# pontoonql-express

Express front end for [PontoonQL](https://github.com/pdehaan/pontoonql).

## Usage:

Go to **/:product/:pct?**, where `:product` is the project slug from https://pontoon.mozilla.org/projects/, and the optional `:pct` is the minimum translation percentage for the locale (default **80** percent).

## Example:

- [/firefox-monitor-website](https://pontoonql.now.sh/firefox-monitor-website) &mdash; Fetch all locales with at least **80%** translations (default) for the **"firefox-monitor-website"** project.
- [/firefox-accounts/90](https://pontoonql.now.sh/firefox-accounts/90) &mdash; Fetch all locales with at least **90%** translations for the **"firefox-accounts"** project.
