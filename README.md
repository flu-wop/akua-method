# Akua Method - Luxury Perfume Oil Website

A sophisticated, fully responsive e-commerce website for Akua Method, a luxury perfume oil brand inspired by Ghanaian heritage and African elegance.

## 📋 Project Overview

**Brand:** Akua Method  
**Product:** Luxury perfume oils in customizable 1/3 Oz roller bottles  
**Price:** $15 per bottle (excluding shipping/handling)  
**Collections:** 15 handcrafted scents (12 Feminine, 2 Masculine, 1 Unisex)

### Key Features

- ✅ **Fully Responsive** - Mobile-first design, optimized for all devices
- ✅ **Product Customization** - Interactive bottle & cap color selection
- ✅ **E-commerce Ready** - Cart system, product filtering, checkout flow
- ✅ **Booking System** - Scent consultations ($30) with sample shipment
- ✅ **Event Management** - Pop-up event RSVPs and local pickup options
- ✅ **WCAG AA Accessible** - Screen reader compatible, keyboard navigable
- ✅ **Performance Optimized** - Lazy loading, optimized assets
- ✅ **Culturally Authentic** - Ghanaian motifs (Adinkra symbols), African elegance

---

## 🗂️ File Structure

```
akua-method/
├── index.html                 # Home page with hero, collections, values
├── shop.html                  # Product listing with filters
├── product-detail.html        # Individual product pages (template)
├── experiences.html           # Scent consultations & workshops
├── sample-sets.html           # Sample set offerings
├── customization.html         # Bottle customizer tool
├── events.html                # Pop-up events & RSVPs
├── story.html                 # Brand story & founder bio
├── contact.html               # Contact form
├── terms.html                 # Terms & Conditions
├── refund-policy.html         # Refund/Return policy
├── product-info.html          # Ingredients & product details
├── allergen-list.html         # Allergen information
├── complaints.html            # Customer reviews & complaints
├── css/
│   ├── main.css               # Core styles, variables, components
│   ├── shop.css               # Shop page specific styles
│   ├── product.css            # Product detail page styles
│   └── experiences.css        # Experiences page styles
├── js/
│   ├── main.js                # Navigation, cart, global functions
│   ├── shop.js                # Product catalog, filtering
│   ├── product.js             # Product detail interactions
│   ├── customizer.js          # Customization visualizer
│   ├── cart.js                # Cart management (included in main.js)
│   └── booking.js             # Booking form handling
├── assets/
│   └── images/
│       ├── hero-bottle.jpg    # Hero section background
│       ├── adinkra-pattern.svg # Ghanaian decorative pattern
│       ├── bottle-clear.png   # Customization assets
│       ├── bottle-amber.png
│       ├── bottle-black.png
│       ├── cap-gold.png
│       ├── cap-black.png
│       ├── cap-wood.png
│       ├── collection-feminine.jpg
│       ├── collection-masculine.jpg
│       ├── collection-unisex.jpg
│       ├── consultation.jpg
│       └── products/          # 15 product images
│           ├── unwrapped.jpg
│           ├── velvetine.jpg
│           ├── sensual-surrender.jpg
│           ├── eternal-city.jpg
│           ├── desert-dreams.jpg
│           ├── midnight-purr.jpg
│           ├── follow-me.jpg
│           ├── midnight-mango.jpg
│           ├── golden-nectar.jpg
│           ├── golden-hour.jpg
│           ├── sensual-shore.jpg
│           ├── candy-coast.jpg
│           ├── rude-boy-blend.jpg
│           ├── baddest-man.jpg
│           └── forbidden-streets.jpg
└── README.md
```

---

## 🎨 Design Specifications

### Color Palette
- **Primary:** `#3E2723` (Deep Brown) - Grounding, luxurious
- **Secondary:** `#A85536` (Terracotta) - Earthy warmth
- **Accent:** `#B8941E` (Gold) - Luxury highlight
- **Sage:** `#8B9D83` (Soft Green) - Natural complement
- **Cream:** `#F5F1E8` (Warm Neutral) - Background
- **White:** `#FFFFFF`
- **Black:** `#1A1A1A`

*Note: All text colors meet WCAG AA contrast ratios (4.5:1 minimum).*

### Typography
- **Headings:** Playfair Display (serif) - Elegant, refined
- **Body:** Montserrat (sans-serif) - Clean, modern
- **Loaded via:** Google Fonts CDN

### Cultural Elements
- Simplified Adinkra symbols (Ghanaian heritage)
- Woven texture patterns
- African color palette inspiration

---

## 🛒 Product Catalog

### Feminine Scents (12)
1. **Unwrapped** - Soft florals, warm vanilla
2. **Velvetine** - Rich amber, soft petals
3. **Sensual Surrender** - Floral seduction, intoxicating warmth
4. **Eternal City** - Timeless elegance, ancient romance
5. **Desert Dreams** - Sun-warmed sands, exotic blooms
6. **Midnight Purr** - Mysterious, seductive
7. **Follow Me** - Irresistible, captivating
8. **Midnight Mango** - Tropical sweetness, dark sophistication
9. **Golden Nectar** - Sweet honey, luminous
10. **Golden Hour** - Warm, radiant
11. **Sensual Shore** - Ocean breezes, sun-kissed
12. **Candy Coast** - Playful sweetness, beachside

### Masculine Scents (2)
1. **Rude Boy Blend** - Bold, confident, commanding
2. **The Baddest Man** - Powerful, magnetic, unforgettable

### Unisex Scents (1)
1. **Forbidden Streets** - Mysterious, balanced, enigmatic

---

## ⚙️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **LocalStorage** - Client-side cart persistence

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

### Performance
- Lazy loading images
- Minimal external dependencies
- Optimized CSS (no unused styles)
- Efficient JavaScript (no jQuery)

### Accessibility (WCAG AA)
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatible
- Focus indicators
- Alt text for all images
- Sufficient color contrast

---

## 🚀 Deployment Guide

### Option 1: Static Hosting (Netlify - Recommended)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to project directory:**
   ```bash
   cd akua-method
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts:**
   - Create new site or link existing
   - Build directory: `.` (current directory)
   - Publish directory: `.`

5. **Custom domain setup:**
   - Go to Netlify dashboard
   - Domain settings → Add custom domain
   - Follow DNS configuration instructions

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd akua-method
   vercel --prod
   ```

3. **Custom domain:**
   - Vercel dashboard → Project → Domains
   - Add domain and configure DNS

### Option 3: GitHub Pages

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Repository → Settings → Pages
   - Source: main branch, root folder
   - Save

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Upload files via FTP/SFTP:**
   - Connect to your hosting server
   - Upload entire `akua-method` folder to `public_html` or `www`

2. **Ensure file permissions:**
   - HTML/CSS/JS files: 644
   - Directories: 755

---

## 🖼️ Asset Requirements

### Images Needed (Placeholders currently)

**Hero & Collections:**
- `hero-bottle.jpg` (1920x1080px, high-quality perfume bottle hero image)
- `collection-feminine.jpg` (800x600px)
- `collection-masculine.jpg` (800x600px)
- `collection-unisex.jpg` (800x600px)
- `consultation.jpg` (1200x800px, scent consultation scene)
- `social-1.jpg` through `social-4.jpg` (Instagram feed, 1000x1000px)

**Product Images (all 800x1000px, white/neutral background):**
- Unwrapped
- Velvetine
- Sensual Surrender
- Eternal City
- Desert Dreams
- Midnight Purr
- Follow Me
- Midnight Mango
- Golden Nectar
- Golden Hour
- Sensual Shore
- Candy Coast
- Rude Boy Blend
- The Baddest Man
- Forbidden Streets

**Customization Assets (transparent PNG, 500x500px):**
- `bottle-clear.png` (clear glass bottle)
- `bottle-amber.png` (amber glass bottle)
- `bottle-black.png` (black glass bottle)
- `cap-gold.png` (gold cap)
- `cap-black.png` (black cap)
- `cap-wood.png` (wooden cap)

**Cultural Motif:**
- `adinkra-pattern.svg` (Simplified Ghanaian Adinkra symbol for decorative use)

---

## 🔌 E-commerce Integration

### Current Implementation
- Client-side cart using LocalStorage
- Product data hardcoded in `shop.js`
- Placeholder checkout flow

### Integration Options

**Option 1: Snipcart (Easiest)**
```html
<!-- Add to <head> -->
<script src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></script>
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />

<!-- Add to <body> -->
<div id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY"></div>

<!-- Product button -->
<button class="snipcart-add-item"
  data-item-id="unwrapped"
  data-item-price="15.00"
  data-item-name="Unwrapped"
  data-item-custom1-name="Bottle Color"
  data-item-custom1-options="Clear|Amber|Black"
  data-item-custom2-name="Cap Color"
  data-item-custom2-options="Gold|Black|Wood">
  Add to Cart
</button>
```

**Option 2: Shopify Buy Button**
1. Create Shopify store
2. Generate Buy Button for each product
3. Embed in product cards

**Option 3: Stripe Payment Links**
1. Create products in Stripe Dashboard
2. Generate payment links
3. Replace "Add to Cart" with "Buy Now" → Stripe link

**Option 4: Custom Backend**
- Build API with Node.js/Express or Python/Flask
- Integrate Stripe/PayPal for payments
- Store orders in database

---

## 📅 Event & Booking Integration

### Scent Consultation Booking

**Option 1: Calendly (Recommended)**
```html
<!-- Embed in experiences.html -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/akuamethod/consultation?hide_event_type_details=1&primary_color=B8941E" 
     style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Option 2: Acuity Scheduling**
- Embed scheduling iframe
- Customizable to match brand colors

**Option 3: Custom Form + Email**
- Use current booking form
- Send email confirmation
- Manual scheduling via email

### Event RSVPs

**Options:**
- Google Forms (free, easy)
- Typeform (beautiful, user-friendly)
- Eventbrite (ticketing + RSVP)
- Custom database solution

---

## 🧪 Testing Checklist

### Pre-Launch Testing

**Functionality:**
- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly
- [ ] Cart adds/removes items
- [ ] Cart persists on page reload
- [ ] Filters show correct products
- [ ] Customization updates in real-time
- [ ] Forms validate properly
- [ ] All CTAs lead to correct pages

**Responsiveness:**
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad/tablet
- [ ] Test on desktop (1920px, 1366px, 1024px)
- [ ] Test on ultrawide (2560px+)

**Accessibility:**
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Check color contrast (use WebAIM tool)
- [ ] Verify alt text on all images
- [ ] Test keyboard-only navigation

**Performance:**
- [ ] Run Lighthouse audit (target: 90+ Performance)
- [ ] Check image optimization
- [ ] Verify no console errors
- [ ] Test load time on 3G connection

**Cross-Browser:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 📝 Content Customization

### Updating Product Catalog

Edit `js/shop.js`:

```javascript
const PRODUCTS = [
    {
        id: 'new-scent',
        name: 'New Scent Name',
        category: 'feminine', // or 'masculine', 'unisex'
        price: 15.00,
        description: 'Your scent description...',
        notes: {
            top: ['Note1', 'Note2'],
            heart: ['Note3', 'Note4'],
            base: ['Note5', 'Note6']
        },
        image: 'assets/images/products/new-scent.jpg'
    },
    // ... more products
];
```

### Updating Brand Content

- **Hero tagline:** Edit `index.html` line ~65
- **About story:** Edit `story.html`
- **Consultation pricing:** Edit `experiences.html` and `js/booking.js`
- **Event locations:** Edit `events.html`

---

## 🔒 Legal & Compliance

### Required Legal Pages (Included)
- Terms and Conditions
- Refund Policy
- Product Information
- Allergen List
- Customer Complaints/Reviews

### Recommendations
1. **Privacy Policy** - Add if collecting emails/data
2. **Cookie Consent** - Add banner if using analytics
3. **ADA Compliance Statement** - Include accessibility statement
4. **Shipping Policy** - Detail shipping rates, times, restrictions

---

## 🆘 Support & Maintenance

### Common Issues

**Issue:** Cart not updating
- **Fix:** Check LocalStorage is enabled in browser
- **Fix:** Clear browser cache and reload

**Issue:** Images not loading
- **Fix:** Verify image paths are correct
- **Fix:** Ensure images are uploaded to `assets/images/`

**Issue:** Mobile menu not closing
- **Fix:** Check JavaScript console for errors
- **Fix:** Verify `main.js` is loaded

### Future Enhancements

**Phase 2:**
- Product reviews/ratings
- Wishlist functionality
- Customer accounts
- Subscription service
- Gift cards
- Loyalty program

**Phase 3:**
- Virtual try-on (AR scent visualization)
- AI scent recommendations
- Multi-language support
- International shipping
- Wholesale portal

---

## 📞 Contact & Credits

**Brand:** Akua Method  
**Website:** [To be deployed]  
**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Developed for:** Migration from Wix/LegalZoom site  

---

## 📄 License

All rights reserved © 2026 Akua Method. Website code for internal use only.

---

**Ready to launch?** Follow the deployment guide above and replace placeholder images with high-quality product photography. For technical support, consult the troubleshooting section or reach out to your web developer.
