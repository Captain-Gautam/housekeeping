# Momai Traders - Wholesale Housekeeping Solutions Website

## 🏢 About

**Momai Traders** is a premier super stockist and wholesale supplier of housekeeping and cleaning materials based in Ahmedabad, Gujarat. This is the official website showcasing our comprehensive range of products and services.

## 🚀 Tech Stack

- **Framework**: Tailwind CSS 3.4.1
- **Build Tool**: Node.js with npm
- **Development Server**: live-server
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
Housekeeping/
├── index.html              # Homepage with hero, about, products, gallery, contact
├── clients.html            # Clients showcase page
├── package.json            # Node.js dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── src/
│   └── input.css          # Tailwind source file
└── dist/
    └── output.css         # Compiled Tailwind CSS (generated)
```

## ⚙️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   This will:
   - Watch and compile Tailwind CSS automatically
   - Start live-server at `http://127.0.0.1:8080`
   - Auto-reload browser on file changes

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Features

### Home Page (index.html)
- **Hero Section**: Responsive hero with company branding, "Super Stockist & Wholesale Supplier" badge
- **About Section**: Company expertise and why choose us
- **Products & Services**: 6 housekeeping product categories with WhatsApp/Email buttons
- **Gallery**: 8 product images with lightbox modal (click to view full size)
- **Contact Section**: Owner details, business hours, location map
- **Footer**: 4-column footer with complete address, quick links, products, and contact options

### Clients Page (clients.html)
- **Header**: Back to home navigation
- **Hero Section**: Client-focused messaging
- **Client Grid**: 11 major clients with logos (128px size) and industry-specific icon fallbacks
- **Industries Section**: 6 industry cards (Healthcare, Hospitality, F&B, Manufacturing, Commercial, Technology)
- **CTA Section**: Call-to-action with WhatsApp and phone buttons
- **Footer**: Same 4-column footer as home page

## 🎨 Customization

### Colors (tailwind.config.js)
```javascript
colors: {
  primary: { 500: '#0ea5e9', 600: '#0284c7' },  // Blue
  secondary: { 500: '#10b981', 600: '#059669' }  // Green
}
```

### Fonts
- **Body**: Inter (Google Fonts)
- **Headings**: Poppins (Google Fonts)

### Custom Components (src/input.css)
- `.gradient-text` - Blue to green gradient text
- `.btn-primary` - Primary blue button
- `.btn-secondary` - Secondary green button
- `.btn-whatsapp` - WhatsApp green button
- `.card` - White card with shadow
- `.icon-circle` - Circular icon background
- Custom animations: fade-in, slide-up, float, pulse-slow

## 📱 Responsive Design

- **Mobile**: Optimized layouts, touch-friendly buttons, responsive navigation
- **Tablet**: Grid adjustments, proper spacing
- **Desktop**: Full-width layouts, hover effects, side-by-side sections

## 🖼️ Gallery Lightbox

Click any gallery image to open in a modal lightbox:
- Dark overlay background
- Cross (×) button to close
- Click outside image to close
- Press ESC key to close
- Smooth animations

## 📋 Product Categories

1. **Housekeeping Material** - Mops, brooms, wipes, floor cleaning solutions
2. **Washroom Solutions** - Toilet cleaners, sanitizers, air fresheners, tissue papers
3. **Cleaning Chemicals** - Detergents, disinfectants, floor/glass cleaners
4. **Disposable Products** - Gloves, masks, shoe covers, garbage bags
5. **Dustbins & Waste Management** - All types of dustbins, waste segregation bins
6. **Hygiene & Safety Equipment** - Safety signs, sanitizer dispensers, safety gear

## 👥 Our Clients (11 Major Clients)

- DHL Express (Logistics)
- Arvind Limited (Textile Manufacturing)
- Narayani Heights (Hotel & Resort)
- Kaka Ni Bhajipav (Restaurant Chain)
- Merengo CIMS Hospital (Healthcare)
- Empire Hospital (Healthcare)
- Apaxon Technologies (IT Services)
- Alpha Hospital (Healthcare)
- The Gharana Resort (Hospitality)
- Parth Hospital (Healthcare)
- City Center II (Commercial Complex)

## 📞 Contact Information

**Momai Traders**
- **Address**: Shop-10, Simandhar Complex, Ghatlodiya, Ahmedabad, Gujarat 380061
- **Phone**: +91 99749 02733 / +91 87884 77773
- **Email**: momaitraders73@gmail.com
- **Business Hours**: Monday - Saturday: 9AM-9PM | Sunday: Closed

## 🛠️ Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build Tailwind CSS for production
- `npm start` - Start live-server only

## 📦 Dependencies

- tailwindcss: ^3.4.1
- autoprefixer: ^10.4.16
- postcss: ^8.4.33
- live-server: ^1.2.2
- concurrently: ^8.2.2

## 🌐 Deployment

The website is ready for deployment. Upload all files to your web hosting:
- index.html
- clients.html
- dist/output.css
- All referenced images (currently using Unsplash CDN)

## 📝 Notes

- Client logos use industry-specific Font Awesome icons as fallbacks
- Gallery images use Unsplash CDN (high-quality, free stock photos)
- All sections are fully responsive
- WhatsApp and phone buttons link directly to communication channels

---

**Last Updated**: December 26, 2025
**Developer**: Built with ❤️ for Momai Traders
