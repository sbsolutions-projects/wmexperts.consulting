# wmexperts.consulting

Static website for the SAP EWM MFS freelance consulting practice of Hendrik Schulte-Bahrenberg.

## Structure

```
/
├── index.html         Home — hero + 3 services + CTA
├── profile.html       Bio, photo, skills
├── services.html      Detailed service descriptions (3 sections)
├── contact.html       Email + LinkedIn cards
├── privacy.html       Privacy policy (GDPR)
├── imprint.html       Legal notice (TEMPLATE — fill in before going live)
├── 404.html           Custom 404 page
├── .nojekyll          Marker file for GitHub Pages
└── assets/
    ├── css/style.css  Single master stylesheet
    └── img/           favicon.png + photo.jpg go here
```

## Before going live — checklist

1. **Fill in the imprint.** Open `imprint.html` and replace every `[PLACEHOLDER]`
   with real data. Required fields: full legal name, full postal address (no
   PO box), phone, email, VAT-ID or Steuernummer. Then remove the yellow
   warning box and any `<!-- ... -->` HTML comments. **Do not publish without this.**

2. **Set the real Google Analytics 4 measurement ID.** In every HTML file there
   is a line: `const GA_ID = 'G-XXXXXXXXXX';` — replace with your real ID.
   While the placeholder is set, GA simply does not load (safe by design).

3. **Add the favicon.** Put a `favicon.png` (32×32 or 48×48) at
   `/assets/img/favicon.png`.

4. **Add the profile photo.** Put a portrait at `/assets/img/photo.jpg`
   (recommended ~600×750 px, 4:5 aspect ratio). If missing, the profile page
   shows a clean blue-tinted placeholder gradient.

5. **Verify the contact email.** Currently set to
   `h.schulte@wmexperts.consulting`. Make sure that mailbox actually exists
   before publishing.

6. **(Optional) Add Open Graph share image.** For nice link previews, add
   `og:image` meta tags in each HTML file's `<head>` pointing to a 1200×630 px
   image you upload to `/assets/img/`.

## Deployment to GitHub Pages

1. Create a new public repository (e.g. `wmexperts-consulting`).
2. Push all files to the `main` branch.
3. In the repo: Settings → Pages → Source: `main`, folder: `/ (root)`.
4. In Settings → Pages → Custom domain: enter `wmexperts.consulting`.
5. At the domain registrar, set DNS:
   - `A` records for the apex domain → GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - or a `CNAME` record for `www` → `<your-github-username>.github.io`
6. Tick "Enforce HTTPS" once the certificate is provisioned (a few minutes).

## What was deliberately NOT done

- **No References page.** Empty "coming soon" pages weaken trust. Add this once real, anonymized cases are available.
- **No Mailchimp newsletter form.** This is a service site; the newsletter lives on `wmexperts.online`.
- **No YouTube embeds.** Same reason. Visitors are pointed to `.online` for content.
- **No client-side `fetch()` for header/footer.** Inlined per page for simpler hosting, better SEO, and no FOUC. With 7 pages the duplication is negligible; if it grows, revisit.

## Open issues to track

- Privacy policy was adapted from `wmexperts.online` and reviewed against the
  actually used services on this site (GA4, Google Fonts, GitHub Pages, mailto).
  No legal review has been performed — recommend a quick check by a lawyer
  familiar with German/EU law before going live, especially the imprint.
- The GA loading pattern on `wmexperts.online` is not consent-conform (loads
  before the cookie banner). On `.consulting` it is fixed — handle `.online`
  in a separate pass.
