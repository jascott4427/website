# Pip-Boy Portfolio

A Fallout-inspired personal portfolio website with authentic Pip-Boy terminal aesthetics.

## Features

- 🎮 Authentic Pip-Boy CRT display with scanlines and glow effects
- 🎨 Customizable color themes (background and border colors)
- 📱 Fully responsive design
- 💾 LocalStorage for color preferences
- 🚀 Static HTML/CSS/JS - ready for Cloudflare Pages

## Pages

- **Home** - Personal introduction with S.P.E.C.I.A.L. stats
- **Projects** - Showcase of all projects
- **Hobbies** - Personal interests and hobbies
- **Game Dev** - Game development projects
- **Resume** - Professional experience and skills

## Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push this repository to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/`
6. Click "Save and Deploy"

### Option 2: Direct Upload

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project" → "Direct Upload"
3. Upload all files (index.html, projects.html, hobbies.html, gamedev.html, resume.html, css/, js/)
4. Click "Deploy site"

## File Structure

\`\`\`
/
├── index.html          # Home page
├── projects.html       # Projects page
├── hobbies.html        # Hobbies page
├── gamedev.html        # Game dev page
├── resume.html         # Resume page
├── css/
│   └── styles.css      # All Pip-Boy styles
├── js/
│   └── script.js       # Color settings & navigation
└── README.md           # This file
\`\`\`

## Customization

### Changing Colors

Click the "⚙ SETTINGS" button in the header to:
- Adjust background color
- Adjust border/text color
- Choose from 5 preset themes (Classic Green, Amber, Blue, Red, Purple)

Colors are automatically saved to localStorage.

### Editing Content

All content is in the HTML files. Simply edit the text within each page to customize:
- Personal information
- Project details
- Hobbies and interests
- Resume/experience

### Default Colors

- Background: `#1a3a1a` (dark green)
- Border/Text: `#4ade80` (bright green)

## Technologies

- Pure HTML5
- CSS3 with custom properties
- Vanilla JavaScript
- No frameworks or dependencies

## Browser Support

Works on all modern browsers that support:
- CSS Custom Properties
- CSS Grid
- LocalStorage API

---

© 2077 ROBCO INDUSTRIES
