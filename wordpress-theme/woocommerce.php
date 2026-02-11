<?php
/**
 * The template for displaying WooCommerce pages
 *
 * @package GoodQuality
 */

get_header(); ?>

<div class="woocommerce-container">
    <div class="container">
        
        <?php if (is_shop() || is_product_category() || is_product_tag()) : ?>
            
            <div class="shop-layout">
                
                <!-- Shop Sidebar -->
                <aside class="shop-sidebar">
                    
                    <!-- Categories Widget -->
                    <div class="widget shop-categories">
                        <h3 class="widget-title"><?php _e('Categories', 'goodquality'); ?></h3>
                        <?php echo goodquality_category_dropdown(); ?>
                    </div>

                    <!-- Collections Widget -->
                    <div class="widget shop-collections">
                        <h3 class="widget-title"><?php _e('Collections', 'goodquality'); ?></h3>
                        <?php echo goodquality_collections_tabs(); ?>
                    </div>

                    <!-- Promotional Widget -->
                    <div class="widget shop-promotions">
                        <?php echo goodquality_promotional_tabs(); ?>
                    </div>

                    <!-- Price Filter -->
                    <?php if (is_active_sidebar('shop-sidebar')) : ?>
                        <?php dynamic_sidebar('shop-sidebar'); ?>
                    <?php endif; ?>
                    
                </aside>

                <!-- Shop Content -->
                <main class="shop-content">
                    <?php woocommerce_content(); ?>
                </main>
                
            </div>
            
        <?php else : ?>
            
            <!-- Single Product or Other WooCommerce Pages -->
            <main class="woocommerce-main">
                <?php woocommerce_content(); ?>
            </main>
            
        <?php endif; ?>
        
    </div>
</div>

<style>
/* WooCommerce Layout Styles */
.woocommerce-container {
    padding: 2rem 0;
}

.shop-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    align-items: start;
}

.shop-sidebar {
    background: #f9fafb;
    padding: 1.5rem;
    border-radius: 0.5rem;
    position: sticky;
    top: 100px;
}

.shop-sidebar .widget {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.shop-sidebar .widget:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.shop-content {
    min-height: 500px;
}

/* Collections in Sidebar */
.shop-collections .collections-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.shop-collections .collection-item {
    text-align: center;
    padding: 1rem;
    background: white;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
}

.shop-collections .collection-image {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
}

/* Promotional Tabs in Sidebar */
.shop-promotions .promotional-tabs {
    background: white;
    border-radius: 0.375rem;
    overflow: hidden;
}

.shop-promotions .promo-tabs-nav {
    display: flex;
    flex-direction: column;
}

.shop-promotions .promo-tab {
    padding: 0.75rem;
    border: none;
    background: #f3f4f6;
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #e5e7eb;
}

.shop-promotions .promo-tab.active {
    background: var(--primary-color);
    color: white;
}

.shop-promotions .promo-tab-content {
    padding: 1rem;
    display: none;
}

.shop-promotions .promo-tab-content.active {
    display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
    .shop-layout {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .shop-sidebar {
        position: static;
        order: 2;
    }
    
    .shop-content {
        order: 1;
    }
}

/* WooCommerce Product Grid */
.woocommerce .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.woocommerce .product {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
    padding: 0;
}

.woocommerce .product:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.woocommerce .product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.woocommerce .product .woocommerce-loop-product__title {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
    padding: 0 1rem;
}

.woocommerce .product .price {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.woocommerce .product .button {
    margin: 0 1rem 1rem;
    width: calc(100% - 2rem);
}

/* Single Product Page */
.woocommerce div.product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.woocommerce div.product .product-images {
    position: relative;
}

.woocommerce div.product .product-summary {
    padding: 1rem 0;
}

.woocommerce div.product .product_title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.woocommerce div.product .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.woocommerce div.product .cart {
    margin-bottom: 2rem;
}

.woocommerce div.product .cart .quantity {
    margin-right: 1rem;
}

.woocommerce div.product .cart .button {
    background: var(--success-color);
    font-size: 1.125rem;
    padding: 0.75rem 2rem;
}

.woocommerce div.product .cart .button:hover {
    background: #059669;
}

/* Cart and Checkout */
.woocommerce-cart .cart-collaterals {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 2rem;
    margin-top: 2rem;
}

.woocommerce-checkout .checkout-layout {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 2rem;
}

/* Responsive Single Product */
@media (max-width: 768px) {
    .woocommerce div.product {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .woocommerce-cart .cart-collaterals,
    .woocommerce-checkout .checkout-layout {
        grid-template-columns: 1fr;
    }
}
</style>

<?php get_footer(); ?>

