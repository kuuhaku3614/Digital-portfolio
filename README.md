# Gerby P. Hallasgo — React + Vite + Tailwind Portfolio

A modern, dark-mode-first developer portfolio built for Junior Software Developer, Full Stack Developer, and Laravel Developer applications.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Static-site friendly
- GitHub Pages deployable

## Folder Structure

```text
gerby-portfolio-react-tailwind/
├─ public/
│  ├─ favicon.svg
│  ├─ project-placeholder.svg
│  └─ Gerby-Hallasgo-Resume.pdf       # Add your resume here
├─ docs/
│  └─ PORTFOLIO_BLUEPRINT.md
├─ src/
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ BackgroundGlow.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ ProjectModal.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Reveal.jsx
│  │  ├─ SectionHeading.jsx
│  │  ├─ Skills.jsx
│  │  └─ Timeline.jsx
│  ├─ data/
│  │  ├─ projects.js
│  │  ├─ skills.js
│  │  └─ timeline.js
│  ├─ styles/
│  │  └─ index.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## Setup Commands

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173/
```

## Build Command

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to Edit Projects

Edit this file:

```text
src/data/projects.js
```

Each project has this structure:

```js
{
  id: 'project-id',
  title: 'Project Title',
  category: 'Project Category',
  year: '2026',
  status: 'Featured',
  role: 'Your role',
  stack: ['React', 'Laravel', 'MySQL'],
  image: `${import.meta.env.BASE_URL}project-placeholder.svg`,
  summary: 'Short summary...',
  problem: 'Problem solved...',
  solution: 'Solution built...',
  highlights: ['Feature 1', 'Feature 2'],
  impact: 'What this proves...',
  github: 'https://github.com/your-username/your-repo',
  demo: 'https://your-demo-link.com',
}
```

If you do not have a live demo yet, leave `demo` as an empty string. The Live Demo button will appear disabled.

## Add Your Resume

Put your resume PDF here:

```text
public/Gerby-Hallasgo-Resume.pdf
```

The hero button already points to this file.

## Add Real Screenshots

Put screenshots in `public/projects/`, for example:

```text
public/projects/aquabill-dashboard.png
```

Then update the project image path:

```js
image: `${import.meta.env.BASE_URL}projects/aquabill-dashboard.png`,
```

## GitHub Pages Deployment

### Option A: User site repository

If your repository is named:

```text
kuuhaku3614.github.io
```

The included Vite config will use `/` as the base path.

### Option B: Project repository

If your repository is named something like:

```text
gerby-portfolio
```

The included Vite config can automatically use `/gerby-portfolio/` during GitHub Actions builds when `GITHUB_REPOSITORY` exists.

### Simple Manual Deploy Flow

```bash
git init
git add .
git commit -m "Initial portfolio redesign"
git branch -M main
git remote add origin https://github.com/kuuhaku3614/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Then in GitHub:

1. Open your repository.
2. Go to **Settings**.
3. Go to **Pages**.
4. Choose your deployment source.
5. Use GitHub Actions or deploy the build output depending on your setup.

## Notes

- This portfolio uses no backend.
- Contact actions use email and profile links.
- Animations respect reduced-motion user preferences.
- The design is dark-mode-first, responsive, and recruiter-focused.
