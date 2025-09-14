import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // ⬆️ reset scroll to top
  }, [pathname]);  // runs whenever route changes

  return null;
}

