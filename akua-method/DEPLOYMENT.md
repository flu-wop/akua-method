# AKUA METHOD - DEPLOYMENT CHECKLIST

## ✅ Pre-Launch Checklist

### 1. Replace Placeholder Images
**Priority: HIGH**

All images in `assets/images/` are currently placeholders. Replace with:

**Hero & Marketing:**
- [ ] `hero-bottle.jpg` - Stunning perfume bottle on elegant background
- [ ] `collection-feminine.jpg` - Feminine collection showcase
- [ ] `collection-masculine.jpg` - Masculine collection showcase
- [ ] `collection-unisex.jpg` - Unisex fragrance visual
- [ ] `consultation.jpg` - Scent consultation scene (person + samples)
- [ ] `social-1.jpg` through `social-4.jpg` - Instagram-worthy lifestyle shots

**Product Photography (15 bottles):**
- [ ] `products/unwrapped.jpg`
- [ ] `products/velvetine.jpg`
- [ ] `products/sensual-surrender.jpg`
- [ ] `products/eternal-city.jpg`
- [ ] `products/desert-dreams.jpg`
- [ ] `products/midnight-purr.jpg`
- [ ] `products/follow-me.jpg`
- [ ] `products/midnight-mango.jpg`
- [ ] `products/golden-nectar.jpg`
- [ ] `products/golden-hour.jpg`
- [ ] `products/sensual-shore.jpg`
- [ ] `products/candy-coast.jpg`
- [ ] `products/rude-boy-blend.jpg`
- [ ] `products/baddest-man.jpg`
- [ ] `products/forbidden-streets.jpg`

**Customization Assets:**
- [ ] `bottle-clear.png` - Transparent PNG of clear bottle
- [ ] `bottle-amber.png` - Transparent PNG of amber bottle
- [ ] `bottle-black.png` - Transparent PNG of black bottle
- [ ] `cap-gold.png` - Transparent PNG of gold cap
- [ ] `cap-black.png` - Transparent PNG of black cap
- [ ] `cap-wood.png` - Transparent PNG of wooden cap

**Cultural Element:**
- [ ] `adinkra-pattern.svg` - Simplified Ghanaian Adinkra symbol

---

### 2. Set Up E-Commerce Integration
**Priority: HIGH**

Choose ONE integration method:

**Option A: Snipcart (Recommended for quick launch)**
1. Sign up at snipcart.com
2. Get your Public API Key
3. Add to all HTML files (in `<head>`):
```html
<script src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></script>
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
```
4. Add to all HTML files (before closing `</body>`):
```html
<div id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY"></div>
```
5. Update "Add to Cart" buttons in `shop.js` (instructions in README)

**Option B: Shopify Buy Button**
1. Create Shopify store + add products
2. Generate Buy Buttons in Shopify admin
3. Replace cart system in `main.js` with Shopify embeds

**Option C: Stripe Payment Links**
1. Create products in Stripe Dashboard
2. Generate payment links
3. Update buttons to redirect to Stripe checkout

---

### 3. Set Up Booking System
**Priority: MEDIUM**

**For Scent Consultations:**

**Option A: Calendly (Easiest)**
1. Create Calendly account
2. Set up "Scent Consultation" event type (30-45 min, $30)
3. Customize with brand colors (#B8941E gold)
4. Get embed code
5. Replace placeholder in `experiences.html` (line ~65):
```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/yourusername/consultation?primary_color=B8941E" 
     style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Option B: Acuity Scheduling**
- Similar setup, different platform

---

### 4. Configure Domain & Hosting
**Priority: HIGH**

**Recommended: Netlify (Free tier, very fast)**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd akua-method
netlify deploy --prod
```

**Alternative: Vercel**
```bash
npm install -g vercel
cd akua-method
vercel --prod
```

**Custom Domain Setup:**
1. Purchase domain (e.g., akuamethod.com)
2. In Netlify/Vercel dashboard: Add custom domain
3. Update DNS records at your registrar:
   - Type: A, Name: @, Value: [provided IP]
   - Type: CNAME, Name: www, Value: [provided domain]
4. Wait 24-48 hours for propagation

---

### 5. Add Analytics
**Priority: MEDIUM**

**Google Analytics (Free):**
1. Create GA4 property
2. Get tracking ID
3. Add to all HTML files (in `<head>`):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Alternative: Plausible Analytics (Privacy-focused)**
- Lightweight, GDPR-compliant
- Single script tag

---

### 6. Email Setup
**Priority: MEDIUM**

**For Contact Forms & Order Confirmations:**

**Option A: Formspree (Contact form)**
1. Sign up at formspree.io
2. Create form
3. Update `contact.html` form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: EmailJS (More features)**
- Free tier: 200 emails/month
- Can send from client-side JavaScript

**For Transactional Emails (Orders):**
- Use e-commerce platform's built-in emails (Snipcart/Shopify)
- Or set up SendGrid/Mailgun if custom backend

---

### 7. SEO Optimization
**Priority: MEDIUM**

**Add to all pages:**
```html
<!-- In <head> -->
<meta property="og:title" content="Akua Method - Luxury Perfume Oils">
<meta property="og:description" content="Handcrafted perfume oils inspired by Ghanaian heritage">
<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">

<!-- Structured Data for Products -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Akua Method Perfume Oils",
  "description": "Luxury perfume oils inspired by Ghanaian heritage",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "15.00"
  }
}
</script>
```

**Create:**
- [ ] `sitemap.xml` (can auto-generate with tools)
- [ ] `robots.txt`
- [ ] OG image (1200x630px, includes logo + tagline)

---

### 8. SSL Certificate
**Priority: HIGH (Security)**

✅ **Automatic with Netlify/Vercel** - They provide free SSL via Let's Encrypt

If using traditional hosting:
- Enable SSL in cPanel/hosting panel
- Force HTTPS redirect in `.htaccess`:
```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

### 9. Performance Optimization
**Priority: LOW (Already optimized)**

**Image Optimization:**
- Compress all images (use TinyPNG or ImageOptim)
- Convert to WebP format for modern browsers
- Add lazy loading (already implemented)

**Test with:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

Target: **90+ Performance score**

---

### 10. Legal & Compliance
**Priority: MEDIUM**

**Complete these pages with real content:**
- [ ] `terms.html` - Terms & Conditions
- [ ] `refund-policy.html` - Refund/Return policy
- [ ] `product-info.html` - Full ingredient lists
- [ ] `allergen-list.html` - Allergen information

**Add if needed:**
- [ ] Privacy Policy (required if collecting emails/analytics)
- [ ] Cookie Consent Banner (required for EU visitors)
- [ ] Accessibility Statement

**Consult a lawyer** for final legal review of policies.

---

### 11. Social Media Setup
**Priority: MEDIUM**

**Create accounts:**
- [ ] Instagram (@akuamethod)
- [ ] Facebook (/akuamethod)
- [ ] TikTok (@akuamethod)

**Update links in footer** (all HTML files):
- Replace placeholder URLs with real profile links
- Test all social links work

---

### 12. Testing
**Priority: HIGH**

**Browser Testing:**
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox
- [ ] Edge

**Device Testing:**
- [ ] iPhone (multiple sizes)
- [ ] Android phone
- [ ] iPad/tablet
- [ ] Desktop (1920px, 1366px, 1024px)

**Functionality Testing:**
- [ ] All navigation links work
- [ ] Cart adds/removes items correctly
- [ ] Forms submit successfully
- [ ] Booking system works
- [ ] Checkout process completes
- [ ] Mobile menu opens/closes
- [ ] All images load

**Accessibility Testing:**
- [ ] Tab through entire site with keyboard
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Check color contrast (WebAIM tool)
- [ ] Verify all images have alt text

---

## 🚀 Launch Day Checklist

1. [ ] Final backup of all files
2. [ ] Double-check all payment integration works
3. [ ] Test order from start to finish
4. [ ] Verify confirmation emails send
5. [ ] Check mobile experience on real devices
6. [ ] Submit sitemap to Google Search Console
7. [ ] Post launch announcement on social media
8. [ ] Monitor analytics for first 24 hours
9. [ ] Check for errors in browser console

---

## 📞 Post-Launch Support

**Monitor:**
- Daily: Order confirmations, customer inquiries
- Weekly: Analytics (traffic, conversions, bounce rate)
- Monthly: Update product inventory, add new scents

**Common Issues:**
- **Cart not working:** Check JavaScript console for errors
- **Images missing:** Verify file paths, re-upload if needed
- **Forms not sending:** Check Formspree/email integration
- **Slow loading:** Compress images, enable caching

---

## 🎯 Next Steps (Phase 2)

- [ ] Add customer reviews/testimonials
- [ ] Create blog for SEO + storytelling
- [ ] Email newsletter signup + automation
- [ ] Loyalty/rewards program
- [ ] Gift card system
- [ ] Subscription options
- [ ] Wholesale portal

---

**Questions?** Refer to README.md for detailed technical documentation.

**Ready to launch?** ✨ Follow this checklist top to bottom, and you'll be live in no time!
