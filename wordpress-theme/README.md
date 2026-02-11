# GoodQuality WordPress E-Commerce Theme

A modern, responsive WordPress theme designed specifically for fashion and accessories e-commerce stores with full WooCommerce integration.

## Features

### 🛍️ E-Commerce Ready
- **Full WooCommerce Integration** - Complete shopping cart, checkout, and product management
- **User Authentication** - Secure login/register system with AJAX functionality
- **Dynamic Cart Updates** - Real-time cart count and AJAX add-to-cart
- **Product Categories** - Organized dropdown navigation with subcategories
- **Collections System** - Custom post type for product collections
- **Promotional Tabs** - Built-in deals, offers, and bundle discount sections

### 🎨 Design & Layout
- **Responsive Design** - Mobile-first approach with perfect tablet and desktop layouts
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Payment Section in Footer** - Comprehensive payment options display
- **Sticky Header** - Always accessible navigation and cart
- **Category Dropdown** - Organized product navigation with visual hierarchy

### 🔧 Technical Features
- **WordPress 6.4+ Compatible** - Latest WordPress standards and best practices
- **PHP 7.4+ Support** - Modern PHP compatibility
- **SEO Optimized** - Clean markup and semantic HTML structure
- **Performance Optimized** - Lightweight code and optimized assets
- **Accessibility Ready** - WCAG 2.1 compliant with keyboard navigation
- **Translation Ready** - Full internationalization support

### 🛡️ Security & Authentication
- **Secure Login System** - WordPress native authentication with AJAX
- **Session Management** - Proper session handling and security
- **CSRF Protection** - Nonce verification for all AJAX requests
- **Input Sanitization** - All user inputs properly sanitized
- **SQL Injection Prevention** - Prepared statements and WordPress standards

## Installation

### Requirements
- WordPress 5.0 or higher
- PHP 7.4 or higher
- WooCommerce plugin (recommended)
- MySQL 5.6 or higher

### Quick Installation
1. **Upload Theme Files**
   ```bash
   # Upload the entire wordpress-theme folder to:
   /wp-content/themes/goodquality/
   ```

2. **Activate Theme**
   - Go to WordPress Admin → Appearance → Themes
   - Find "GoodQuality E-Commerce" theme
   - Click "Activate"

3. **Install Required Plugins**
   - Install and activate WooCommerce
   - Configure WooCommerce settings

4. **Import Demo Content** (Optional)
   - Use WordPress Importer to import sample content
   - Configure menus and widgets

## Configuration

### Menu Setup
1. **Primary Menu**
   - Go to Appearance → Menus
   - Create a new menu and assign to "Primary Menu" location
   - Add pages: Home, Shop, About, Contact

2. **Footer Menu**
   - Create another menu for "Footer Menu" location
   - Add customer service pages

3. **Categories Menu**
   - Assign to "Categories Menu" location
   - Add product categories

### Widget Areas
The theme includes several widget areas:
- **Shop Sidebar** - Displays on shop and category pages
- **Footer Widget Area 1-3** - Three footer columns for widgets

### Collections Setup
1. **Create Collections**
   - Go to Collections → Add New
   - Add title, description, and featured image
   - Publish collection

2. **Collection Pages**
   - Collections automatically appear on homepage
   - Individual collection pages use custom URLs

### Payment Options
Payment methods are displayed in the footer and include:
- Credit Cards (Visa, MasterCard, Amex, Discover)
- Digital Wallets (Apple Pay, Google Pay, PayPal)
- Buy Now Pay Later (Klarna, Affirm, Afterpay)

## Customization

### Theme Options
Access theme customization through:
- **WordPress Customizer** - Appearance → Customize
- **Theme Settings** - Custom options panel

### Color Scheme
Default colors can be modified in `style.css`:
```css
:root {
  --primary-color: #3b82f6;    /* Main brand color */
  --secondary-color: #1e40af;  /* Secondary brand color */
  --success-color: #10b981;    /* Success/buy buttons */
  --warning-color: #f59e0b;    /* Warning elements */
  --danger-color: #ef4444;     /* Error/danger elements */
}
```

### Logo Setup
1. Go to Appearance → Customize → Site Identity
2. Upload your logo image
3. The theme will automatically display it in the header

### Typography
The theme uses Inter font family by default. To change:
1. Modify the Google Fonts import in `functions.php`
2. Update CSS font-family declarations

## Page Templates

### Available Templates
- **Homepage** - `index.php` - Main landing page with collections and promotions
- **Shop Page** - `woocommerce.php` - Product listing with sidebar
- **Collections Page** - `page-collections.php` - Showcase all collections
- **Deals Page** - `page-deals.php` - Promotional offers and deals
- **Single Product** - Uses WooCommerce templates with theme styling

### Creating Custom Pages
1. **Collections Page**
   - Create new page
   - Select "Collections Page" template
   - Publish page

2. **Deals Page**
   - Create new page
   - Select "Deals Page" template
   - Add countdown timer and promotional content

## WooCommerce Integration

### Product Display
- **Shop Grid** - Responsive product grid layout
- **Product Cards** - Enhanced product cards with ratings and badges
- **Quick View** - Product preview functionality
- **Add to Cart** - AJAX add to cart with visual feedback

### Cart & Checkout
- **Mini Cart** - Header cart icon with item count
- **Cart Page** - Enhanced cart layout with recommendations
- **Checkout** - Streamlined checkout process
- **My Account** - Customer account dashboard

### Product Categories
- **Category Navigation** - Dropdown menu with subcategories
- **Category Pages** - Custom layouts for category browsing
- **Product Filters** - Built-in filtering options

## Promotional Features

### Deals System
- **Weekly Deals** - Rotating weekly promotions
- **Limited Time Offers** - Urgency-driven sales
- **Bundle Discounts** - Multi-product savings
- **Flash Sales** - Time-sensitive deals

### Collections
- **Kitchen Essentials** - Curated kitchen accessories
- **Autumn Picks** - Seasonal collections
- **Bestsellers** - Popular products showcase
- **Luxury Essentials** - Premium product collections

## Mobile Optimization

### Responsive Features
- **Mobile Menu** - Slide-out navigation menu
- **Touch-Friendly** - Optimized for touch interactions
- **Fast Loading** - Optimized images and code
- **Mobile Cart** - Easy mobile shopping experience

### Performance
- **Lazy Loading** - Images load as needed
- **Minified Assets** - Compressed CSS and JavaScript
- **Caching Ready** - Compatible with caching plugins
- **CDN Support** - Ready for content delivery networks

## SEO Features

### Built-in SEO
- **Semantic HTML** - Proper heading structure
- **Meta Tags** - Automatic meta tag generation
- **Schema Markup** - Rich snippets for products
- **Clean URLs** - SEO-friendly URL structure

### Compatibility
- **Yoast SEO** - Full compatibility with Yoast
- **RankMath** - Works with RankMath plugin
- **All in One SEO** - Compatible with AIOSEO

## Browser Support

### Supported Browsers
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## Troubleshooting

### Common Issues

1. **Cart Not Updating**
   - Ensure WooCommerce is activated
   - Check AJAX URL in browser console
   - Verify nonce values

2. **Login Not Working**
   - Check WordPress user permissions
   - Verify AJAX endpoints
   - Ensure proper nonce verification

3. **Categories Not Showing**
   - Create product categories in WooCommerce
   - Assign products to categories
   - Check menu assignments

4. **Collections Not Displaying**
   - Create collection posts
   - Add featured images
   - Verify collection post type registration

### Debug Mode
Enable WordPress debug mode for troubleshooting:
```php
// Add to wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Support & Updates

### Getting Help
- **Documentation** - This README file
- **WordPress Codex** - Official WordPress documentation
- **WooCommerce Docs** - WooCommerce documentation

### Theme Updates
- Regular updates for WordPress compatibility
- Security patches and bug fixes
- New feature additions

## License

This theme is licensed under the GPL v2 or later.

## Credits

### Technologies Used
- **WordPress** - Content management system
- **WooCommerce** - E-commerce functionality
- **CSS Grid & Flexbox** - Modern layout systems
- **JavaScript ES6** - Modern JavaScript features
- **Google Fonts** - Typography (Inter font family)

### Icons & Assets
- **SVG Icons** - Custom SVG icons for UI elements
- **Placeholder Images** - Demo content images
- **CSS Animations** - Smooth transitions and effects

---

**Version:** 1.0.0  
**Author:** GoodQuality Team  
**Website:** https://goodquality.co.uk  
**Support:** info@goodquality.co.uk

