// core components/views
import Dashboard from '../views/Dashboard';
import Calendar from '../views/Calendar';
import Documents from '../views/Documents';
import Learning from '../views/Learning';
import Logos from '../views/Logos';
import News from '../views/News';
import People from '../views/People';
import Reminders from '../views/Reminders';
import Suppliers from '../views/Suppliers';


const siteRoutes = [    
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    // icon: Person,
    component: Dashboard
  },
  {
    path: "/logos",
    sidebarName: "Logos",
    navbarName: "Logos",
    // icon: ContentPaste,
    component: Logos
  },
  {
    path: "/documents",
    sidebarName: "Documents",
    navbarName: "Documents",
    // icon: ContentPaste,
    component: Documents
  },
  {
    path: "/calendar",
    sidebarName: "Calendar",
    navbarName: "Calendar",
    // icon: ContentPaste,
    component: Calendar
  },
  {
    path: "/reminders",
    sidebarName: "Reminders",
    navbarName: "Reminders",
    // icon: ContentPaste,
    component: Reminders
  },
  {
    path: "/news",
    sidebarName: "News",
    navbarName: "News",
    // icon: ContentPaste,
    component: News
  },
  {
    path: "/people",
    sidebarName: "People",
    navbarName: "People",
    // icon: ContentPaste,
    component: People
  },
  {
    path: "/suppliers",
    sidebarName: "Suppliers",
    navbarName: "Suppliers",
    // icon: ContentPaste,
    component: Suppliers
  },
  {
    path: "/learning",
    sidebarName: "Learning",
    navbarName: "Learning",
    // icon: ContentPaste,
    component: Learning
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default siteRoutes;
