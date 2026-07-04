# Gerby P. Hallasgo Portfolio Redesign Blueprint

## 1. Sitemap

Primary single-page portfolio sitemap:

1. Home / Hero
   - Short value proposition
   - Target roles
   - Resume, project, and contact calls-to-action
2. About
   - Short personal background
   - Strengths and work style
   - Remote-friendly preference
3. Skills
   - Frontend
   - Backend
   - Database
   - Tools and platforms
   - Desktop and mobile exploration
4. Featured Projects
   - AquaBill
   - Gym Membership Management System
   - Social Welfare Program Management System
   - Blockchain Credential Verification System
5. Journey / Timeline
   - Education
   - Major projects
   - Development growth
6. Contact
   - Email
   - GitHub
   - LinkedIn
7. Footer
   - Copyright
   - Back-to-top link

Optional future pages if you move beyond a single-page site:

- `/projects/aquabill`
- `/projects/gym-management`
- `/projects/social-welfare`
- `/projects/credential-verification`
- `/resume`

For GitHub Pages and easy maintenance, the recommended starting version is a single-page static site.

---

## 2. Section-by-section Wireframe

### Navbar

Desktop:

```text
[GH Logo + Gerby Hallasgo]                         Home About Skills Projects Journey Contact [Hire Me]
```

Mobile:

```text
[GH Logo + Gerby Hallasgo]                                                     [Menu]
-------------------------------------------------------------------------------
Home
About
Skills
Projects
Journey
Contact
```

Purpose:

- Keep navigation short.
- Prioritize recruiter scanning.
- Avoid too many links such as Gallery unless the images directly support hiring.

### Hero

```text
[Badge: Fresh CS Graduate • Open to remote-friendly roles]

I build practical full-stack systems with clean, recruiter-friendly interfaces.

Hi, I’m Gerby P. Hallasgo — an aspiring developer focused on Laravel, React,
database-driven systems, and real-world software workflows.

[Junior Software Developer] [Full Stack Developer] [Laravel Developer]

[View Featured Projects] [Contact Me] [Download Resume]

Right side card:
- Name
- Current focus
- Strengths
- Portfolio promise
```

Goal:

- Make your positioning clear within 5 seconds.
- Avoid saying “Senior Full-Stack Developer” because you are applying for junior roles.
- Use honest, confident language.

### About

```text
[About]
A practical developer who values clarity, teamwork, and steady growth.

Left: profile/initials card
Right: 2–3 short paragraphs + quick facts grid
```

Quick facts:

- Education: BS Computer Science
- Location: Philippines
- Work setup: Remote-friendly / WFH
- Best fit: Junior software, full-stack, Laravel roles

### Skills

```text
[Skills]
Skill set organized the way recruiters scan portfolios.

[Frontend Card] [Backend Card] [Database Card]
[Tools Card]    [Desktop/Mobile Card]
```

Recommendation:

- Avoid progress bars unless they are carefully explained.
- Recruiters may question “70% PHP” or “Advanced 3+ years” for a fresh graduate.
- Grouping skills is cleaner and more honest.

### Projects

```text
[Projects]
Featured work presented as clear case studies.

[Project Card] [Project Card]
[Project Card] [Project Card]
```

Each project card should show:

- Project name
- Category
- Year/status
- 1–2 sentence summary
- Tech stack tags
- GitHub button
- Live Demo button
- View Details button

### Project Details Modal

```text
Project Title
Category • Year
Role

[Problem] [Solution] [Impact]

Key features:
- Feature 1
- Feature 2
- Feature 3
- Feature 4

Tech stack tags
```

This gives recruiters more detail without forcing them to leave the page.

### Timeline

```text
[Journey]
A simple timeline that connects education, projects, and growth.

2026 — Fresh CS Graduate
2026 — AquaBill Desktop App
2025 — Gym Membership Management System
2024 — Social Welfare Program System
```

Goal:

- Replace “Professional Journey” with a more accurate fresh-graduate journey.
- Use project experience as evidence.

### Contact

```text
[Contact]
Let’s build something useful.

[Email] [GitHub] [LinkedIn]
```

Recommendation:

- Do not use a fake contact form unless you connect it to a service.
- Static portfolios should use `mailto:` or a service like Formspree later.

---

## 3. Style Guide

### Design Personality

- Dark mode first
- Professional developer aesthetic
- Aqua/blue accents
- Glassmorphism cards
- Soft glow effects
- Rounded corners
- Smooth but subtle animations
- Recruiter-friendly readability

### Colors

| Token | Purpose | Value |
|---|---|---|
| Background | Main page background | `#020617` |
| Surface | Cards/sections | `rgba(15, 23, 42, 0.72)` |
| Strong Surface | Navbar/modal | `rgba(15, 23, 42, 0.92)` |
| Border | Glass border | `rgba(148, 163, 184, 0.16)` |
| Text | Main text | `#F8FAFC` |
| Muted Text | Paragraphs | `#94A3B8` |
| Accent | Main aqua | `#22D3EE` |
| Accent 2 | Blue gradient | `#3B82F6` |
| Accent 3 | Teal glow | `#2DD4BF` |

### Gradients

Primary gradient:

```css
linear-gradient(135deg, #22d3ee 0%, #3b82f6 55%, #2dd4bf 100%)
```

Background glow:

```css
radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 60%)
```

### Typography

Recommended font stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Type scale:

- Hero: 48–72px desktop, 36–44px mobile
- Section title: 32–48px
- Card title: 20–24px
- Body: 16–18px
- Metadata/tags: 12–14px

### Spacing

- Section vertical spacing: 80–112px
- Container max-width: 1280px
- Mobile horizontal padding: 20px
- Desktop horizontal padding: 32px
- Card padding: 24–32px
- Card gap: 20–24px

### Cards

- Radius: 28px
- Border: `1px solid rgba(255,255,255,0.10)`
- Background: `rgba(15, 23, 42, 0.70)`
- Blur: `backdrop-filter: blur(20px)`
- Shadow: soft cyan/navy shadow

### Buttons

Primary:

- Aqua fill
- Dark text
- Rounded full
- Slight hover lift

Secondary:

- Transparent aqua tint
- Aqua border
- Light text

Ghost:

- White low-opacity border
- Transparent background

### Inputs

Not used in the static version. If you add a real form later:

- Dark surface
- 16px text
- Clear focus ring
- Accessible labels
- Do not rely only on placeholder text

### Shadows

Use shadows lightly:

```css
box-shadow: 0 24px 80px rgba(8, 145, 178, 0.14);
```

### Animations

- Section reveal: opacity + translateY
- Hover: card lift by 4px
- Image hover: scale to 105%
- Respect `prefers-reduced-motion`

---

## 4. Recommended Homepage Layout

Recommended order:

1. Hero
2. About
3. Skills
4. Featured Projects
5. Journey
6. Contact
7. Footer

Why this order works:

- Recruiters first see who you are and what roles you want.
- Then they see your background and skills.
- Projects appear before timeline because projects are your strongest proof as a fresh graduate.
- Contact is simple and accessible.

---

## 5. Recommended Project Card Layout

```text
[Project Image / Placeholder]
[Status Badge]

Category • Year
Project Title
Short project summary, 2–3 lines only.

[Tech] [Tech] [Tech] [Tech]

[GitHub] [Live Demo] [View Details]
```

Rules:

- Keep summaries short.
- Use action words: built, designed, implemented, organized.
- Show role and impact in details modal.
- Replace placeholder links with real repositories when available.

---

## 6. Recommended Content Structure for Each Project

Use this structure for every featured project:

1. Project title
2. Category
3. Year/status
4. Your role
5. Tech stack
6. Short summary
7. Problem solved
8. Solution built
9. Key features
10. Impact/what it demonstrates
11. GitHub link
12. Live demo link if available
13. Screenshots if available

Example:

```text
AquaBill — Water Billing Management System
Role: Frontend / Desktop App Developer
Tech: React, TypeScript, Vite, Tauri
Problem: Water billing staff need a faster way to manage consumer records, bills, and payments.
Solution: Built a desktop dashboard with consumer, billing, payment, report, PDF, and QR workflows.
Impact: Shows ability to design real-world business systems and build organized React interfaces.
```

---

## 7. Mobile Layout Behavior

Mobile rules:

- Navbar collapses into a menu button.
- Hero becomes single-column.
- CTA buttons stack vertically.
- Cards become one column.
- Project images keep fixed height and crop cleanly.
- Timeline removes or simplifies the vertical line.
- Contact links stack.
- Maintain at least 16px body text.
- Avoid heavy particle animations on mobile.

---

## 8. Visual Hierarchy Improvements

Change these from the current portfolio:

- Replace “Senior Full-Stack Developer” with a truthful junior-focused headline.
- Remove or reduce gallery unless screenshots prove project quality.
- Put AquaBill first because it is your most modern stack project.
- Replace skill progress bars with categorized skills.
- Use fewer floating code elements to reduce visual noise.
- Use project case-study details instead of long card paragraphs.
- Make contact static and reliable instead of a non-working form.
- Keep one strong accent color system rather than too many effects.

---

## 9. Professional Improvements for Job Applications

Highest-impact improvements:

1. Add a real downloadable PDF resume in `/public/Gerby-Hallasgo-Resume.pdf`.
2. Replace placeholder GitHub links with direct project repository links.
3. Add screenshots for each project.
4. Add one short “what I learned” line per project.
5. Avoid claiming senior-level titles.
6. Add a short availability line: “Open to junior developer roles and remote-friendly opportunities.”
7. Keep grammar polished and concise.
8. Make sure every button works or is visibly disabled.
9. Use Lighthouse or browser dev tools to check performance and accessibility.
10. Keep the site static for easy GitHub Pages deployment.
