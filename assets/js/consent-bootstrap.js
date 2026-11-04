(function () {
  'use strict';

  const key = 'jakarta_transit_consent_v3';
  let saved = null;
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || 'null');
    const age = parsed && Date.now() - Date.parse(parsed.timestamp);
    if (parsed && Number.isFinite(age) && age >= 0 && age <= 180 * 24 * 60 * 60 * 1000) {
      saved = parsed;
    }
  } catch { /* Storage can be unavailable. */ }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.vijeronAnalyticsAllowed = saved?.analytics === true;
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });
  if (saved) {
    window.gtag('consent', 'update', {
      ad_storage: saved.personalizedAds ? 'granted' : 'denied',
      ad_user_data: saved.personalizedAds ? 'granted' : 'denied',
      ad_personalization: saved.personalizedAds ? 'granted' : 'denied',
      analytics_storage: saved.analytics ? 'granted' : 'denied'
    });
  }
})();
