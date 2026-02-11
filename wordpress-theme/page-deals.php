<?php
/**
 * Template for Promotional Pages
 * Template Name: Deals Page
 *
 * @package GoodQuality
 */

get_header(); ?>

<main id="main" class="site-main deals-page">
    <div class="container">
        
        <!-- Page Header -->
        <header class="page-header">
            <h1 class="page-title"><?php the_title(); ?></h1>
            <div class="deals-timer">
                <div class="timer-label"><?php _e('Limited Time Offer Ends In:', 'goodquality'); ?></div>
                <div class="countdown-timer" data-end-date="2024-12-31">
                    <div class="timer-unit">
                        <span class="timer-number" id="days">00</span>
                        <span class="timer-label"><?php _e('Days', 'goodquality'); ?></span>
                    </div>
                    <div class="timer-unit">
                        <span class="timer-number" id="hours">00</span>
                        <span class="timer-label"><?php _e('Hours', 'goodquality'); ?></span>
                    </div>
                    <div class="timer-unit">
                        <span class="timer-number" id="minutes">00</span>
                        <span class="timer-label"><?php _e('Minutes', 'goodquality'); ?></span>
                    </div>
                    <div class="timer-unit">
                        <span class="timer-number" id="seconds">00</span>
                        <span class="timer-label"><?php _e('Seconds', 'goodquality'); ?></span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Promotional Tabs -->
        <section class="promotional-section">
            <div class="promo-tabs-container">
                <div class="promo-tabs-nav">
                    <button class="promo-tab active" data-tab="deals-week" aria-selected="true">
                        <?php _e('Deals of the Week', 'goodquality'); ?>
                    </button>
                    <button class="promo-tab" data-tab="limited-offers" aria-selected="false">
                        <?php _e('Limited Time Offers', 'goodquality'); ?>
                    </button>
                    <button class="promo-tab" data-tab="bundle-discounts" aria-selected="false">
                        <?php _e('Bundle Discounts', 'goodquality'); ?>
                    </button>
                    <button class="promo-tab" data-tab="flash-sales" aria-selected="false">
                        <?php _e('Flash Sales', 'goodquality'); ?>
                    </button>
                </div>

                <!-- Deals of the Week -->
                <div class="promo-tab-content active" id="deals-week-content" aria-hidden="false">
                    <div class="promo-header">
                        <h2><?php _e('Weekly Deals - Up to 50% Off', 'goodquality'); ?></h2>
                        <p><?php _e('Handpicked deals updated every Monday. Don\'t miss these incredible savings!', 'goodquality'); ?></p>
                    </div>
                    
                    <?php if (function_exists('wc_get_products')) : ?>
                        <div class="deals-grid">
                            <?php
                            // Get sale products
                            $sale_products = wc_get_products(array(
                                'limit' => 8,
                                'meta_key' => '_sale_price',
                                'meta_compare' => 'EXISTS',
                                'status' => 'publish',
                            ));
                            
                            foreach ($sale_products as $product) :
                                $regular_price = $product->get_regular_price();
                                $sale_price = $product->get_sale_price();
                                $discount_percent = $regular_price ? round((($regular_price - $sale_price) / $regular_price) * 100) : 0;
                            ?>
                                <div class="deal-item">
                                    <div class="deal-badge"><?php echo $discount_percent; ?>% OFF</div>
                                    <div class="deal-image">
                                        <?php echo $product->get_image('medium'); ?>
                                    </div>
                                    <div class="deal-info">
                                        <h3><?php echo $product->get_name(); ?></h3>
                                        <div class="deal-price">
                                            <span class="sale-price"><?php echo wc_price($sale_price); ?></span>
                                            <span class="regular-price"><?php echo wc_price($regular_price); ?></span>
                                        </div>
                                        <a href="<?php echo $product->get_permalink(); ?>" class="btn btn-primary">
                                            <?php _e('Shop Now', 'goodquality'); ?>
                                        </a>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Limited Time Offers -->
                <div class="promo-tab-content" id="limited-offers-content" aria-hidden="true">
                    <div class="promo-header">
                        <h2><?php _e('Limited Time Offers - Act Fast!', 'goodquality'); ?></h2>
                        <p><?php _e('Exclusive offers available for a limited time only. These deals won\'t last long!', 'goodquality'); ?></p>
                    </div>
                    
                    <div class="limited-offers-grid">
                        <div class="offer-card urgent">
                            <div class="offer-timer">⏰ <?php _e('24 Hours Left', 'goodquality'); ?></div>
                            <h3><?php _e('Flash Sale: Designer Watches', 'goodquality'); ?></h3>
                            <p><?php _e('Premium timepieces at unbeatable prices', 'goodquality'); ?></p>
                            <div class="offer-discount">70% OFF</div>
                            <a href="<?php echo site_url('/product-category/watches/'); ?>" class="btn btn-success">
                                <?php _e('Shop Watches', 'goodquality'); ?>
                            </a>
                        </div>
                        
                        <div class="offer-card">
                            <div class="offer-timer">⏰ <?php _e('3 Days Left', 'goodquality'); ?></div>
                            <h3><?php _e('Jewelry Clearance', 'goodquality'); ?></h3>
                            <p><?php _e('Stunning jewelry pieces at clearance prices', 'goodquality'); ?></p>
                            <div class="offer-discount">60% OFF</div>
                            <a href="<?php echo site_url('/product-category/jewelry/'); ?>" class="btn btn-success">
                                <?php _e('Shop Jewelry', 'goodquality'); ?>
                            </a>
                        </div>
                        
                        <div class="offer-card">
                            <div class="offer-timer">⏰ <?php _e('1 Week Left', 'goodquality'); ?></div>
                            <h3><?php _e('Shoe Sale Extravaganza', 'goodquality'); ?></h3>
                            <p><?php _e('Step into savings with our shoe collection', 'goodquality'); ?></p>
                            <div class="offer-discount">45% OFF</div>
                            <a href="<?php echo site_url('/product-category/shoes/'); ?>" class="btn btn-success">
                                <?php _e('Shop Shoes', 'goodquality'); ?>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bundle Discounts -->
                <div class="promo-tab-content" id="bundle-discounts-content" aria-hidden="true">
                    <div class="promo-header">
                        <h2><?php _e('Bundle Discounts - Buy More, Save More', 'goodquality'); ?></h2>
                        <p><?php _e('Mix and match from our collections and save big with bundle deals!', 'goodquality'); ?></p>
                    </div>
                    
                    <div class="bundle-deals">
                        <div class="bundle-deal">
                            <div class="bundle-info">
                                <h3><?php _e('Complete Outfit Bundle', 'goodquality'); ?></h3>
                                <p><?php _e('Top + Bottom + Shoes + Accessories', 'goodquality'); ?></p>
                                <div class="bundle-savings">
                                    <span class="save-amount"><?php _e('Save £50', 'goodquality'); ?></span>
                                    <span class="save-percent"><?php _e('(25% off)', 'goodquality'); ?></span>
                                </div>
                            </div>
                            <div class="bundle-action">
                                <a href="<?php echo site_url('/bundle/complete-outfit/'); ?>" class="btn btn-primary">
                                    <?php _e('Build Bundle', 'goodquality'); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="bundle-deal">
                            <div class="bundle-info">
                                <h3><?php _e('Accessory Pack', 'goodquality'); ?></h3>
                                <p><?php _e('Watch + Jewelry + Bag', 'goodquality'); ?></p>
                                <div class="bundle-savings">
                                    <span class="save-amount"><?php _e('Save £30', 'goodquality'); ?></span>
                                    <span class="save-percent"><?php _e('(20% off)', 'goodquality'); ?></span>
                                </div>
                            </div>
                            <div class="bundle-action">
                                <a href="<?php echo site_url('/bundle/accessory-pack/'); ?>" class="btn btn-primary">
                                    <?php _e('Build Bundle', 'goodquality'); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="bundle-deal">
                            <div class="bundle-info">
                                <h3><?php _e('Seasonal Collection', 'goodquality'); ?></h3>
                                <p><?php _e('Any 3 items from seasonal collections', 'goodquality'); ?></p>
                                <div class="bundle-savings">
                                    <span class="save-amount"><?php _e('Save £25', 'goodquality'); ?></span>
                                    <span class="save-percent"><?php _e('(15% off)', 'goodquality'); ?></span>
                                </div>
                            </div>
                            <div class="bundle-action">
                                <a href="<?php echo site_url('/bundle/seasonal-collection/'); ?>" class="btn btn-primary">
                                    <?php _e('Build Bundle', 'goodquality'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Flash Sales -->
                <div class="promo-tab-content" id="flash-sales-content" aria-hidden="true">
                    <div class="promo-header">
                        <h2><?php _e('Flash Sales - Lightning Deals', 'goodquality'); ?></h2>
                        <p><?php _e('Quick! These deals change every hour. Grab them before they\'re gone!', 'goodquality'); ?></p>
                    </div>
                    
                    <div class="flash-sales-grid">
                        <div class="flash-sale-item">
                            <div class="flash-timer">
                                <span class="timer-label"><?php _e('Next deal in:', 'goodquality'); ?></span>
                                <span class="timer-display">45:23</span>
                            </div>
                            <div class="flash-product">
                                <h3><?php _e('Mystery Flash Deal', 'goodquality'); ?></h3>
                                <p><?php _e('Random product, guaranteed 60% off', 'goodquality'); ?></p>
                                <div class="flash-price">
                                    <span class="flash-discount">60% OFF</span>
                                    <span class="flash-original">£99.99</span>
                                    <span class="flash-sale">£39.99</span>
                                </div>
                                <button class="btn btn-success flash-btn">
                                    <?php _e('Reveal Deal', 'goodquality'); ?>
                                </button>
                            </div>
                        </div>
                        
                        <div class="flash-sale-item">
                            <div class="flash-timer">
                                <span class="timer-label"><?php _e('Deal ends in:', 'goodquality'); ?></span>
                                <span class="timer-display">12:45</span>
                            </div>
                            <div class="flash-product">
                                <h3><?php _e('Designer Handbag', 'goodquality'); ?></h3>
                                <p><?php _e('Limited edition luxury handbag', 'goodquality'); ?></p>
                                <div class="flash-price">
                                    <span class="flash-discount">75% OFF</span>
                                    <span class="flash-original">£199.99</span>
                                    <span class="flash-sale">£49.99</span>
                                </div>
                                <button class="btn btn-success flash-btn">
                                    <?php _e('Buy Now', 'goodquality'); ?>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Signup -->
        <section class="deals-newsletter">
            <div class="newsletter-content">
                <h2><?php _e('Never Miss a Deal!', 'goodquality'); ?></h2>
                <p><?php _e('Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.', 'goodquality'); ?></p>
                <form class="newsletter-form">
                    <input type="email" placeholder="<?php _e('Enter your email address', 'goodquality'); ?>" required>
                    <button type="submit" class="btn btn-primary">
                        <?php _e('Subscribe', 'goodquality'); ?>
                    </button>
                </form>
            </div>
        </section>

    </div>
</main>

<style>
/* Deals Page Styles */
.deals-page {
    padding: 2rem 0;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 1rem;
}

.page-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.deals-timer {
    margin-top: 2rem;
}

.countdown-timer {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

.timer-unit {
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
}

.timer-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
}

.timer-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

/* Promotional Tabs */
.promo-tabs-container {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.promo-tabs-nav {
    display: flex;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb;
}

.promo-tab {
    flex: 1;
    padding: 1rem 2rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
}

.promo-tab.active {
    background: var(--primary-color);
    color: white;
}

.promo-tab:hover:not(.active) {
    background: #e5e7eb;
}

.promo-tab-content {
    padding: 2rem;
    display: none;
}

.promo-tab-content.active {
    display: block;
}

.promo-header {
    text-align: center;
    margin-bottom: 2rem;
}

.promo-header h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.promo-header p {
    font-size: 1.125rem;
    color: #6b7280;
}

/* Deals Grid */
.deals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.deal-item {
    position: relative;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
}

.deal-item:hover {
    transform: translateY(-4px);
}

.deal-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #ef4444;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 0.875rem;
    z-index: 10;
}

.deal-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.deal-info {
    padding: 1.5rem;
}

.deal-info h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.deal-price {
    margin-bottom: 1rem;
}

.sale-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-right: 0.5rem;
}

.regular-price {
    font-size: 1rem;
    color: #9ca3af;
    text-decoration: line-through;
}

/* Limited Offers */
.limited-offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.offer-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: all 0.3s;
}

.offer-card.urgent {
    border-color: #ef4444;
    animation: pulse 2s infinite;
}

.offer-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.offer-timer {
    background: #fef3c7;
    color: #92400e;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: inline-block;
}

.offer-discount {
    font-size: 2rem;
    font-weight: bold;
    color: #ef4444;
    margin: 1rem 0;
}

/* Bundle Deals */
.bundle-deals {
    display: grid;
    gap: 1.5rem;
}

.bundle-deal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
    padding: 2rem;
    border-radius: 0.5rem;
    border-left: 4px solid var(--primary-color);
}

.bundle-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.bundle-savings {
    margin-top: 0.5rem;
}

.save-amount {
    font-size: 1.125rem;
    font-weight: bold;
    color: #059669;
}

.save-percent {
    color: #6b7280;
    margin-left: 0.5rem;
}

/* Flash Sales */
.flash-sales-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.flash-sale-item {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
}

.flash-timer {
    margin-bottom: 1.5rem;
}

.timer-display {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffd700;
}

.flash-price {
    margin: 1.5rem 0;
}

.flash-discount {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 0.5rem;
}

.flash-original {
    text-decoration: line-through;
    opacity: 0.7;
    margin-right: 1rem;
}

.flash-sale {
    font-size: 1.5rem;
    font-weight: bold;
}

.flash-btn {
    background: white;
    color: #ff6b6b;
    border: none;
    font-weight: bold;
}

.flash-btn:hover {
    background: #f8f9fa;
}

/* Newsletter */
.deals-newsletter {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 4rem;
}

.newsletter-content h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.newsletter-form {
    display: flex;
    max-width: 400px;
    margin: 2rem auto 0;
    gap: 1rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
}

.newsletter-form button {
    background: white;
    color: var(--primary-color);
    border: none;
    font-weight: 600;
}

/* Animations */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .countdown-timer {
        gap: 1rem;
    }
    
    .timer-unit {
        padding: 0.75rem;
    }
    
    .timer-number {
        font-size: 1.5rem;
    }
    
    .promo-tabs-nav {
        flex-direction: column;
    }
    
    .deals-grid,
    .limited-offers-grid,
    .flash-sales-grid {
        grid-template-columns: 1fr;
    }
    
    .bundle-deal {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
}
</style>

<script>
// Countdown Timer
function updateCountdown() {
    const endDate = new Date('2024-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
</script>

<?php get_footer(); ?>

