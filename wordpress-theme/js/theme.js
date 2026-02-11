/**
 * GoodQuality Theme JavaScript
 * 
 * @package GoodQuality
 * @version 1.0.0
 */

(function($) {
    'use strict';

    // Theme initialization
    var GoodQuality = {
        
        init: function() {
            this.mobileMenu();
            this.authModal();
            this.categoryDropdown();
            this.languageSelector();
            this.promotionalTabs();
            this.searchToggle();
            this.cartUpdates();
            this.smoothScroll();
            this.lazyLoading();
            this.accessibility();
        },

        // Mobile Menu Functionality
        mobileMenu: function() {
            $('.mobile-menu-toggle').on('click', function() {
                $('.mobile-menu-overlay').addClass('active');
                $('body').addClass('menu-open');
                $(this).attr('aria-expanded', 'true');
            });
            
            $('.mobile-menu-close').on('click', function() {
                $('.mobile-menu-overlay').removeClass('active');
                $('body').removeClass('menu-open');
                $('.mobile-menu-toggle').attr('aria-expanded', 'false');
            });

            $('.mobile-menu-overlay').on('click', function(e) {
                if (e.target === this) {
                    $(this).removeClass('active');
                    $('body').removeClass('menu-open');
                    $('.mobile-menu-toggle').attr('aria-expanded', 'false');
                }
            });

            // Keyboard navigation
            $(document).on('keydown', function(e) {
                if (e.key === 'Escape' && $('.mobile-menu-overlay').hasClass('active')) {
                    $('.mobile-menu-overlay').removeClass('active');
                    $('body').removeClass('menu-open');
                    $('.mobile-menu-toggle').attr('aria-expanded', 'false').focus();
                }
            });
        },

        // Authentication Modal
        authModal: function() {
            $('.login-toggle, .mobile-login-toggle').on('click', function() {
                $('.auth-modal-overlay').addClass('active');
                $('body').addClass('modal-open');
                $('#user_login').focus();
            });
            
            $('.auth-modal-close').on('click', function() {
                $('.auth-modal-overlay').removeClass('active');
                $('body').removeClass('modal-open');
            });

            $('.auth-modal-overlay').on('click', function(e) {
                if (e.target === this) {
                    $(this).removeClass('active');
                    $('body').removeClass('modal-open');
                }
            });

            // Switch between login and register forms
            $('#show-register-form').on('click', function(e) {
                e.preventDefault();
                $('.login-form-container').hide();
                $('.register-form-container').show();
                $('#reg_username').focus();
            });
            
            $('#show-login-form').on('click', function(e) {
                e.preventDefault();
                $('.register-form-container').hide();
                $('.login-form-container').show();
                $('#user_login').focus();
            });

            // AJAX Login
            $('#goodquality-login-form').on('submit', function(e) {
                e.preventDefault();
                
                var $form = $(this);
                var $button = $form.find('button[type="submit"]');
                var originalText = $button.text();
                
                $button.text('Logging in...').prop('disabled', true);
                
                var formData = $form.serialize();
                formData += '&action=goodquality_login';
                
                $.ajax({
                    url: goodquality_ajax.ajax_url,
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                        if (response.success) {
                            $button.text('Success!');
                            setTimeout(function() {
                                window.location.href = response.data.redirect;
                            }, 1000);
                        } else {
                            alert(response.data.message);
                            $button.text(originalText).prop('disabled', false);
                        }
                    },
                    error: function() {
                        alert('Login failed. Please try again.');
                        $button.text(originalText).prop('disabled', false);
                    }
                });
            });

            // AJAX Register
            $('#goodquality-register-form').on('submit', function(e) {
                e.preventDefault();
                
                var $form = $(this);
                var $button = $form.find('button[type="submit"]');
                var originalText = $button.text();
                
                $button.text('Creating account...').prop('disabled', true);
                
                var formData = $form.serialize();
                formData += '&action=goodquality_register';
                
                $.ajax({
                    url: goodquality_ajax.ajax_url,
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                        if (response.success) {
                            $button.text('Success!');
                            setTimeout(function() {
                                window.location.href = response.data.redirect;
                            }, 1000);
                        } else {
                            alert(response.data.message);
                            $button.text(originalText).prop('disabled', false);
                        }
                    },
                    error: function() {
                        alert('Registration failed. Please try again.');
                        $button.text(originalText).prop('disabled', false);
                    }
                });
            });
        },

        // Category Dropdown
        categoryDropdown: function() {
            $('.category-dropdown-toggle').on('click', function(e) {
                e.preventDefault();
                var $dropdown = $(this).parent();
                var isActive = $dropdown.hasClass('active');
                
                // Close all dropdowns
                $('.category-dropdown').removeClass('active');
                
                // Toggle current dropdown
                if (!isActive) {
                    $dropdown.addClass('active');
                    $(this).attr('aria-expanded', 'true');
                } else {
                    $(this).attr('aria-expanded', 'false');
                }
            });

            // Keyboard navigation for dropdown
            $('.category-dropdown-menu a').on('keydown', function(e) {
                if (e.key === 'Escape') {
                    $('.category-dropdown').removeClass('active');
                    $('.category-dropdown-toggle').attr('aria-expanded', 'false').focus();
                }
            });
        },

        // Language Selector
        languageSelector: function() {
            $('.language-toggle').on('click', function(e) {
                e.preventDefault();
                var $selector = $(this).parent();
                var isActive = $selector.hasClass('active');
                
                // Close all selectors
                $('.language-selector').removeClass('active');
                
                // Toggle current selector
                if (!isActive) {
                    $selector.addClass('active');
                    $(this).attr('aria-expanded', 'true');
                } else {
                    $(this).attr('aria-expanded', 'false');
                }
            });
        },

        // Promotional Tabs
        promotionalTabs: function() {
            $('.promo-tab').on('click', function(e) {
                e.preventDefault();
                var tab = $(this).data('tab');
                
                // Update tab states
                $('.promo-tab').removeClass('active').attr('aria-selected', 'false');
                $(this).addClass('active').attr('aria-selected', 'true');
                
                // Update content
                $('.promo-tab-content').removeClass('active').attr('aria-hidden', 'true');
                $('#' + tab + '-content').addClass('active').attr('aria-hidden', 'false');
            });

            // Keyboard navigation for tabs
            $('.promo-tab').on('keydown', function(e) {
                var $tabs = $('.promo-tab');
                var currentIndex = $tabs.index(this);
                var nextIndex;

                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        nextIndex = currentIndex > 0 ? currentIndex - 1 : $tabs.length - 1;
                        $tabs.eq(nextIndex).focus().click();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        nextIndex = currentIndex < $tabs.length - 1 ? currentIndex + 1 : 0;
                        $tabs.eq(nextIndex).focus().click();
                        break;
                    case 'Home':
                        e.preventDefault();
                        $tabs.first().focus().click();
                        break;
                    case 'End':
                        e.preventDefault();
                        $tabs.last().focus().click();
                        break;
                }
            });
        },

        // Search Toggle
        searchToggle: function() {
            $('.search-toggle').on('click', function() {
                $('.header-search').toggleClass('active');
                $('.header-search input').focus();
            });
        },

        // Cart Updates
        cartUpdates: function() {
            // Update cart count after AJAX add to cart
            $(document.body).on('added_to_cart', function(event, fragments, cart_hash, $button) {
                // Update cart count
                $.ajax({
                    url: goodquality_ajax.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'update_cart_count',
                        nonce: goodquality_ajax.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            var count = response.data.count;
                            var $cartCount = $('#cart-count');
                            
                            if (count > 0) {
                                $cartCount.text(count).show();
                                // Add animation
                                $cartCount.addClass('bounce');
                                setTimeout(function() {
                                    $cartCount.removeClass('bounce');
                                }, 600);
                            } else {
                                $cartCount.hide();
                            }
                        }
                    }
                });

                // Show success message
                var productName = $button.closest('.product').find('.product-title, h2, h3').first().text();
                GoodQuality.showNotification('Added "' + productName + '" to cart!', 'success');
            });

            // Cart icon click tracking
            $('#cart-icon').on('click', function() {
                // Track cart view event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'view_cart', {
                        currency: 'GBP'
                    });
                }
            });
        },

        // Smooth Scroll
        smoothScroll: function() {
            $('a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 100
                        }, 1000);
                        return false;
                    }
                }
            });
        },

        // Lazy Loading
        lazyLoading: function() {
            if ('IntersectionObserver' in window) {
                var imageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                $('.lazy').each(function() {
                    imageObserver.observe(this);
                });
            }
        },

        // Accessibility Enhancements
        accessibility: function() {
            // Skip link functionality
            $('.skip-link').on('click', function(e) {
                var target = $($(this).attr('href'));
                if (target.length) {
                    target.attr('tabindex', '-1').focus();
                }
            });

            // Close dropdowns with Escape key
            $(document).on('keydown', function(e) {
                if (e.key === 'Escape') {
                    $('.category-dropdown, .language-selector').removeClass('active');
                    $('.category-dropdown-toggle, .language-toggle').attr('aria-expanded', 'false');
                }
            });

            // Close dropdowns when clicking outside
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.category-dropdown, .language-selector').length) {
                    $('.category-dropdown, .language-selector').removeClass('active');
                    $('.category-dropdown-toggle, .language-toggle').attr('aria-expanded', 'false');
                }
            });

            // Focus management for modals
            $('.auth-modal-overlay').on('shown', function() {
                $(this).find('input:visible:first').focus();
            });
        },

        // Show Notification
        showNotification: function(message, type) {
            type = type || 'info';
            
            var $notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
            
            $('body').append($notification);
            
            setTimeout(function() {
                $notification.addClass('show');
            }, 100);
            
            setTimeout(function() {
                $notification.removeClass('show');
                setTimeout(function() {
                    $notification.remove();
                }, 300);
            }, 3000);
        },

        // Utility Functions
        debounce: function(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    };

    // Initialize theme when document is ready
    $(document).ready(function() {
        GoodQuality.init();
    });

    // Expose GoodQuality object globally
    window.GoodQuality = GoodQuality;

})(jQuery);

