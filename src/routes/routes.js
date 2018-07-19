// core components/views
import Calendar from "../views/Calendar";
import Dashboard from "../views/Dashboard";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const siteRoutes = [    
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    // icon: Person,
    component: Dashboard
  },
  {
    path: "/calendar",
    sidebarName: "Calendar",
    navbarName: "Calendar",
    // icon: ContentPaste,
    component: Calendar
  },
//   {
//     path: "/typography",
//     sidebarName: "Typography",
//     navbarName: "Typography",
//     icon: LibraryBooks,
//     component: Typography
//   },
//   {
//     path: "/icons",
//     sidebarName: "Icons",
//     navbarName: "Icons",
//     icon: BubbleChart,
//     component: Icons
//   },
//   {
//     path: "/maps",
//     sidebarName: "Maps",
//     navbarName: "Map",
//     icon: LocationOn,
//     component: Maps
//   },
//   {
//     path: "/notifications",
//     sidebarName: "Notifications",
//     navbarName: "Notifications",
//     icon: Notifications,
//     component: NotificationsPage
//   },
//   {
//     path: "/upgrade-to-pro",
//     sidebarName: "Upgrade To PRO",
//     navbarName: "Upgrade To PRO",
//     icon: Unarchive,
//     component: UpgradeToPro
//   },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default siteRoutes;
