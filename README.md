[![Netlify Status](https://api.netlify.com/api/v1/badges/01c7b4cb-936b-4e54-835c-bfc00401f4e0/deploy-status)](https://app.netlify.com/sites/demo-astro-netlify-cms/deploys)

# Astro Netlify Boilerplate

## [Demo Site](https://demo-astro-netlify-cms.netlify.app/)

## What is it?

A simple template for building a fast, pre-generated HTML website using [Astro](https://astro.build/). With [Netlify CMS](https://www.netlifycms.org/) baked-in, ready to deploy to [Netlify](https://www.netlify.com) in a couple of clicks.

Use it as a starter for your own JAMstack projects, or as an easy way to get started building websites with Astro.

Based on the [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) repo.

## Features

- NEW: Added maintenance-free post author archives
- Build with [astro.build](https://astro.build) (fair warning: it still in beta!)
- Sample pages and a blog with tag support
- Netlify CMS with editor previews (thanks [@biilmann](https://github.com/biilmann)!)
- Includes a working contact form
- CSS 2kb minified, inlined for fastest page render
- Optional pipeline for minified inline JS
- Pre-builds and minifies your HTML too
- Uses Markdown files for content
- 100% Javascript framework free
- Continuous Deployment workflow via Netlify

## Want to try it out now?

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/navillus-bv/demo-astro-netlify-cms&stack=cms)

Clicking the button above will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one)
and everything needed for running the CMS:

- A new repository in your GitHub account with the code
- Full Continuous Deployment to Netlify's global CDN network
- Control users and access with Netlify Identity
- Manage content with Netlify CMS
- Process form data with Netlify Forms

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Once you've added an OAuth provider, navigate to `/admin` on your site, select your provider from the
list, and you should then be logged into your CMS. Cool huh?

Now you're all set, and you can start editing content!

## Gotchas

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

## Local development

### 1. Clone this repository:

```
git clone https://github.com/navillus-bv/demo-astro-netlify-cms.git my-blog-name
```

### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `astro.config.mjs` to see if you want to configure any Astro options differently.

### 3. Install dependencies locally

```
npm i
```

### 4. Edit \_data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Astro (builds the site)

```
npm run build
```

Or build and host locally for local development:

```
npm start
```

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions and suggestions! Feel free to submit a PR.

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).
