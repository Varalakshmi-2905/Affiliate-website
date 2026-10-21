# Cozy Canvas — affiliate website starter

A responsive, static affiliate marketing website starter. It includes category filters, product search, product cards, mobile navigation, affiliate-link placeholders, affiliate disclosure, privacy template, and contact/affiliate setup page.

## What works now
- Responsive homepage and curated category sections.
- Category filtering and search.
- Product cards are generated from `js/products.js`.
- Product links open in a new tab with `rel="sponsored nofollow noopener"` when a valid URL is entered.
- Mobile navigation.
- Demo newsletter interaction. **It does not collect or send emails.**
- Privacy, affiliate disclosure, and contact template pages.

## Before publishing
1. Replace every empty `affiliateUrl: ""` in `js/products.js` with your own approved affiliate tracking URL.
2. Verify product names, images, claims, descriptions, and current prices. Prices currently show `₹ —` intentionally.
3. Replace the contact placeholder and personalize the privacy policy and disclosure for your business and affiliate network.
4. Check the affiliate program's rules for images, price display, link placement, required disclosures, and allowed traffic sources. Do not copy product images or scrape prices unless allowed.
5. The newsletter is a visual demo only. Connect an email service and add its privacy terms before collecting subscribers.
6. This site has no database, admin dashboard, checkout, or server-side functionality. You can add those later if needed.

## Run locally
- Extract the folder.
- Open `index.html` in a modern browser. An internet connection is needed for Google Fonts and remote Unsplash photos.
- For a local development server, use VS Code Live Server or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish with a custom domain (example: Netlify)
1. Create an account on Netlify.
2. Choose **Add new site** / **Deploy manually** (the wording may change).
3. Drag the contents of this folder (the files and folders, not the ZIP itself if the interface asks for extracted files) into the deploy area. You should see `index.html` at the site root.
4. Netlify gives you a temporary `*.netlify.app` address. Test the homepage, mobile layout, filters, and affiliate links.
5. In Netlify's domain settings, add the domain you purchased from a registrar. Follow the exact DNS instructions shown by Netlify at your domain registrar. DNS changes can take time to propagate.
6. Enable HTTPS in the host settings once the domain is verified.
7. Visit the custom domain on phone and desktop, and test every link again.

Hosting providers change their interfaces and plans. Check current prices before buying a domain or paid plan. A custom domain costs money; hosting may be available on a free tier, but plan limits can change.

## Other hosting
GitHub Pages can host static files with a custom domain. Cloudflare Pages is another static hosting option. Use one provider at a time initially to keep setup simple.

## Updating products
Edit `js/products.js`. Each item uses:
- `name`: display name
- `category`: Home, Fashion, Tech, Beauty, or Lifestyle
- `tag`: small badge
- `price`: accurate current price or `Check store`
- `description`: short, factual description
- `image`: image URL you have permission to use
- `affiliateUrl`: your approved affiliate URL
- `button`: optional button text

Empty affiliate URLs intentionally route to the setup page instead of pretending an affiliate link exists.
