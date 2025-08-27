// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-FB369BWWRT'; // Your GA4 Measurement ID

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (method: string) => {
  trackEvent('contact_form_submit', 'engagement', method);
};

// Track service page visits
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'navigation', serviceName);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent('external_link_click', 'outbound', url);
};

// Track phone number clicks
export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'header_phone');
};

// Track language changes
export const trackLanguageChange = (newLanguage: string) => {
  trackEvent('language_change', 'user_preference', newLanguage);
};