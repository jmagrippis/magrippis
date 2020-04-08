export const GA_TRACKING_ID = 'UA-163073041-1'

const isProduction = process.env.NODE_ENV === 'production'

type EventPayload = {
  event_category?: string
  event_label?: string
  value?: number
}

declare global {
  function gtag(
    key: 'config',
    trackingId: string,
    config: { page_path: string }
  ): void
  function gtag(key: 'event', action: string, payload: EventPayload): void

  interface Window {
    gtag?: typeof gtag
  }
}

export const trackPageView = (url: string) => {
  if (!isProduction || !window.gtag) return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const trackEvent = (
  action: string,
  { event_category, event_label, value }: EventPayload
) => {
  if (!isProduction || !window.gtag) return

  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  })
}
