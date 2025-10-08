# Analytics Setup Guide

Google Analytics 4 has been configured for the TAQELAH site to track page views and user interactions.

## Getting Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon in bottom left)
4. Under **Property**, click **Data Streams**
5. Click on your web data stream (or create one if you don't have it)
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Configuration

1. Open the file: [`assets/js/analytics.js`](assets/js/analytics.js)
2. Replace the placeholder with your actual Measurement ID:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID
   ```
3. Save the file

## What's Being Tracked

The analytics implementation automatically tracks:

- **Page Views**: Every page visit with title and path
- **Outbound Links**: Clicks on external links
- **Button Clicks**: All button interactions with their labels
- **Page Path**: Which pages users visit most

## Viewing Your Analytics Data

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Reports** → **Engagement** → **Pages and screens** - See which pages get the most visits
   - **Reports** → **Realtime** - See current visitors
   - **Reports** → **Engagement** → **Events** - See button clicks and interactions

## Page View Data

You can see how many people visit each page:
- `/index.html` - Home page
- `/about.html` - About page
- `/events.html` - Events page
- `/community.html` - Community page
- `/contact.html` - Contact page
- `/speakers.html` - Speakers page
- `/sponsors.html` - Sponsors page
- `/jobs.html` - Jobs page
- `/code-of-conduct.html` - Code of Conduct page

## Files Modified

All HTML pages have been updated with the analytics script:
- ✅ index.html
- ✅ about.html
- ✅ events.html
- ✅ community.html
- ✅ contact.html
- ✅ speakers.html
- ✅ sponsors.html
- ✅ jobs.html
- ✅ code-of-conduct.html

## Privacy Considerations

Google Analytics 4 is GDPR-compliant and provides:
- IP anonymization
- Cookie-less tracking options
- User data deletion capabilities
- Consent mode support

Consider adding a cookie consent banner if you operate in regions with strict privacy laws (EU, California, etc.).

## Alternative: Plausible Analytics (Privacy-Focused)

If you prefer a privacy-focused alternative:
1. Sign up at [Plausible.io](https://plausible.io)
2. Add their lightweight script instead
3. No cookie consent banner needed
4. Open source and GDPR compliant by default

## Testing

1. Open your site in a browser
2. Open browser console (F12)
3. Look for: `Google Analytics initialized for: /your-page`
4. Visit different pages and click buttons
5. Check Google Analytics Real-time reports to see your activity

## Support

For issues with Google Analytics setup, refer to:
- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
