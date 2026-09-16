# Hi, I'm Vishal Panchal 👋

MCA student and MERN stack developer based in Ghaziabad, India. I build real-time,
authenticated, full-stack applications with React, Node, Express and MongoDB —
and I'm currently looking for a web developer internship.

This repo is my personal portfolio site.

🔗 **Live site:** _add your deployed URL here after the first deploy_

---

## About me

I'm pursuing my Master's in Computer Applications (MCA) at RD Engineering College,
AKTU, graduating in 2027, after completing my BCA at HRIT Group of Institutions,
CCSU. Alongside my degree, I've built three full-stack projects end to end —
a real-time collaborative whiteboard, a booking platform with payment handling,
and a machine-learning spam classifier — and I like working through problems in
that order: plan the data model first, build and test the API, then wire up the UI
last so broken states show up early.

I'm most comfortable in the MERN stack day to day, with some Python and
scikit-learn on the side from an earlier certification. Right now I'm looking for
an internship where I can keep shipping real, working software.

- 📫 vishal.panchalz2652@gmail.com
- 📱 +91 93156 37610
- 💻 [github.com/vishalpanchal](https://github.com/vishalpanchal)
- 🔗 [linkedin.com/in/vishalpanchal](https://linkedin.com/in/vishalpanchal)

---

## Featured projects

**CollabBoard** — real-time collaborative whiteboard. Multiple signed-in users
edit the same board at once with live cursors and instant sync; room-based socket
namespaces keep concurrent edits from overwriting each other, boards autosave to
MongoDB behind JWT auth.
`React.js` `Node.js` `Socket.io` `MongoDB` `JWT`

**BookMySlot** — appointment scheduling & payments. Blocks double-booking with
server-side slot locking and live availability checks; Stripe handles test-mode
payment capture, Nodemailer sends reminders, providers get a dashboard.
`React.js` `Node.js` `Express.js` `MongoDB` `Stripe API`

**SpamShield** — ML-powered spam classifier. Text classifier trained on labeled
SMS data (TF-IDF + Naive Bayes / logistic regression), served through a Flask API
with confidence scores, checked live from a small React front end.
`Python` `scikit-learn` `Flask` `React.js`

## Skills

| | |
|---|---|
| **Frontend** | React.js & Hooks, Context API, Bootstrap 5, Responsive design |
| **Backend** | Node.js & Express.js, REST APIs & Middleware, JWT auth, MVC |
| **Data** | MongoDB, Mongoose, Schema design, CRUD workflows |
| **Tools** | Git & GitHub, Postman, Stripe API, Python / scikit-learn basics |

## Education & certifications

- **MCA**, RD Engineering College, AKTU — 2025–2027 (in progress)
- **BCA**, HRIT Group of Institutions, CCSU — 2022–2025
- **MERN Stack Full-Stack Development** certification, RD Engineering College, AKTU — 2026
- **Web Development with Python** certification, Softpro India — 2024

---

## About this repo

The site itself: **React 18 + Vite**, hand-written CSS (no framework), automatic
light/dark theme via `prefers-color-scheme`, fully responsive.

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173
npm run build       # production build -> dist/
```

```
index.html                 Page shell + Google Fonts
src/
  main.jsx                 React entry point
  App.jsx                  Section order
  index.css                All styles, custom properties at the top
  data/content.js           ← All page content lives here — edit this to update anything
  components/               One component per section
```

To add a project, edit the `projects` array in `src/data/content.js`:

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

### Deploy

**Vercel (recommended)** — push to GitHub, sign in to [vercel.com](https://vercel.com)
with GitHub, Add New → Project → import this repo → Deploy. Vite is auto-detected,
no config needed.

**Netlify** — same flow: import the repo, build command `npm run build`,
publish directory `dist`.

**GitHub Pages** — uncomment and set `base: '/portfolio/'` in `vite.config.js`,
`npm install --save-dev gh-pages`, add a `deploy` script running `gh-pages -d dist`,
then enable Pages on the `gh-pages` branch in repo settings.

---

© 2026 Vishal Panchal
