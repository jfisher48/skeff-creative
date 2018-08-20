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

import dashboardButton from "../styles/dashboardButton";
import logosButton from "../styles/logosButton";
import documentsButton from "../styles/documentsButton";
import calendarButton from "../styles/calendarButton";
import remindersButton from "../styles/remindersButton";
import newsButton from "../styles/newsButton";
import peopleButton from "../styles/peopleButton";
import suppliersButton from "../styles/suppliersButton";
import learningButton from "../styles/learningButton";

import DashboardIco from "../icons/dashboard.svg";
import BrandIco from "../icons/brand.svg";
import CalendarIco from "../icons/calendar.svg";
import DocumentsIco from "../icons/document.svg";
import RemindersIco from "../icons/reminders.svg";
import NewsIco from "../icons/news.svg";
import PeopleIco from "../icons/people.svg";
import LearningIco from "../icons/learning.svg";
import SuppliersIco from "../icons/suppliers.svg";

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
