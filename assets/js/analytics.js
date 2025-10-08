/**
 * Google Analytics 4 Configuration
 * Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
 */

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-WFB1TGMGH2';

/**
 * Initialize Google Analytics
 */
function initializeAnalytics() {
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
        console.warn('Google Analytics: Please update GA_MEASUREMENT_ID in analytics.js with your actual measurement ID');
        return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'page_title': document.title,
        'page_path': window.location.pathname
    });

    // Store gtag globally for custom events
    window.gtag = gtag;

    console.log('Google Analytics initialized for:', window.location.pathname);
}

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
function trackEvent(eventName, eventParams = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
        console.log('Event tracked:', eventName, eventParams);
    }
}

/**
 * Track outbound links
 */
function trackOutboundLinks() {
    document.querySelectorAll('a').forEach(link => {
        // Only track external links
        if (link.hostname !== window.location.hostname && link.hostname !== '') {
            link.addEventListener('click', () => {
                trackEvent('click', {
                    event_category: 'outbound',
                    event_label: link.href,
                    transport_type: 'beacon'
                });
            });
        }
    });
}

/**
 * Track button clicks
 */
function trackButtonClicks() {
    document.querySelectorAll('button, .btn, [role="button"]').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            if (buttonText) {
                trackEvent('button_click', {
                    button_text: buttonText,
                    page_path: window.location.pathname
                });
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeAnalytics();
    trackOutboundLinks();
    trackButtonClicks();
});
