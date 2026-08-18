import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Returns a function that scrolls to a homepage section.
 * If the user is on another page (About / Privacy / Terms), it first
 * navigates back home, then smooth-scrolls to the section.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
