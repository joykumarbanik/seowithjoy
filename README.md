# Joy Kumar Banik — Portfolio Website

A single-page, no-build portfolio site (plain HTML/CSS/JS — no framework, no
install step) built to run directly on GitHub Pages.

## File map

```
index.html          → all page content and section structure
style.css            → all design/layout (colors, fonts, spacing live here)
script.js             → interactions: nav menu, hero animation, case study rendering, contact form
case-studies.js       → ⭐ EDIT THIS to add/change case studies — nothing else needs to change
assets/img/joy-profile.jpg   → your photo
assets/Joy_Kumar_Banik_CV.pdf → CV, linked from the "Download CV" button
```

## How to publish it on GitHub Pages

1. Create a new GitHub repository (e.g. `joy-portfolio`).
2. Upload all the files in this folder to the repo, keeping the folder structure
   (the `assets` folder must stay where it is).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a live URL, usually:
   `https://<your-username>.github.io/<repo-name>/`
   It can take a minute or two to go live the first time.

### Using a custom domain (optional)
If you buy a domain (e.g. `joykumarbanik.com`), add a file called `CNAME`
(no extension) at the root of the repo containing just your domain name, then
point your domain's DNS to GitHub Pages following
[GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## How to add a new case study

Open `case-studies.js` and copy one block inside `CASE_STUDIES`, then edit the
text:

```js
{
  client: "New Client Name",
  tag: "eCommerce · Region",
  url: "clientdomain.com",
  problem: "One or two sentences on the challenge.",
  approach: [
    "First thing you did",
    "Second thing you did",
  ],
  results: [
    { value: "+120%", label: "organic traffic in 6 months" },
    { value: "#1", label: "for primary category keyword" },
  ],
},
```

Save the file and refresh — no other file needs to be touched. The card
appears automatically in the Case Studies section.

## Things to fill in / double-check before going live

- [ ] Replace the sample metrics in `case-studies.js` marked
      "SAMPLE — replace with real data" with your actual figures for each client.
- [ ] Add your LinkedIn URL — search `data-placeholder="linkedin"` in
      `index.html` and swap the `href="#"` for your profile link.
- [ ] Swap `assets/Joy_Kumar_Banik_CV.pdf` for an updated CV whenever you revise it
      (keep the same filename, or update the link in `index.html`).
- [ ] Update the phone/email in `index.html`'s contact section if they change.

## Local preview

No build tools needed — just open `index.html` in a browser. For a closer-to-
production preview (recommended, so relative paths behave the same as on
GitHub Pages), run from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
