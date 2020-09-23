import { Home, Shop, Cart, UserSettings, Checkout, About, Contacts } from "../screens";

// showInMenu:    To show the Item in Sidebar
// showInFooter:  To show the Item in Footer
// Title:         The title shown in Sidebar
// Main:          The component to render for the path
// Path:          Path for the component when it will render
// Exact:         Define when router should match the exact path

const routes = [
  {
    path: "/",
    eventKey: "home",
    exact: true,
    showInFooter: false,
    showInMenu: false,
    title: '',
    main: Home
  },
  // Home
  {
    path: "/home",
    eventKey: "home",
    exact: false,
    showInFooter: true,
    showInMenu: true,
    title: 'Home',
    main: Home
  },
  // Shop
  {
    path: "/shop",
    eventKey: "shop",
    showInFooter: true,
    showInMenu: true,
    title: 'Shop',
    main: Shop
  },
  // Cart
  {
    path: "/cart",
    eventKey: "cart",
    showInFooter: false,
    showInMenu: false,
    title: 'Cart',
    main: Cart
  },
  // Checkout
  {
    path: "/checkout",
    eventKey: "checkout",
    showInFooter: false,
    showInMenu: false,
    title: 'Checkout',
    main: Checkout
  },
  // User
  {
    path: "/user/settings",
    eventKey: "user_settings",
    exact: true,
    showInFooter: false,
    showInMenu: false,
    title: 'Settings',
    main: UserSettings
  },
  // About
  {
    path: "/about",
    eventKey: "about",
    showInFooter: true,
    showInMenu: true,
    title: 'About',
    main: About
  },
  // Contacts
  {
    path: "/contacts",
    eventKey: "contacts",
    showInFooter: true,
    showInMenu: true,
    title: 'Contacts',
    main: Contacts
  }
];

export default routes;
