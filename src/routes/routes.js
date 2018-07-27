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

import DashboardIco from '../dashboard.svg';
import BrandIco from '../brand.svg';
import CalendarIco from '../calendar.svg';
import DocumentsIco from '../document.svg';
import RemindersIco from '../reminders.svg';
import NewsIco from '../news.svg';
import PeopleIco from '../people.svg';
import LearningIco from '../learning.svg';
import SuppliersIco from '../suppliers.svg';


const siteRoutes = [    
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: DashboardIco,
    component: Dashboard
  },
  {
    path: "/logos",
    sidebarName: "Logos",
    navbarName: "Logos",
    icon: BrandIco,
    component: Logos
  },
  {
    path: "/documents",
    sidebarName: "Documents",
    navbarName: "Documents",
    icon: DocumentsIco,
    component: Documents
  },
  {
    path: "/calendar",
    sidebarName: "Calendar",
    navbarName: "Calendar",
    icon: CalendarIco,
    component: Calendar
  },
  {
    path: "/reminders",
    sidebarName: "Reminders",
    navbarName: "Reminders",
    icon: RemindersIco,
    component: Reminders
  },
  {
    path: "/news",
    sidebarName: "News",
    navbarName: "News",
    icon: NewsIco,
    component: News
  },
  {
    path: "/people",
    sidebarName: "People",
    navbarName: "People",
    icon: PeopleIco,
    component: People
  },
  {
    path: "/suppliers",
    sidebarName: "Suppliers",
    navbarName: "Suppliers",
    icon: SuppliersIco,
    component: Suppliers
  },
  {
    path: "/learning",
    sidebarName: "Learning",
    navbarName: "Learning",
    icon: LearningIco,
    component: Learning
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default siteRoutes;
