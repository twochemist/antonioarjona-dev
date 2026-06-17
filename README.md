# antonioarjona.dev

This is my [personal website](https://antonioarjona.dev) where I share my [projects](https://antonioarjona.dev/projects) and publish some [posts](https://antonioarjona.dev/posts) 


## Stack

This website is built with [Next.js](https://nextjs.org), TypeScript, Tailwind CSS, and local Markdown/YAML/JSON content. It is exported as a static site and hosted on [Netlify](https://www.netlify.com/).

Content lives in:

- `content/projects` for portfolio projects
- `content/posts` for articles
- `content/lists` for uses/lists pages
- `content/cv` for CV data

## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build static production output
$ npm run build

# Netlify publishes the generated out/ directory
```

## Deployment

Netlify should use:

- Build command: `npm run build`
- Publish directory: `out`

These settings are also defined in `netlify.toml`.

## License

Copyright 2021 Antonio Arjona and other contributors

Code licensed under the MIT License: http://opensource.org/licenses/MIT

Articles licensed under GNU Affero General Public License: https://www.gnu.org/licenses/gpl-3.0.en.html
