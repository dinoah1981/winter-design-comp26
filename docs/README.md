# Winter 2026 Design Competition - Materials Site

A black & white retro monochrome themed website for the Winter 2026 Design Competition.

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `winter-2026-design-comp` (or whatever you prefer)
3. Make it **Public** (required for free GitHub Pages)

### Step 2: Upload These Files
Upload all files from this folder to your new repository:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `images/` folder (with all 3 images)

### Step 3: Enable GitHub Pages
1. In your repository, go to **Settings**
2. Scroll down to **Pages** section (or click "Pages" in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/(root)** folder
5. Click **Save**
6. Wait 1-2 minutes for the site to deploy
7. Your site will be at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## ✏️ How to Edit Links

All links are in **ONE place** - easy to find and edit!

### Option 1: Edit in GitHub (Easiest)
1. Go to your repository on GitHub
2. Click on `script.js`
3. Click the **pencil icon** (Edit this file)
4. Find the `LINKS` object near the top
5. Replace the placeholder URLs with your actual Google Doc/Sheet links
6. Scroll down and click **Commit changes**
7. Wait 1-2 minutes for the site to update

### Option 2: Edit Locally
1. Open `script.js` in any text editor
2. Find the `LINKS` object (around line 10)
3. Replace the URLs
4. Save and push to GitHub

### Example:
```javascript
// Before
schedule: "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit",

// After
schedule: "https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit",
```

---

## 📁 File Structure

```
winter-2026-design-comp/
├── index.html          # Main HTML file
├── styles.css          # All styling (black & white theme)
├── script.js           # JavaScript + LINK CONFIGURATION
├── README.md           # This file
└── images/
    ├── hero-filmmaker.jpg    # Hero background image
    ├── vintage-camera.jpg    # Overview section image
    └── cinema-reel.jpg       # (available for future use)
```

---

## 🎨 Site Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen dramatic intro with competition title |
| **The Challenge** | Competition overview with 3-8 minute film requirements |
| **Basic Materials** | Schedule, Rubric, Rules, Team Roles |
| **Team Time Materials** | Advisor slides, worksheets, role assignments |
| **Daily Workshops** | Monday/Tuesday/Wednesday workshop materials |
| **Prizes & Recognition** | Film festival opportunities |
| **Recommended Resources** | TED Talks, equipment guides, tutorials |

---

## 🔗 Link Keys Reference

Use these keys when editing `script.js`:

### Basic Materials
- `schedule` - Master spreadsheet
- `rubric` - Judging rubric
- `rules` - Competition rules
- `roles` - Team roles guide

### Team Time Materials
- `advisorSlides` - Daily presentation slides
- `filmAnalysis` - Film analysis worksheet
- `storyOutline` - Story outline worksheet
- `roleAssignment` - Role assignment sheet

### Workshop Materials (Monday)
- `monTopicSlides`, `monTopicPlan` - Choosing Your Topic
- `monStorySlides`, `monStoryPlan` - Story Development

### Workshop Materials (Tuesday)
- `tueAiSlides`, `tueAiPlan` - Ethical Research with AI
- `tueCineSlides`, `tueCinePlan` - Cinematography Basics
- `tueInterviewSlides`, `tueInterviewPlan` - Interview Techniques
- `tueBrollSlides`, `tueBrollPlan` - B-Roll & Visual Storytelling

### Workshop Materials (Wednesday)
- `wedEditSlides`, `wedEditPlan` - Editing Fundamentals
- `wedSoundSlides`, `wedSoundPlan` - Sound Design & Music
- `wedColorSlides`, `wedColorPlan` - Color Correction
- `wedFinalSlides`, `wedFinalPlan` - Finalizing Your Film

### Resources
- `tedTalks` - TED Talks on Storytelling
- `equipment` - Film Equipment Guide
- `editing` - Editing Software Tutorials
- `copyright` - Copyright & Fair Use
- `releaseForms` - Release Forms
- `festivalGuide` - Film Festival Guide

---

## 📱 Features

- ✅ Mobile-responsive design
- ✅ Smooth scroll animations
- ✅ Easy link editing in one file
- ✅ Black & white monochrome aesthetic
- ✅ "For The Culture" branding
- ✅ Fast loading (static HTML/CSS/JS)
- ✅ Free hosting on GitHub Pages

---

## ❓ Need Help?

If you have trouble:
1. Check that your repository is **Public**
2. Make sure GitHub Pages is enabled in Settings
3. Verify all files are in the root of the repository
4. Check the browser console for any errors

---

**Made for the Winter 2026 Design Competition** 🎬
