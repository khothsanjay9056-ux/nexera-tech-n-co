# SEO Setup Checklist for Nexera Technology

## ✅ Already Implemented

1. **Meta Tags** ✓
   - Title, description, keywords on all pages
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Proper canonical URLs

2. **Structured Data (Schema.org)** ✓
   - LocalBusiness schema in layout.tsx
   - Includes: name, address, phone, geo coordinates
   - Area served: Mississauga, Ontario, Canada

3. **Technical SEO** ✓
   - Sitemap.xml automatically generated
   - Robots.txt configured
   - Fast loading (87-111 KB first load)
   - Mobile responsive
   - Static page generation (SSG)

## 🔧 Next Steps

### 1. Add Custom Domain
1. Buy domain (e.g., nexeratech.com)
2. In Vercel dashboard:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions
3. Update `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

### 2. Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property (your domain)
3. Verify ownership (use DNS or HTML tag method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for important pages

### 3. Google Analytics (Optional)
1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Install Google Analytics component (I can help with this)

### 4. Optimize Images
Current status:
- ✓ Logo has alt text
- ✓ Next.js Image component auto-optimizes
- 🔧 TODO: Create og-image.jpg (1200x630) for social sharing
  - Design it with your logo + tagline
  - Save as `public/og-image.jpg`

### 5. Add Social Media Links
Update in `src/app/layout.tsx` line 111:
```typescript
sameAs: [
  'https://linkedin.com/company/your-company',
  'https://twitter.com/your-handle',
  'https://facebook.com/your-page',
],
```

### 6. Monitor Performance
- Use Google PageSpeed Insights: https://pagespeed.web.dev/
- Check Core Web Vitals in Search Console
- Monitor with Vercel Analytics (built-in)

## 📊 Expected Timeline
- Domain + SSL: 24-48 hours
- Google indexing: 2-7 days
- Ranking improvements: 2-8 weeks

## 🎯 Priority Order
1. **High Priority** (Do Now)
   - Add custom domain
   - Create og-image.jpg
   - Submit to Google Search Console

2. **Medium Priority** (Within 1 week)
   - Add Google Analytics
   - Update social media links
   - Create business profiles (Google Business, LinkedIn)

3. **Low Priority** (Ongoing)
   - Monitor analytics
   - Create blog content
   - Build backlinks

## Need Help?
Run these commands:
- Check mobile responsiveness: Test on your phone
- Test page speed: https://pagespeed.web.dev/
- Validate structured data: https://search.google.com/test/rich-results
