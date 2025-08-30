# Unicellular.org — Open Source Portfolio

This repository is an open-source portfolio for Unicellular.org. It's intentionally playful and creative — contributions of all kinds are welcome. Add code, ideas, design tweaks, or silly experiments. If you contribute, please attach your name so we can celebrate your work.

Have fun! 

## About

This is a personal portfolio built with Next.js and Tailwind CSS. It demonstrates layout, theme toggling, and a small set of components. The project is free to fork, modify, and contribute to.

## Contributing

Everyone is welcome to contribute — big or small. A typical contribution workflow:

1. Fork the repository.
2. Create a feature branch: `feature/my-awesome-change`.
3. Make your changes and commit.
4. Add your name and a short note about your contribution to `CONTRIBUTORS.md`.
5. Open a Pull Request and describe what you changed.

Example entry for `CONTRIBUTORS.md`:

```
Jane Doe — improved Hero layout and added responsive SVG
```

Tips
- Keep changes focused and small.
- If you add new dependencies, explain why in the PR description.
- If you add scripts or build steps, update this README.

## Run locally (Windows cmd.exe)

Make sure you have Node.js and pnpm installed, then:

```cmd
pnpm install
pnpm run dev
```

Open http://localhost:3000 in your browser.

## Styling and Theme

- The project uses Tailwind CSS. If you tweak styles, make sure your classes are included under `tailwind.config.cjs` content globs so they aren't purged in production.
- Theme toggling is implemented with `next-themes` and uses the `class` attribute on `<html>` (`.light` / `.dark`).

## License

This project is available under the MIT License. See the `LICENSE` file if present, or add one if you want to be explicit.

## Get fun and be creative

This repo is a sandbox — add something wild, document it, and attach your name in `CONTRIBUTORS.md`. Have fun!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
