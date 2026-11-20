# Nitin Yadav: Personal Website

My academic and professional website: research, publications, teaching, experience and projects.

**Live site:** https://nitinyadav7607.github.io

## Files

| File | What it is |
|------|------------|
| `index.html` | All page content (edit text here) |
| `style.css` | Design: colours, fonts, layout |
| `script.js` | Dark mode, mobile menu, scroll effects |
| `assets/Nitin_Yadav_CV.pdf` | CV linked from the "Download CV" button |
| `assets/profile.jpg` | Your photo (add this, see below) |
| `assets/favicon.svg` | Browser-tab icon |
| `playground/` | The Playground page and the games and tools in it |
| `assets/playground/` | Preview images for the Playground cards |
| `.nojekyll` | Tells GitHub Pages to serve files as they are |

## Publish on GitHub Pages

1. On GitHub, create a **new public repository** named exactly **`nitinyadav7607.github.io`**.
2. In VS Code, open a terminal in this folder (`D:\Personal_website`) and run:
   ```bash
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/nitinyadav7607/nitinyadav7607.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
4. After 1 to 2 minutes the site is live at **https://nitinyadav7607.github.io**.

To update the site later:
```bash
git add .
git commit -m "Update"
git push
```

## Common edits

- **Add your photo:** save a square photo as `assets/profile.jpg`. It replaces the "NY" circle automatically.
- **Add a paper:** in `index.html`, search for `Accepted &amp; Forthcoming` and copy one `<li class="pub">` block. When a paper is published, move it to the *Published* list.
- **Add a game or tool to the Playground:** put its folder in `playground/` (main file named `index.html`), add a preview image to `assets/playground/`, then copy a card in `playground/index.html`.
- **Add a news item:** search for `Recent News` and copy an `<li>` line to the top of the list.
- **Update the CV:** replace `assets/Nitin_Yadav_CV.pdf` with a new file of the same name.
- **Change the accent colour:** in `style.css`, edit `--accent` near the top.

## Preview locally

Open `index.html` in a browser, or in VS Code install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.
