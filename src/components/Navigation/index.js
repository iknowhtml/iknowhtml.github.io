import MobileNavigation from './MobileNavigation';
import WebNavigation from './WebNavigation';

const Navigation = /Mobi|Android/i.test(navigator.userAgent)
  ? MobileNavigation
  : WebNavigation;

export default Navigation;
