# Royal Cut - Beauty Salon Website

A modern, responsive website for Royal Cut, a premium beauty salon offering professional haircuts, facials, bridal makeup, and beauty services.

## 🌟 Features

### Core Features
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Fast Performance**: Built with Vite for optimal loading speeds

### Pages & Sections
1. **Home Page**
   - Hero section with call-to-action
   - Featured services showcase
   - Statistics and achievements
   - About preview section

2. **About Us**
   - Salon story and mission
   - Team member profiles
   - Values and achievements
   - Location information

3. **Services**
   - Comprehensive service menu
   - Pricing table (desktop) and cards (mobile)
   - Service categories
   - Additional services

4. **Packages & Offers**
   - Bridal package (₹10,000)
   - Membership plan (5 haircuts - ₹1000)
   - Festival offers (Diwali, Pongal, Wedding Season)
   - Seasonal specials

5. **Gallery**
   - Before/after transformations
   - Category filters
   - Salon environment photos
   - Customer testimonials

6. **Reviews**
   - Customer testimonials
   - Rating statistics
   - Service-specific reviews
   - Featured reviews

7. **Booking**
   - WhatsApp booking integration
   - Online appointment form
   - Service selection
   - Date and time picker

8. **Contact**
   - Contact information
   - Contact form
   - Google Maps integration
   - FAQ section

### Technical Features
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd salon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
salon-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── Footer.tsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── About.tsx      # About page
│   │   ├── Services.tsx   # Services page
│   │   ├── Packages.tsx   # Packages page
│   │   ├── Gallery.tsx    # Gallery page
│   │   ├── Reviews.tsx    # Reviews page
│   │   ├── Booking.tsx    # Booking page
│   │   └── Contact.tsx    # Contact page
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The website uses a pink and purple color scheme. You can customize colors in:
- `tailwind.config.js` - Theme colors
- `src/index.css` - Custom CSS variables

### Content
Update content in the respective page components:
- Service prices in `src/pages/Services.tsx`
- Package details in `src/pages/Packages.tsx`
- Contact information in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- Team information in `src/pages/About.tsx`

### Images
Replace placeholder emojis with actual images:
- Add images to `public/` directory
- Update image paths in components
- Optimize images for web use

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS
Customize the design system in `tailwind.config.js`:
- Colors
- Fonts
- Animations
- Spacing

### SEO
Update SEO meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Structured data

### Contact Information
Update contact details in multiple files:
- Phone number: `+919876543210`
- Email: `info@salonelegance.com`
- Address: `123 Beauty Street, City Center, 600001`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 📞 Support

For support or questions:
- Email: info@salonelegance.com
- Phone: +91 98765 43210

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from Lucide React
- Animations with Framer Motion

---

**Royal Cut** - Look Good. Feel Better. ✨
