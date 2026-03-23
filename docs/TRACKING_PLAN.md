# Tracking Plan

## Google Analytics

- **Status:** Placeholder — not yet configured
- **Implementation:** Add GA4 measurement ID via `NEXT_PUBLIC_GA_ID` environment variable
- **Location:** Script tag in `src/app/layout.tsx` or via `@next/third-parties/google`

## Event Tracking

| Event Name           | Trigger                          | Parameters         |
| -------------------- | -------------------------------- | ------------------ |
| `page_view`          | Page load                        | `page_path`        |
| `section_view`       | Section enters viewport          | `section_name`     |
| `cta_click`          | CTA button clicked               | `cta_label`        |
| `form_submit`        | Contact/interest form submitted  | `form_name`        |
| `document_download`  | PDF or attachment downloaded     | `document_name`    |

## Form Submission Tracking

- Form submissions will fire a `form_submit` event to GA4
- Server-side tracking via API route is optional (not yet implemented)
- Consider integrating with a form backend (Formspree, Basin, etc.) if needed

## Vercel Analytics

- **Status:** Available but not yet enabled
- **To enable:** Install `@vercel/analytics` and add `<Analytics />` to root layout
- **Provides:** Web Vitals, page views, visitor insights (no additional config needed)

## Conversion Goals

| Goal                  | Definition                                     |
| --------------------- | ---------------------------------------------- |
| Proposal viewed       | User loads the page and scrolls past hero      |
| CTA engaged           | User clicks primary call-to-action             |
| Form completed        | User submits the contact/interest form         |
| Full read             | User scrolls to footer section                 |

These goals should be configured as GA4 conversions once analytics is live.
