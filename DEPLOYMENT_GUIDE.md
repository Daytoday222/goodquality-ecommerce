# GoodQuality Deployment Guide

This guide provides step-by-step instructions for deploying the GoodQuality e-commerce website on various platforms.

## 🚀 Quick Deployment Options

### Option 1: Static Site Hosting (Recommended)

#### Netlify Deployment
1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Your site will be live instantly

#### Vercel Deployment
1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
2. **Deploy**:
   ```bash
   vercel --prod
   ```

#### GitHub Pages
1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Push to GitHub repository**
3. **Enable GitHub Pages** in repository settings
4. **Set source to `dist/` folder**

### Option 2: WordPress Integration

#### Prerequisites
- WordPress installation (5.0+)
- FTP access or file manager
- Basic WordPress knowledge

#### Installation Steps
1. **Upload Theme Files**:
   - Compress the `wordpress-theme/` folder
   - Upload to `/wp-content/themes/goodquality/`
   - Extract files

2. **Activate Theme**:
   - Go to WordPress Admin → Appearance → Themes
   - Find "GoodQuality" theme
   - Click "Activate"

3. **Configure Settings**:
   - Update site title and tagline
   - Configure menus and widgets
   - Add products using custom post types

#### WordPress Customization
```php
// Add to functions.php for custom product post type
function create_product_post_type() {
    register_post_type('product',
        array(
            'labels' => array(
                'name' => 'Products',
                'singular_name' => 'Product'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
}
add_action('init', 'create_product_post_type');
```

### Option 3: Custom Server Deployment

#### Node.js Server
1. **Create server file** (`server.js`):
   ```javascript
   const express = require('express');
   const path = require('path');
   const app = express();
   
   app.use(express.static(path.join(__dirname, 'dist')));
   
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
   });
   
   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
   ```

2. **Install dependencies**:
   ```bash
   npm install express
   ```

3. **Start server**:
   ```bash
   node server.js
   ```

#### Apache Configuration
Create `.htaccess` file in the `dist/` directory:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Platform-Specific Configurations

### Shopify Integration
1. **Create new theme**:
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload ZIP file"
   - Upload the theme package

2. **Customize liquid templates**:
   - Modify product templates
   - Update collection pages
   - Configure checkout process

### Wix Integration
1. **Use Wix Editor**:
   - Import design elements
   - Recreate layout structure
   - Add Wix e-commerce components

2. **Custom code integration**:
   - Add CSS in site settings
   - Include JavaScript functionality
   - Configure Wix Stores

### Squarespace Integration
1. **Developer mode**:
   - Enable developer mode
   - Upload template files
   - Configure JSON templates

2. **Style customization**:
   - Add custom CSS
   - Modify template structure
   - Configure commerce settings

## 🌐 Domain and SSL Setup

### Domain Configuration
1. **Purchase domain** from registrar
2. **Configure DNS settings**:
   - A record: `@` → Server IP
   - CNAME: `www` → `your-domain.com`

### SSL Certificate
1. **Free SSL with Let's Encrypt**:
   ```bash
   certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

2. **Cloudflare SSL** (Recommended):
   - Add site to Cloudflare
   - Update nameservers
   - Enable SSL/TLS encryption

## 📊 Performance Optimization

### Image Optimization
1. **Compress images**:
   ```bash
   npm install -g imagemin-cli
   imagemin src/assets/*.jpg --out-dir=dist/assets --plugin=imagemin-mozjpeg
   ```

2. **WebP conversion**:
   ```bash
   cwebp input.jpg -q 80 -o output.webp
   ```

### Caching Configuration
```nginx
# Nginx caching
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### CDN Setup
1. **Cloudflare CDN**:
   - Add site to Cloudflare
   - Enable caching rules
   - Configure optimization settings

2. **AWS CloudFront**:
   - Create distribution
   - Configure origin settings
   - Set caching behaviors

## 🔒 Security Configuration

### HTTPS Enforcement
```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

### Security Headers
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

## 📱 Mobile App Deployment

### Progressive Web App (PWA)
1. **Add manifest.json**:
   ```json
   {
     "name": "GoodQuality Store",
     "short_name": "GoodQuality",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#3b82f6",
     "icons": [
       {
         "src": "/icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       }
     ]
   }
   ```

2. **Service Worker**:
   ```javascript
   // sw.js
   const CACHE_NAME = 'goodquality-v1';
   const urlsToCache = [
     '/',
     '/static/css/main.css',
     '/static/js/main.js'
   ];
   
   self.addEventListener('install', event => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(cache => cache.addAll(urlsToCache))
     );
   });
   ```

## 🛠️ Maintenance and Updates

### Regular Updates
1. **Update dependencies**:
   ```bash
   npm update
   npm audit fix
   ```

2. **Security patches**:
   ```bash
   npm audit
   npm audit fix --force
   ```

### Backup Strategy
1. **Database backups** (if using WordPress)
2. **File system backups**
3. **Version control** with Git

### Monitoring
1. **Google Analytics** setup
2. **Performance monitoring**
3. **Error tracking** with Sentry

## 📞 Support and Troubleshooting

### Common Issues
1. **Build errors**: Check Node.js version compatibility
2. **Routing issues**: Configure server for SPA routing
3. **Image loading**: Verify asset paths and permissions

### Getting Help
- Check documentation and README
- Review deployment logs
- Contact support: info@goodquality.co.uk

---

**Need help with deployment? Contact our technical team at info@goodquality.co.uk**

