<?php
/**
 * Template for Collections Pages
 * Template Name: Collections Page
 *
 * @package GoodQuality
 */

get_header(); ?>

<main id="main" class="site-main collections-page">
    <div class="container">
        
        <!-- Page Header -->
        <header class="page-header">
            <h1 class="page-title"><?php the_title(); ?></h1>
            <?php if (get_the_content()) : ?>
                <div class="page-description">
                    <?php the_content(); ?>
                </div>
            <?php endif; ?>
        </header>

        <!-- Collections Grid -->
        <section class="collections-showcase">
            
            <!-- Kitchen Essentials Collection -->
            <div class="collection-feature" id="kitchen-essentials">
                <div class="collection-content">
                    <div class="collection-info">
                        <h2><?php _e('Kitchen Essentials', 'goodquality'); ?></h2>
                        <p><?php _e('Discover our curated selection of premium kitchen accessories and essentials for the modern home chef.', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/kitchen-essentials/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Kitchen Essentials', 'goodquality'); ?>
                        </a>
                    </div>
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/kitchen-collection.jpg" alt="<?php _e('Kitchen Essentials', 'goodquality'); ?>">
                    </div>
                </div>
            </div>

            <!-- Autumn Picks Collection -->
            <div class="collection-feature" id="autumn-picks">
                <div class="collection-content">
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/autumn-collection.jpg" alt="<?php _e('Autumn Picks', 'goodquality'); ?>">
                    </div>
                    <div class="collection-info">
                        <h2><?php _e('Autumn Picks', 'goodquality'); ?></h2>
                        <p><?php _e('Embrace the season with our handpicked autumn collection featuring warm colors and cozy styles.', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/autumn-picks/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Autumn Collection', 'goodquality'); ?>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bestsellers Collection -->
            <div class="collection-feature" id="bestsellers">
                <div class="collection-content">
                    <div class="collection-info">
                        <h2><?php _e('Bestsellers', 'goodquality'); ?></h2>
                        <p><?php _e('Our most popular items loved by customers worldwide. These bestsellers are flying off the shelves!', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/bestsellers/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Bestsellers', 'goodquality'); ?>
                        </a>
                    </div>
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/bestsellers-collection.jpg" alt="<?php _e('Bestsellers', 'goodquality'); ?>">
                    </div>
                </div>
            </div>

            <!-- Summer Vibes Collection -->
            <div class="collection-feature" id="summer-vibes">
                <div class="collection-content">
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/summer-collection.jpg" alt="<?php _e('Summer Vibes', 'goodquality'); ?>">
                    </div>
                    <div class="collection-info">
                        <h2><?php _e('Summer Vibes', 'goodquality'); ?></h2>
                        <p><?php _e('Light, breezy, and perfect for sunny days. Our summer collection brings the vacation vibes to your wardrobe.', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/summer-vibes/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Summer Collection', 'goodquality'); ?>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Luxury Essentials Collection -->
            <div class="collection-feature" id="luxury-essentials">
                <div class="collection-content">
                    <div class="collection-info">
                        <h2><?php _e('Luxury Essentials', 'goodquality'); ?></h2>
                        <p><?php _e('Indulge in our premium luxury collection featuring the finest materials and exquisite craftsmanship.', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/luxury-essentials/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Luxury Collection', 'goodquality'); ?>
                        </a>
                    </div>
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/luxury-collection.jpg" alt="<?php _e('Luxury Essentials', 'goodquality'); ?>">
                    </div>
                </div>
            </div>

            <!-- Eco-Friendly Collection -->
            <div class="collection-feature" id="eco-friendly">
                <div class="collection-content">
                    <div class="collection-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/eco-collection.jpg" alt="<?php _e('Eco-Friendly', 'goodquality'); ?>">
                    </div>
                    <div class="collection-info">
                        <h2><?php _e('Eco-Friendly', 'goodquality'); ?></h2>
                        <p><?php _e('Sustainable fashion that doesn\'t compromise on style. Shop our eco-conscious collection for a better tomorrow.', 'goodquality'); ?></p>
                        <a href="<?php echo site_url('/collection/eco-friendly/'); ?>" class="btn btn-primary">
                            <?php _e('Shop Eco Collection', 'goodquality'); ?>
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <!-- Featured Products from Collections -->
        <?php if (function_exists('wc_get_products')) : ?>
            <section class="collection-products">
                <h2><?php _e('Featured from Our Collections', 'goodquality'); ?></h2>
                <div class="products-grid">
                    <?php
                    $featured_products = wc_get_products(array(
                        'limit' => 8,
                        'featured' => true,
                        'status' => 'publish',
                    ));
                    
                    foreach ($featured_products as $product) :
                        wc_get_template_part('content', 'product');
                    endforeach;
                    ?>
                </div>
            </section>
        <?php endif; ?>

    </div>
</main>

<style>
/* Collections Page Styles */
.collections-page {
    padding: 2rem 0;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.page-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1rem;
}

.page-description {
    font-size: 1.125rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

.collections-showcase {
    margin-bottom: 4rem;
}

.collection-feature {
    margin-bottom: 4rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.collection-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 400px;
}

.collection-info {
    padding: 3rem;
}

.collection-info h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1rem;
}

.collection-info p {
    font-size: 1.125rem;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.collection-image {
    height: 400px;
    overflow: hidden;
}

.collection-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.collection-feature:hover .collection-image img {
    transform: scale(1.05);
}

/* Alternate layout for even collections */
.collection-feature:nth-child(even) .collection-content {
    direction: rtl;
}

.collection-feature:nth-child(even) .collection-info {
    direction: ltr;
}

/* Collection Products Section */
.collection-products {
    margin-top: 4rem;
}

.collection-products h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 2rem;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .collection-content {
        grid-template-columns: 1fr;
    }
    
    .collection-feature:nth-child(even) .collection-content {
        direction: ltr;
    }
    
    .collection-info {
        padding: 2rem;
        order: 2;
    }
    
    .collection-image {
        order: 1;
        height: 250px;
    }
    
    .collection-info h2 {
        font-size: 1.5rem;
    }
    
    .collection-info p {
        font-size: 1rem;
    }
    
    .products-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
}

/* Animation */
.collection-feature {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

.collection-feature:nth-child(1) { animation-delay: 0.1s; }
.collection-feature:nth-child(2) { animation-delay: 0.2s; }
.collection-feature:nth-child(3) { animation-delay: 0.3s; }
.collection-feature:nth-child(4) { animation-delay: 0.4s; }
.collection-feature:nth-child(5) { animation-delay: 0.5s; }
.collection-feature:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<?php get_footer(); ?>

