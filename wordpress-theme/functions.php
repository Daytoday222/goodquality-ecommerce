<?php
/**
 * GoodQuality Theme Functions
 * 
 * @package GoodQuality
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function goodquality_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('customize-selective-refresh-widgets');
    
    // WooCommerce support
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'goodquality'),
        'footer' => __('Footer Menu', 'goodquality'),
        'categories' => __('Categories Menu', 'goodquality'),
    ));
    
    // Add image sizes
    add_image_size('product-thumbnail', 300, 300, true);
    add_image_size('product-large', 600, 600, true);
}
add_action('after_setup_theme', 'goodquality_setup');

/**
 * Enqueue Scripts and Styles
 */
function goodquality_scripts() {
    // Theme stylesheet
    wp_enqueue_style('goodquality-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts
    wp_enqueue_style('goodquality-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Theme JavaScript
    wp_enqueue_script('goodquality-script', get_template_directory_uri() . '/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('goodquality-script', 'goodquality_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('goodquality_nonce'),
        'cart_url' => wc_get_cart_url(),
        'checkout_url' => wc_get_checkout_url(),
    ));
}
add_action('wp_enqueue_scripts', 'goodquality_scripts');

/**
 * Register Widget Areas
 */
function goodquality_widgets_init() {
    register_sidebar(array(
        'name' => __('Shop Sidebar', 'goodquality'),
        'id' => 'shop-sidebar',
        'description' => __('Add widgets here to appear in the shop sidebar.', 'goodquality'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area 1', 'goodquality'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in the first footer column.', 'goodquality'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area 2', 'goodquality'),
        'id' => 'footer-2',
        'description' => __('Add widgets here to appear in the second footer column.', 'goodquality'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area 3', 'goodquality'),
        'id' => 'footer-3',
        'description' => __('Add widgets here to appear in the third footer column.', 'goodquality'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'goodquality_widgets_init');

/**
 * Custom Post Types for Collections
 */
function goodquality_register_collections() {
    register_post_type('collection', array(
        'labels' => array(
            'name' => __('Collections', 'goodquality'),
            'singular_name' => __('Collection', 'goodquality'),
            'add_new' => __('Add New Collection', 'goodquality'),
            'add_new_item' => __('Add New Collection', 'goodquality'),
            'edit_item' => __('Edit Collection', 'goodquality'),
            'new_item' => __('New Collection', 'goodquality'),
            'view_item' => __('View Collection', 'goodquality'),
            'search_items' => __('Search Collections', 'goodquality'),
            'not_found' => __('No collections found', 'goodquality'),
            'not_found_in_trash' => __('No collections found in trash', 'goodquality'),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'collection'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
    ));
}
add_action('init', 'goodquality_register_collections');

/**
 * AJAX Cart Update
 */
function goodquality_update_cart_count() {
    check_ajax_referer('goodquality_nonce', 'nonce');
    
    if (function_exists('WC')) {
        $cart_count = WC()->cart->get_cart_contents_count();
        wp_send_json_success(array('count' => $cart_count));
    }
    
    wp_send_json_error();
}
add_action('wp_ajax_update_cart_count', 'goodquality_update_cart_count');
add_action('wp_ajax_nopriv_update_cart_count', 'goodquality_update_cart_count');

/**
 * Custom Login/Register Functions
 */
function goodquality_login_form() {
    if (is_user_logged_in()) {
        return;
    }
    
    ob_start();
    ?>
    <div class="login-form-container">
        <form id="goodquality-login-form" class="login-form" method="post">
            <h3><?php _e('Login', 'goodquality'); ?></h3>
            
            <div class="form-group">
                <label for="user_login"><?php _e('Username or Email', 'goodquality'); ?></label>
                <input type="text" name="log" id="user_login" required>
            </div>
            
            <div class="form-group">
                <label for="user_pass"><?php _e('Password', 'goodquality'); ?></label>
                <input type="password" name="pwd" id="user_pass" required>
            </div>
            
            <div class="form-group">
                <label>
                    <input type="checkbox" name="rememberme" value="forever">
                    <?php _e('Remember Me', 'goodquality'); ?>
                </label>
            </div>
            
            <button type="submit" class="btn btn-primary"><?php _e('Login', 'goodquality'); ?></button>
            
            <?php wp_nonce_field('goodquality_login', 'login_nonce'); ?>
        </form>
        
        <p><a href="<?php echo wp_lostpassword_url(); ?>"><?php _e('Lost Password?', 'goodquality'); ?></a></p>
        <p><a href="#" id="show-register-form"><?php _e('Create Account', 'goodquality'); ?></a></p>
    </div>
    <?php
    return ob_get_clean();
}

function goodquality_register_form() {
    if (is_user_logged_in()) {
        return;
    }
    
    ob_start();
    ?>
    <div class="register-form-container" style="display: none;">
        <form id="goodquality-register-form" class="register-form" method="post">
            <h3><?php _e('Register', 'goodquality'); ?></h3>
            
            <div class="form-group">
                <label for="reg_username"><?php _e('Username', 'goodquality'); ?></label>
                <input type="text" name="user_login" id="reg_username" required>
            </div>
            
            <div class="form-group">
                <label for="reg_email"><?php _e('Email', 'goodquality'); ?></label>
                <input type="email" name="user_email" id="reg_email" required>
            </div>
            
            <div class="form-group">
                <label for="reg_password"><?php _e('Password', 'goodquality'); ?></label>
                <input type="password" name="user_pass" id="reg_password" required>
            </div>
            
            <button type="submit" class="btn btn-primary"><?php _e('Register', 'goodquality'); ?></button>
            
            <?php wp_nonce_field('goodquality_register', 'register_nonce'); ?>
        </form>
        
        <p><a href="#" id="show-login-form"><?php _e('Already have an account? Login', 'goodquality'); ?></a></p>
    </div>
    <?php
    return ob_get_clean();
}

/**
 * Handle Login AJAX
 */
function goodquality_ajax_login() {
    check_ajax_referer('goodquality_login', 'nonce');
    
    $creds = array(
        'user_login' => sanitize_text_field($_POST['log']),
        'user_password' => $_POST['pwd'],
        'remember' => isset($_POST['rememberme']) ? true : false,
    );
    
    $user = wp_signon($creds, false);
    
    if (is_wp_error($user)) {
        wp_send_json_error(array('message' => $user->get_error_message()));
    } else {
        wp_send_json_success(array(
            'message' => __('Login successful!', 'goodquality'),
            'redirect' => home_url('/my-account/')
        ));
    }
}
add_action('wp_ajax_nopriv_goodquality_login', 'goodquality_ajax_login');

/**
 * Handle Register AJAX
 */
function goodquality_ajax_register() {
    check_ajax_referer('goodquality_register', 'nonce');
    
    $username = sanitize_text_field($_POST['user_login']);
    $email = sanitize_email($_POST['user_email']);
    $password = $_POST['user_pass'];
    
    $user_id = wp_create_user($username, $password, $email);
    
    if (is_wp_error($user_id)) {
        wp_send_json_error(array('message' => $user_id->get_error_message()));
    } else {
        // Auto login after registration
        $creds = array(
            'user_login' => $username,
            'user_password' => $password,
            'remember' => true,
        );
        
        $user = wp_signon($creds, false);
        
        wp_send_json_success(array(
            'message' => __('Registration successful!', 'goodquality'),
            'redirect' => home_url('/my-account/')
        ));
    }
}
add_action('wp_ajax_nopriv_goodquality_register', 'goodquality_ajax_register');

/**
 * Get Product Categories for Dropdown
 */
function goodquality_get_product_categories() {
    if (!function_exists('get_terms')) {
        return array();
    }
    
    $categories = get_terms(array(
        'taxonomy' => 'product_cat',
        'hide_empty' => false,
        'parent' => 0, // Only top-level categories
    ));
    
    return $categories;
}

/**
 * Display Category Dropdown
 */
function goodquality_category_dropdown() {
    $categories = goodquality_get_product_categories();
    
    if (empty($categories)) {
        return;
    }
    
    ob_start();
    ?>
    <div class="category-dropdown">
        <button class="category-dropdown-toggle" type="button">
            <?php _e('Categories', 'goodquality'); ?>
            <span class="dropdown-arrow">▼</span>
        </button>
        <ul class="category-dropdown-menu">
            <?php foreach ($categories as $category) : ?>
                <li>
                    <a href="<?php echo get_term_link($category); ?>">
                        <?php echo esc_html($category->name); ?>
                        <span class="category-count">(<?php echo $category->count; ?>)</span>
                    </a>
                    <?php
                    // Get subcategories
                    $subcategories = get_terms(array(
                        'taxonomy' => 'product_cat',
                        'hide_empty' => false,
                        'parent' => $category->term_id,
                    ));
                    
                    if (!empty($subcategories)) :
                    ?>
                        <ul class="subcategory-menu">
                            <?php foreach ($subcategories as $subcategory) : ?>
                                <li>
                                    <a href="<?php echo get_term_link($subcategory); ?>">
                                        <?php echo esc_html($subcategory->name); ?>
                                        <span class="category-count">(<?php echo $subcategory->count; ?>)</span>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <?php
    return ob_get_clean();
}

/**
 * Get Collections for Homepage
 */
function goodquality_get_collections() {
    $collections = get_posts(array(
        'post_type' => 'collection',
        'posts_per_page' => 6,
        'post_status' => 'publish',
    ));
    
    return $collections;
}

/**
 * Display Collections Tabs
 */
function goodquality_collections_tabs() {
    $collections = goodquality_get_collections();
    
    if (empty($collections)) {
        return;
    }
    
    ob_start();
    ?>
    <div class="collections-tabs">
        <h2><?php _e('Shop by Collection', 'goodquality'); ?></h2>
        <div class="collections-grid">
            <?php foreach ($collections as $collection) : ?>
                <div class="collection-item">
                    <a href="<?php echo site_url('/collection/' . $collection->post_name); ?>">
                        <?php if (has_post_thumbnail($collection->ID)) : ?>
                            <?php echo get_the_post_thumbnail($collection->ID, 'medium', array('class' => 'collection-image')); ?>
                        <?php endif; ?>
                        <h3><?php echo esc_html($collection->post_title); ?></h3>
                        <p><?php echo esc_html(get_the_excerpt($collection)); ?></p>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

/**
 * Display Promotional Tabs
 */
function goodquality_promotional_tabs() {
    ob_start();
    ?>
    <div class="promotional-tabs">
        <div class="promo-tabs-nav">
            <button class="promo-tab active" data-tab="deals"><?php _e('Deals of the Week', 'goodquality'); ?></button>
            <button class="promo-tab" data-tab="limited"><?php _e('Limited Time Offers', 'goodquality'); ?></button>
            <button class="promo-tab" data-tab="bundles"><?php _e('Bundle Discounts', 'goodquality'); ?></button>
        </div>
        
        <div class="promo-tab-content active" id="deals-content">
            <h3><?php _e('Weekly Deals', 'goodquality'); ?></h3>
            <p><?php _e('Save up to 50% on selected items this week only!', 'goodquality'); ?></p>
            <a href="<?php echo site_url('/deals-of-the-week/'); ?>" class="btn btn-primary"><?php _e('Shop Deals', 'goodquality'); ?></a>
        </div>
        
        <div class="promo-tab-content" id="limited-content">
            <h3><?php _e('Limited Time Offers', 'goodquality'); ?></h3>
            <p><?php _e('Exclusive offers available for a limited time. Don\'t miss out!', 'goodquality'); ?></p>
            <a href="<?php echo site_url('/limited-offers/'); ?>" class="btn btn-primary"><?php _e('Shop Now', 'goodquality'); ?></a>
        </div>
        
        <div class="promo-tab-content" id="bundles-content">
            <h3><?php _e('Bundle Discounts', 'goodquality'); ?></h3>
            <p><?php _e('Buy more, save more with our special bundle offers!', 'goodquality'); ?></p>
            <a href="<?php echo site_url('/bundle-deals/'); ?>" class="btn btn-primary"><?php _e('View Bundles', 'goodquality'); ?></a>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

/**
 * Custom Cart Icon with Count
 */
function goodquality_cart_icon() {
    if (!function_exists('WC')) {
        return;
    }
    
    $cart_count = WC()->cart->get_cart_contents_count();
    $cart_url = wc_get_cart_url();
    
    ob_start();
    ?>
    <a href="<?php echo esc_url($cart_url); ?>" class="cart-icon" id="cart-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <?php if ($cart_count > 0) : ?>
            <span class="cart-count" id="cart-count"><?php echo $cart_count; ?></span>
        <?php endif; ?>
    </a>
    <?php
    return ob_get_clean();
}

/**
 * Shortcodes
 */
function goodquality_login_shortcode() {
    return goodquality_login_form() . goodquality_register_form();
}
add_shortcode('goodquality_login', 'goodquality_login_shortcode');

function goodquality_collections_shortcode() {
    return goodquality_collections_tabs();
}
add_shortcode('goodquality_collections', 'goodquality_collections_shortcode');

function goodquality_promos_shortcode() {
    return goodquality_promotional_tabs();
}
add_shortcode('goodquality_promos', 'goodquality_promos_shortcode');

function goodquality_categories_shortcode() {
    return goodquality_category_dropdown();
}
add_shortcode('goodquality_categories', 'goodquality_categories_shortcode');

/**
 * WooCommerce Customizations
 */
// Remove default WooCommerce styles
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

// Custom add to cart button text
function goodquality_custom_add_to_cart_text() {
    return __('Add to Cart', 'goodquality');
}
add_filter('woocommerce_product_add_to_cart_text', 'goodquality_custom_add_to_cart_text');

// Update cart count via AJAX after add to cart
function goodquality_add_to_cart_fragment($fragments) {
    $cart_count = WC()->cart->get_cart_contents_count();
    
    ob_start();
    ?>
    <span class="cart-count" id="cart-count"><?php echo $cart_count > 0 ? $cart_count : ''; ?></span>
    <?php
    $fragments['#cart-count'] = ob_get_clean();
    
    return $fragments;
}
add_filter('woocommerce_add_to_cart_fragments', 'goodquality_add_to_cart_fragment');

/**
 * Security Enhancements
 */
// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable file editing in admin
if (!defined('DISALLOW_FILE_EDIT')) {
    define('DISALLOW_FILE_EDIT', true);
}

// Hide login errors
function goodquality_hide_login_errors() {
    return __('Invalid login credentials.', 'goodquality');
}
add_filter('login_errors', 'goodquality_hide_login_errors');
?>

