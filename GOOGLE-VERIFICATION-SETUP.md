# Google Search Console Setup Instructions

## Step 1: Verify Your Site

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" and enter your full domain
4. Google will give you several verification options:

### Option A: HTML File Upload (Recommended)
- Google will provide a verification file (e.g., `googleXXXXXXXX.html`)
- Download it
- Place it in `/workspaces/nexera-tech-n-co/public/`
- Deploy your site
- Click "Verify" in Google Search Console

### Option B: HTML Meta Tag
- Copy the meta tag Google provides
- Add it to your `src/app/layout.tsx` in the `<head>` section
- Deploy and verify

### Option C: Google Analytics
- If you already have Google Analytics connected, use this method

## Step 2: Submit Your Sitemap

After verification:
1. In Google Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"

Google will now start crawling your site!

## Step 3: Check Index Coverage

Within 24-48 hours:
1. Go to "Coverage" or "Pages" in Search Console
2. Verify all pages are indexed
3. Fix any errors if shown

## Step 4: Monitor Performance

Check weekly:
- Search queries bringing traffic
- Average position for keywords
- Click-through rates
- Any crawl errors

---

## Bing Webmaster Tools

Repeat similar process at: https://www.bing.com/webmasters

---

**Note**: Save this file for future reference!
