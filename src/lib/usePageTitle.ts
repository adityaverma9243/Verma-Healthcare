import { useEffect } from 'react';

/** Sets a clear, page-specific <title> for SEO and browser tabs. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
