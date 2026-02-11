<?php
/**
 * The main template file
 *
 * @package GoodQuality
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container">
        
        <?php if (is_home() || is_front_page()) : ?>
            
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-content">
                    <h1><?php _e('Premium Fashion & Accessories', 'goodquality'); ?></h1>
                    <p><?php _e('Discover the latest trends in clothing, shoes, watches, and jewelry', 'goodquality'); ?></p>
                    <a href="<?php echo get_permalink(wc_get_page_id('shop')); ?>" class="btn btn-primary">
                        <?php _e('Shop Now', 'goodquality'); ?>
                    </a>
                </div>
            </section>

            <!-- Collections Section -->
            <section class="collections-section">
                <?php echo goodquality_collections_tabs(); ?>
            </section>

            <!-- Promotional Tabs -->
            <section class="promotional-section">
                <?php echo goodquality_promotional_tabs(); ?>
            </section>

            <!-- Featured Products -->
            <?php if (function_exists('woocommerce_output_featured_products')) : ?>
                <section class="featured-products">
                    <h2><?php _e('Featured Products', 'goodquality'); ?></h2>
                    <?php echo do_shortcode('[featured_products limit="8" columns="4"]'); ?>
                </section>
            <?php endif; ?>

            <!-- Recent Products -->
            <?php if (function_exists('wc_get_products')) : ?>
                <section class="recent-products">
                    <h2><?php _e('New Arrivals', 'goodquality'); ?></h2>
                    <?php echo do_shortcode('[recent_products limit="8" columns="4"]'); ?>
                </section>
            <?php endif; ?>

        <?php else : ?>
            
            <!-- Standard Page/Post Content -->
            <?php if (have_posts()) : ?>
                
                <?php while (have_posts()) : the_post(); ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        
                        <header class="entry-header">
                            <?php if (is_singular()) : ?>
                                <h1 class="entry-title"><?php the_title(); ?></h1>
                            <?php else : ?>
                                <h2 class="entry-title">
                                    <a href="<?php the_permalink(); ?>" rel="bookmark">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>
                            <?php endif; ?>
                        </header>

                        <?php if (has_post_thumbnail() && is_singular()) : ?>
                            <div class="entry-thumbnail">
                                <?php the_post_thumbnail('large'); ?>
                            </div>
                        <?php endif; ?>

                        <div class="entry-content">
                            <?php
                            if (is_singular()) {
                                the_content();
                            } else {
                                the_excerpt();
                            }
                            ?>
                        </div>

                        <?php if (!is_singular()) : ?>
                            <footer class="entry-footer">
                                <a href="<?php the_permalink(); ?>" class="read-more">
                                    <?php _e('Read More', 'goodquality'); ?>
                                </a>
                            </footer>
                        <?php endif; ?>
                        
                    </article>
                    
                <?php endwhile; ?>
                
                <!-- Pagination -->
                <div class="pagination">
                    <?php
                    the_posts_pagination(array(
                        'prev_text' => __('Previous', 'goodquality'),
                        'next_text' => __('Next', 'goodquality'),
                    ));
                    ?>
                </div>
                
            <?php else : ?>
                
                <section class="no-results">
                    <header class="page-header">
                        <h1 class="page-title"><?php _e('Nothing Found', 'goodquality'); ?></h1>
                    </header>

                    <div class="page-content">
                        <?php if (is_home() && current_user_can('publish_posts')) : ?>
                            <p>
                                <?php
                                printf(
                                    wp_kses(
                                        __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'goodquality'),
                                        array(
                                            'a' => array(
                                                'href' => array(),
                                            ),
                                        )
                                    ),
                                    esc_url(admin_url('post-new.php'))
                                );
                                ?>
                            </p>
                        <?php elseif (is_search()) : ?>
                            <p><?php _e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'goodquality'); ?></p>
                            <?php get_search_form(); ?>
                        <?php else : ?>
                            <p><?php _e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'goodquality'); ?></p>
                            <?php get_search_form(); ?>
                        <?php endif; ?>
                    </div>
                </section>
                
            <?php endif; ?>
            
        <?php endif; ?>
        
    </div>
</main>

<?php get_footer(); ?>

