// core components/views
import Dashboard from "../views/Dashboard";
import Calendar from "../views/Calendar";
import Documents from "../views/Documents";
import Learning from "../views/Learning";
import Logos from "../views/Logos";
import News from "../views/News";
import People from "../views/People";
import Reminders from "../views/Reminders";
import Suppliers from "../views/Suppliers";

import dashboardButton from "../themes/dashboardButton";
import logosButton from "../themes/logosButton";
import documentsButton from "../themes/documentsButton";
import calendarButton from "../themes/calendarButton";
import remindersButton from "../themes/remindersButton";
import newsButton from "../themes/newsButton";
import peopleButton from "../themes/peopleButton";
import suppliersButton from "../themes/suppliersButton";
import learningButton from "../themes/learningButton";

import DashboardIco from "../dashboard.svg";
import BrandIco from "../brand.svg";
import CalendarIco from "../calendar.svg";
import DocumentsIco from "../document.svg";
import RemindersIco from "../reminders.svg";
import NewsIco from "../news.svg";
import PeopleIco from "../people.svg";
import LearningIco from "../learning.svg";
import SuppliersIco from "../suppliers.svg";

const siteRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: DashboardIco,
    component: Dashboard,
    btn: dashboardButton
  },
  {
    path: "/logos",
    sidebarName: "Logos",
    navbarName: "Logos",
    icon: BrandIco,
    component: Logos,
    btn: logosButton
  },
  {
    path: "/documents",
    sidebarName: "Documents",
    navbarName: "Documents",
    icon: DocumentsIco,
    component: Documents,
    btn: documentsButton
  },
  {
    path: "/calendar",
    sidebarName: "Calendar",
    navbarName: "Calendar",
    icon: CalendarIco,
    component: Calendar,
    btn: calendarButton
  },
  {
    path: "/reminders",
    sidebarName: "Reminders",
    navbarName: "Reminders",
    icon: RemindersIco,
    component: Reminders,
    btn: remindersButton
  },
  {
    path: "/news",
    sidebarName: "News",
    navbarName: "News",
    icon: NewsIco,
    component: News,
    btn: newsButton
  },
  {
    path: "/people",
    sidebarName: "People",
    navbarName: "People",
    icon: PeopleIco,
    component: People,
    btn: peopleButton
  },
  {
    path: "/suppliers",
    sidebarName: "Suppliers",
    navbarName: "Suppliers",
    icon: SuppliersIco,
    component: Suppliers,
    btn: suppliersButton
  },
  {
    path: "/learning",
    sidebarName: "Learning",
    navbarName: "Learning",
    icon: LearningIco,
    component: Learning,
    btn: learningButton
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default siteRoutes;
