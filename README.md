# Vishal Panchal – Portfolio

React + Vite frontend. MERN stack developer portfolio site.

## Project Structure

```
portfolio/
├── index.html            # Page shell + Google Fonts
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Section order
    ├── index.css          # All styles
    ├── data/content.js     # All page content — edit this to update anything
    └── components/         # One component per section
```

## Setup & Run

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Add a project

Edit the `projects` array in `src/data/content.js`:

```js
{
  index: '04',
  title: 'Project name — short description',
  description: 'What it does and the interesting technical problem it solves.',
  tags: ['React.js', 'Node.js', 'MongoDB'],
  metric: 'The one-line outcome worth bragging about',
  href: 'https://github.com/you/project',
}
```

## Deploy

- **Vercel** (recommended): push to GitHub → import repo on [vercel.com](https://vercel.com) → Deploy (Vite auto-detected)
- **Netlify**: import repo, build command `npm run build`, publish directory `dist`
- **GitHub Pages**: set `base: '/portfolio/'` in `vite.config.js`, then `npm install --save-dev gh-pages` and deploy via `gh-pages -d dist`

---

📫 vishal.panchalz2652@gmail.com · [GitHub](https://github.com/gitvishal650) · [LinkedIn](https://linkedin.com/in/vishal-panchal-b8967530a/)

© 2026 Vishal Panchal
