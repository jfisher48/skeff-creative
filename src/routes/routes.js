// core components/views
import Dashboard from "../views/Dashboard/Dashboard";
//import Calendar from "../views/Calendar/Calendar";
//import Documents from "../views/Documents/Documents";
//import Learning from "../views/Learning/Learning";
import Logos from "../views/Logos/Logos";
import News from "../views/News/News";
import People from "../views/People/People";
//import Reminders from "../views/Reminders/Reminders";
//import Suppliers from "../views/Suppliers/Suppliers";
import WorkOrders from "../views/WorkOrders/WorkOrders.js";
import Admin from "../views/Admin/Admin.js";

import dashboardButton from "../styles/dashboardButton";
import logosButton from "../styles/logosButton";
import workordersButton from "../styles/workordersButton";
//import documentsButton from "../styles/documentsButton";
//import calendarButton from "../styles/calendarButton";
//import remindersButton from "../styles/remindersButton";
import newsButton from "../styles/newsButton";
import peopleButton from "../styles/peopleButton";
//import suppliersButton from "../styles/suppliersButton";
import learningButton from "../styles/learningButton";

const siteRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    component: Dashboard,
    btn: dashboardButton,
    svgbox: "0 0 39.37 39.37",
    svgpath:
      "M26.82,17.6c-.44-.4-8.71,6.69-8.71,6.69h0a2,2,0,0,0,3,2.7h0S27.25,18,26.82,17.6Z M19.7,5.92A18.53,18.53,0,0,0,1.19,24.43a18.15,18.15,0,0,0,2,8.39,1.14,1.14,0,0,0,1,.63H35.15a1.23,1.23,0,0,0,1-.63A18.53,18.53,0,0,0,19.7,5.92ZM34.42,31.14H5a15.28,15.28,0,0,1-1.39-5.55H5.81a1.16,1.16,0,0,0,0-2.32H3.56a16.34,16.34,0,0,1,1.56-5.93l2,1.13a1,1,0,0,0,.57.18,1.17,1.17,0,0,0,1.17-1.16,1.12,1.12,0,0,0-.59-1l-2-1.13A16.15,16.15,0,0,1,10.62,11l1.12,2a1.19,1.19,0,0,0,1,.58,1.3,1.3,0,0,0,.58-.14,1.18,1.18,0,0,0,.4-1.59l-1.13-2a16.29,16.29,0,0,1,5.93-1.56v2.26a1.16,1.16,0,0,0,2.32,0V8.29a16.24,16.24,0,0,1,5.9,1.56l-1.13,2A1.17,1.17,0,0,0,26,13.41a1.59,1.59,0,0,0,.57.14,1.14,1.14,0,0,0,1-.58l1.13-2a16.11,16.11,0,0,1,4.33,4.34l-2,1.12a1.16,1.16,0,0,0-.44,1.58,1.14,1.14,0,0,0,1.6.42l2-1.13a16.33,16.33,0,0,1,1.59,5.93H33.56a1.16,1.16,0,0,0,0,2.32h2.29A16.18,16.18,0,0,1,34.42,31.14Z"
  },
  {
    path: "/workorders",
    sidebarName: "Work Orders",
    navbarName: "Work Orders",
    component: WorkOrders,
    btn: workordersButton,
    svgbox: "0 0 36.04 36.04",
    svgpath:
      "M26.71,4.12H23.63l2,3H26.8V28.84H9.28V7.15h1.13l2-3H9.37A2.84,2.84,0,0,0,6.52,7V29.07a2.84,2.84,0,0,0,2.83,2.85H26.67a2.85,2.85,0,0,0,2.85-2.83V6.93A2.77,2.77,0,0,0,26.8,4.12Z M23.82,7.15l-2-3L20.64,2.44l0,.05a2.49,2.49,0,0,0-5,0l0-.05L14.44,4.12l-2,3L11.82,8l6.29.05L24.45,8ZM18.07,1.58a.86.86,0,0,1,0,1.72.85.85,0,0,1-.86-.86h0a.86.86,0,0,1,.85-.86Z M19.92,13.08a1.2,1.2,0,0,1-1.18,1.18H12.49a1.19,1.19,0,0,1-1.17-1.18V12.9a1.19,1.19,0,0,1,1.17-1.17h6.25a1.19,1.19,0,0,1,1.18,1.17Z M25,18.11a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,17.93Z M25,23.09a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,22.91Z"
  },
  {
    path: "/logos",
    sidebarName: "Logos",
    navbarName: "Logos",
    component: Logos,
    btn: logosButton,
    svgbox: "0 0 35 34.99",
    svgpath:
      "M17.48 31.43a13.94 13.94 0 1 1 14-13.95 13.94 13.94 0 0 1-14 13.95zM35 17.48c0-.14-.24-.3-.5-.48s-.24-.16-.37-.23a3.66 3.66 0 0 1-1.38-1.38v-.1a13 13 0 0 0-.3-1.51v-.1a3.58 3.58 0 0 1 .77-1.81 2.33 2.33 0 0 0 .2-.34c.17-.2.34-.5.3-.64-.07-.13-.37-.2-.67-.26l-.41-.07a3.54 3.54 0 0 1-1.81-.74l-.07-.07c-.27-.44-.54-.84-.84-1.25v-.07a3.37 3.37 0 0 1 0-1.94l.1-.41c.06-.26.1-.6 0-.7a.39.39 0 0 0-.4-.38 2.42 2.42 0 0 0-.47.07 1.38 1.38 0 0 0-.4.1 7 7 0 0 1-1.11.13 2.18 2.18 0 0 1-.84-.13l-.1-.07c-.4-.3-.84-.57-1.28-.84h-.1a3.41 3.41 0 0 1-.77-1.82 1.87 1.87 0 0 0-.07-.4c0-.27-.1-.57-.24-.64h-.13a1.38 1.38 0 0 0-.61.26 2 2 0 0 1-.33.24 3.41 3.41 0 0 1-1.82.77h-.1a12.6 12.6 0 0 0-1.51-.3h-.07A3.51 3.51 0 0 1 18.26.84L18 .5c-.13-.24-.34-.5-.47-.5h-.1c-.13 0-.3.23-.47.5a2.08 2.08 0 0 0-.24.34 3.51 3.51 0 0 1-1.37 1.41h-.1a13.17 13.17 0 0 0-1.52.3h-.13a3.49 3.49 0 0 1-1.82-.77 2.54 2.54 0 0 0-.34-.23 1.21 1.21 0 0 0-.57-.27h-.07c-.14.07-.2.34-.27.67a2.57 2.57 0 0 1-.07.4 3.22 3.22 0 0 1-.74 1.78h-.06a11.73 11.73 0 0 0-1.24.84h-.07a2.18 2.18 0 0 1-.84.14 4.15 4.15 0 0 1-1.11-.17c-.14 0-.27 0-.4-.07a3.78 3.78 0 0 0-.62.13.39.39 0 0 0-.24.06c-.1.1-.07.4 0 .7a1.8 1.8 0 0 0 .1.4 3.79 3.79 0 0 1 0 1.95l-.07.1c-.3.4-.57.8-.84 1.24v.06a3.3 3.3 0 0 1-1.82.74 1.76 1.76 0 0 1-.4.07c-.27.07-.57.13-.64.27a1.28 1.28 0 0 0 .27.67 2.44 2.44 0 0 1 .23.33 3.33 3.33 0 0 1 .78 1.79v.1a13 13 0 0 0-.3 1.51v.1a3.43 3.43 0 0 1-1.61 1.65A4 4 0 0 0 .5 17c-.23.14-.5.34-.5.48v.06c0 .17.23.34.5.5a2.62 2.62 0 0 0 .34.24 3.47 3.47 0 0 1 1.41 1.38v.1a13 13 0 0 0 .3 1.51v.07a3.41 3.41 0 0 1-.77 1.82 3.43 3.43 0 0 1-.24.33c-.13.24-.3.54-.27.64v.07c.07.14.33.2.67.24l.4.1a3.08 3.08 0 0 1 1.78.74v.1c.27.44.54.88.84 1.28v.11a3.74 3.74 0 0 1 0 2 1.34 1.34 0 0 0-.07.4c-.07.26-.1.6 0 .7a.39.39 0 0 0 .24.06 3.78 3.78 0 0 0 .47-.06l.4-.1a5.81 5.81 0 0 1 1.11-.14 2.22 2.22 0 0 1 .84.14l.1.06c.4.3.81.57 1.25.84h.07a3.58 3.58 0 0 1 .74 1.85 1.87 1.87 0 0 1 .07.4c.06.27.13.57.26.64h.07a1.18 1.18 0 0 0 .6-.3l.34-.23a3.52 3.52 0 0 1 1.78-.74h.06a12.6 12.6 0 0 0 1.51.3h.1A3.53 3.53 0 0 1 16.28 34c.07.1.17.24.23.34s.34.5.47.5h.07c.17 0 .34-.23.5-.5.07-.1.17-.23.24-.34a3.51 3.51 0 0 1 1.37-1.41h.1a13.17 13.17 0 0 0 1.52-.3h.13a3.41 3.41 0 0 1 1.78.77 1.16 1.16 0 0 1 .34.24 2.17 2.17 0 0 0 .6.27h.07c.13-.07.2-.37.23-.67a1.8 1.8 0 0 0 .1-.4 3.37 3.37 0 0 1 .74-1.82l.1-.06c.44-.27.87-.54 1.28-.84H26.27a2.18 2.18 0 0 1 .84-.14 6.88 6.88 0 0 1 1.11.14l.4.1a3.78 3.78 0 0 0 .47.06.5.5 0 0 0 .24-.06.94.94 0 0 0 0-.7l-.1-.4a3.59 3.59 0 0 1 0-1.95l.07-.1c.3-.4.57-.84.84-1.27v-.07a3.29 3.29 0 0 1 1.85-.74l.37-.1c.3 0 .6-.1.67-.24v-.06c0-.17-.1-.4-.3-.68a3.42 3.42 0 0 0-.23-.33 3.65 3.65 0 0 1-.74-1.78v-.06a13 13 0 0 0 .3-1.51v-.07a3.47 3.47 0 0 1 1.41-1.38A1.85 1.85 0 0 1 34.5 18c.23-.14.5-.34.5-.48z M24.17 13.75a1.78 1.78 0 0 1-.53 1.35 1.93 1.93 0 0 1-1.25.5.69.69 0 0 1-.5-.14.92.92 0 0 1-.1-.74 1.8 1.8 0 0 1 .5-1 1.75 1.75 0 0 1 1.25-.54h.16V9.31a.24.24 0 0 1 .24-.24.23.23 0 0 1 .23.24zm-1.88 2.65a1.77 1.77 0 0 1 1.24-.54A1 1 0 0 1 24 16a1 1 0 0 1 .14.74 2 2 0 0 1-.54 1 1.86 1.86 0 0 1-1.24.5.73.73 0 0 1-.5-.13c-.24-.2-.21-1.14.4-1.75zm1.88 3a1.87 1.87 0 0 1-1.78 1.58.71.71 0 0 1-.5-.17c-.23-.2-.2-1.14.4-1.74a1.9 1.9 0 0 1 1.25-.54.71.71 0 0 1 .5.17 1 1 0 0 1 .13.7zm-2.11 6.56h-1.15v-4.51a1.26 1.26 0 0 0 .57-.2 1.9 1.9 0 0 0 .58.2zm-2.69-5.56a1.81 1.81 0 0 1-.54-1 .87.87 0 0 1 .13-.7.71.71 0 0 1 .5-.17 2 2 0 0 1 1.25.54c.6.6.63 1.54.4 1.74a.71.71 0 0 1-.5.17 1.86 1.86 0 0 1-1.24-.54zm1.74-2.25a.69.69 0 0 1-.5.14 1.9 1.9 0 0 1-1.24-.5 2 2 0 0 1-.54-1.05A1 1 0 0 1 19 16a.87.87 0 0 1 .5-.13 1.79 1.79 0 0 1 1.24.54c.61.6.64 1.54.4 1.74zm-2.28-8.71a.23.23 0 0 1 .23-.23.23.23 0 0 1 .24.23v3.8h.1a1.93 1.93 0 0 1 1.31.54 1.86 1.86 0 0 1 .5 1 .92.92 0 0 1-.1.74.68.68 0 0 1-.5.13 1.79 1.79 0 0 1-1.24-.5 1.74 1.74 0 0 1-.54-1.34V9.45zm2.38 1.18V9.44a.23.23 0 0 1 .22-.23.25.25 0 0 1 .27.23v1.15a1.79 1.79 0 0 1 .76 1.41c0 .88-.64 1.51-1 1.51s-.94-.63-.94-1.51a1.8 1.8 0 0 1 .68-1.41zm-5 3.13a1.79 1.79 0 0 1-.54 1.35 1.9 1.9 0 0 1-1.24.5.73.73 0 0 1-.5-.13 1 1 0 0 1-.14-.74 2 2 0 0 1 .54-1 1.75 1.75 0 0 1 1.25-.54h.16V9.31a.24.24 0 0 1 .48 0zm-1.92 2.65a1.75 1.75 0 0 1 1.24-.54.58.58 0 0 1 .61.88 1.72 1.72 0 0 1-1.75 1.54.76.76 0 0 1-.5-.13c-.24-.2-.21-1.14.4-1.75zm1.85 3a1.85 1.85 0 0 1-.5 1 1.9 1.9 0 0 1-1.25.54.71.71 0 0 1-.5-.17c-.23-.2-.2-1.14.4-1.74a1.9 1.9 0 0 1 1.25-.54.71.71 0 0 1 .5.17.82.82 0 0 1 .1.7zm-2.09 6.56h-1.14v-4.51a1.3 1.3 0 0 0 .57-.2 1.94 1.94 0 0 0 .57.2zm-2.72-5.56a2 2 0 0 1-.5-1 .91.91 0 0 1 .13-.7.57.57 0 0 1 .47-.17 2 2 0 0 1 1.28.54 1.57 1.57 0 0 1 .4 1.74.71.71 0 0 1-.5.17 2.11 2.11 0 0 1-1.28-.54zm1.78-2.25a.69.69 0 0 1-.5.14 2.09 2.09 0 0 1-1.28-.5 2.18 2.18 0 0 1-.5-1.05A1 1 0 0 1 11 16a.78.78 0 0 1 .47-.13 1.82 1.82 0 0 1 1.28.54 1.59 1.59 0 0 1 .39 1.74zm-2.29-8.71a.24.24 0 0 1 .48 0v3.8h.1a1.81 1.81 0 0 1 1.81 1.55.92.92 0 0 1-.1.74.7.7 0 0 1-.5.13 2 2 0 0 1-1.28-.5 1.85 1.85 0 0 1-.5-1.34V9.45zm2.39 1.18V9.44a.22.22 0 0 1 .22-.23.25.25 0 0 1 .27.23v1.15a1.8 1.8 0 0 1 .76 1.41c0 .88-.64 1.51-1 1.51s-.94-.63-.94-1.51a1.76 1.76 0 0 1 .67-1.41zm4.27-5.95a12.83 12.83 0 1 0 12.85 12.81A12.82 12.82 0 0 0 17.48 4.67z"
  },
  // {
  //   path: "/documents",
  //   sidebarName: "Documents",
  //   navbarName: "Documents",
  //   component: Documents,
  //   btn: documentsButton,
  //   svgbox: "0 0 38.01 38.01",
  //   svgpath:
  //     "M3.92,31.58a.75.75,0,0,1-.84-.66.74.74,0,0,1,.08-.44l5.49-13.9a1.86,1.86,0,0,1,1.58-1.11H35.16a.76.76,0,0,1,.85.66.72.72,0,0,1-.09.45L31.08,30.42a1.88,1.88,0,0,1-1.58,1.11H3.92Z M2.41,24.34c-.24.59-.41.59-.41-.05V11.67a5.43,5.43,0,0,1,.58-2.16l1.23-2.1a2.36,2.36,0,0,1,1.75-1H15.72a3,3,0,0,1,1.93.87L18.7,8.52a2.9,2.9,0,0,0,1.92.87h10.1a.75.75,0,0,1,.76,1.11L31,11.67a1.88,1.88,0,0,1-1.58,1.11H7.84a1.76,1.76,0,0,0-1.58,1.11Z"
  // },
  // {
  //   path: "/calendar",
  //   sidebarName: "Calendar",
  //   navbarName: "Calendar",
  //   component: Calendar,
  //   btn: calendarButton,
  //   svgbox: "0 0 33.67 33.67",
  //   svgpath:
  //     "M15.53,24.16v.37a.86.86,0,0,1,0,.23.2.2,0,0,1-.09.14.16.16,0,0,1-.14.05H9.94a.5.5,0,0,1-.27-.05.22.22,0,0,1-.19-.09.33.33,0,0,1-.09-.23c0-.1-.05-.24-.05-.42v-.42a.47.47,0,0,1,.09-.28l.14-.28a1.27,1.27,0,0,1,.24-.28l1.58-1.72c.32-.33.56-.65.79-.93s.33-.51.46-.74a6.44,6.44,0,0,0,.24-.61,2.09,2.09,0,0,0,0-.56,1.45,1.45,0,0,0-.09-.46,1,1,0,0,0-.6-.6,1.84,1.84,0,0,0-.52-.1,3.66,3.66,0,0,0-.74.1,3.88,3.88,0,0,0-.56.23,2.82,2.82,0,0,1-.42.23.35.35,0,0,1-.28.1s-.09,0-.09-.05,0-.09-.09-.14,0-.14,0-.28v-.7c0-.09,0-.14,0-.18s0-.1,0-.14,0-.1.14-.14A3.43,3.43,0,0,1,10,16a4.22,4.22,0,0,1,.61-.28c.23-.09.51-.14.79-.23a2.59,2.59,0,0,1,.88-.09,3.6,3.6,0,0,1,1.26.18,2.31,2.31,0,0,1,.88.52,1.67,1.67,0,0,1,.51.79,2.16,2.16,0,0,1,.19,1,6.54,6.54,0,0,1-.09.89,2.9,2.9,0,0,1-.38.93A10.32,10.32,0,0,1,14,20.77a11.47,11.47,0,0,1-1.3,1.4l-1.07,1.11h3.63a.19.19,0,0,1,.14,0c.05.05.09.09.09.14a.32.32,0,0,1,.05.23A2.38,2.38,0,0,1,15.53,24.16Z M24.74,24.2v.33a1.85,1.85,0,0,1,0,.23c-.05,0-.05.09-.1.14a.13.13,0,0,1-.09.05H19.44c-.05,0-.1,0-.1-.05a.42.42,0,0,1-.09-.14.37.37,0,0,1-.05-.23v-.65c0-.08,0-.16.05-.24s.05-.09.09-.14a.18.18,0,0,1,.1,0h1.72v-6l-1.49.83a.56.56,0,0,1-.28.1.29.29,0,0,1-.18-.05c-.05-.05-.05-.09-.1-.23v-.7c0-.1,0-.14.05-.19s.05-.09.09-.14.1,0,.14-.09l2-1.3c.05,0,.05,0,.1,0a.16.16,0,0,0,.14-.05h1a.37.37,0,0,1,.23.05.19.19,0,0,1,.1,0s0,0,0,.09v7.63h1.49a.19.19,0,0,1,.14.05.31.31,0,0,1,.09.14.32.32,0,0,1,.05.23A1.18,1.18,0,0,0,24.74,24.2Z M25.91,3.91v.56a2.69,2.69,0,0,1-.37,1.35c-.1.14-.19.23-.28.37a2.51,2.51,0,0,1-2,.88A2.59,2.59,0,0,1,21.21,6a1,1,0,0,1-.28-.51,2.41,2.41,0,0,1-.23-1V3.63H13.11v.84a2.41,2.41,0,0,1-.23,1c-.09.18-.18.35-.28.51a2.54,2.54,0,0,1-2.1,1.07,2.47,2.47,0,0,1-1.95-.88,2.4,2.4,0,0,1-.28-.37A2.69,2.69,0,0,1,7.9,4.47V3.91A6.3,6.3,0,0,0,3.34,10V24.39a6.28,6.28,0,0,0,6.28,6.28H24.05a6.28,6.28,0,0,0,6.28-6.28V10A6,6,0,0,0,25.91,3.91Zm2.14,20.48a3.94,3.94,0,0,1-3.91,3.91H9.71A4,4,0,0,1,5.8,24.39V12.89H28.1v11.5Z M22.51,6.05a1.56,1.56,0,0,0,.79.18,1.84,1.84,0,0,0,1.35-.6,2,2,0,0,0,.42-1.11V1.82a1.77,1.77,0,1,0-3.54,0V4.56a1.91,1.91,0,0,0,.33,1C22.07,5.75,22.29,5.9,22.51,6.05Z M9.71,6.05a1.56,1.56,0,0,0,.79.19,2.35,2.35,0,0,0,.79-.19,2,2,0,0,0,.61-.51,1.58,1.58,0,0,0,.32-1V1.77a1.77,1.77,0,1,0-3.53,0v2.7a1.61,1.61,0,0,0,.42,1.12A4.54,4.54,0,0,0,9.71,6.05Z"
  // },
  // {
  //   path: "/reminders",
  //   sidebarName: "Reminders",
  //   navbarName: "Reminders",
  //   component: Reminders,
  //   btn: remindersButton,
  //   svgbox: "0 0 30.333 30.336",
  //   svgpath:
  //     "M8.867,21.684c-.313-.313-.609-.635-.9-.962L.4,29.419a.507.507,0,0,0,.717.717l8.7-7.576C9.491,22.279,9.174,21.99,8.867,21.684ZM17.8,5.988l-3.88,2.755c-.926.926.087,3.438,2.26,5.611s4.688,3.188,5.613,2.261l2.74-3.858a9.878,9.878,0,0,1-4.209-2.545A9.784,9.784,0,0,1,17.8,5.988Zm-2.336,9.084c-2.219-2.219-3.7-5.217-2.429-6.844a7.109,7.109,0,0,0-6.813,1.7c-2.117,2.12-.61,7.062,3.366,11.04s8.923,5.484,11.04,3.366a7.122,7.122,0,0,0,1.692-6.84C20.453,18.958,17.191,16.8,15.459,15.071ZM28.3,7.886c-.39.391-1.973-.56-3.535-2.121s-2.512-3.145-2.121-3.535,1.973.559,3.535,2.121S28.692,7.5,28.3,7.886Zm-1.259-4.4C24.271.715,21.22-.731,20.23.26a5.883,5.883,0,0,0-1.6,4.784,8.189,8.189,0,0,0,2.407,4.451,8.259,8.259,0,0,0,4.451,2.436A5.884,5.884,0,0,0,30.271,10.3C31.262,9.31,29.816,6.26,27.043,3.488Z"
  // },
  {
    path: "/news",
    sidebarName: "News",
    navbarName: "News",
    component: News,
    btn: newsButton,
    svgbox: "0 0 34 34",
    svgpath:
      "M17.56,10.57,28.42,5.85V3.4Z M17.56,9.51l8-5.37V1.83Z M2.53,26.11l13.87,6,.05.05V11.5l-13.92-6Z M16.45,10.57,5.58,5.85V3.4Z M16.45,9.51l-8-5.37V1.83Z M31.47,5.48l-13.91,6V32.17l13.91-6ZM29.72,24.21l-10,4.49V27.36l10-4.44Zm0-3.6-10,4.48V23.75l10-4.44Zm0-3.61-10,4.49V20.15l10-4.44Z"
  },
  {
    path: "/people",
    sidebarName: "People",
    navbarName: "People",
    component: People,
    btn: peopleButton,
    svgbox: "0 0 42.87 42.87",
    svgpath:
      "M40.19,28.6c-1.61-1.13-4-.54-5.59-2.56,0,0-.6-.65.71-2.2s1.37-4,1.07-5.94a4,4,0,0,0-4-3.21,3.91,3.91,0,0,0-4,3.21c-.3,1.9-.24,4.4,1.07,5.94a3,3,0,0,1,.83,1.73A6.51,6.51,0,0,1,32,26.4c2.44,1.72,2.26,5,2.2,5.94h7.2C41.38,32.29,41.73,29.73,40.19,28.6Z M31,27.71a5.17,5.17,0,0,0-1.84-.78c-1.73-.47-3.69-.59-5.05-2.37,0,0-.72-.78.89-2.74s1.72-5,1.31-7.37a5.07,5.07,0,0,0-9.87,0c-.42,2.37-.24,5.47,1.3,7.37s.9,2.74.9,2.74c-1.37,1.78-3.27,1.9-5,2.38a7.81,7.81,0,0,0-1.9.77c-2,1.43-1.48,4.64-1.48,4.64H32.58C32.52,32.28,33,29.13,31,27.71Z M10.76,26.4a8,8,0,0,1,1.78-.89,2.78,2.78,0,0,1,.83-1.67c1.25-1.54,1.37-4,1.07-5.94a4,4,0,0,0-4-3.21,3.91,3.91,0,0,0-4,3.21c-.3,1.9-.24,4.4,1.07,5.94s.71,2.2.71,2.2c-1.54,2-4,1.43-5.59,2.56s-1.19,3.74-1.19,3.74H8.62C8.5,31.39,8.38,28.06,10.76,26.4Z"
  },
  // {
  //   path: "/suppliers",
  //   sidebarName: "Suppliers",
  //   navbarName: "Suppliers",
  //   component: Suppliers,
  //   btn: suppliersButton,
  //   svgbox: "0 0 42.5 42.5",
  //   svgpath:
  //     "M32.71,11.85a1.32,1.32,0,0,0-1.29-1h-.1l-8,.47a1.34,1.34,0,0,0-.82.36l-.31.31-.36-.31a1.53,1.53,0,0,0-.88-.36H11a1.33,1.33,0,0,0-1.29,1L7.4,22.8A1.27,1.27,0,0,0,7.71,24a1.39,1.39,0,0,0,1,.41h.15L12,24l8.37,6.56.93.77a1.22,1.22,0,0,0,.88.37h.25a1.07,1.07,0,0,0,.78-.37l6-5.63,3-2.74,1,.31a.85.85,0,0,0,.36.06,1.14,1.14,0,0,0,.88-.37,1.25,1.25,0,0,0,.36-1.24ZM15.15,24.71c0-.05.1-.05.15-.1l.31-.36.67-.88a.66.66,0,0,0-.08-.92h0l-.93-.77a.65.65,0,0,0-.92.09h0l-.56.72-.42.52h0a.42.42,0,0,0-.1.2l-.77-.62-.36.06-3.31.41,2.32-10.49h10l.25.21.1.1-2.06,2.58-.83,1a1.3,1.3,0,0,0-.36.93.79.79,0,0,0,.26.52c.77.83,2.48.21,2.48.21l2.17-2.59a1.87,1.87,0,0,1,.77-.56l7.55,6.87-1.6,1.5-.06-.05L24.09,18.1a.65.65,0,0,0-.93.08.66.66,0,0,0,.05.9L28.9,24.3l-.42.41-.93.88h0c-.05-.05-.05-.1-.1-.1l-4.7-4.19a.65.65,0,0,0-.93,0,.66.66,0,0,0,0,.93l0,0,4.7,4.18h.06l-1.35,1.29v-.05c-.05-.05-.05-.1-.1-.15l-3.87-3.41a.65.65,0,0,0-.93.08.66.66,0,0,0,.05.9l3.88,3.41.05.05a0,0,0,0,1,.05.05h0l-.62.57a0,0,0,0,0-.05-.05h0a.89.89,0,0,0-.21-.26l-.93-.77a.66.66,0,0,0-.93.09h0l-.67.82-.05.06-.57-.42.05-.1.67-.82a.65.65,0,0,0-.09-.92h0l-.93-.78a.65.65,0,0,0-.92.09h0l-.57.67-.2.26-.67-.41.25-.31.68-.83a.65.65,0,0,0-.09-.92h0l-.93-.77a.66.66,0,0,0-.93.09h0l-.57.72-.42.46-.36-.25-.15-.16Z M8.43,11.69a.65.65,0,0,0-.52-.26h-6a.68.68,0,0,0-.67.67V25.59a.67.67,0,0,0,.67.67h3a.61.61,0,0,0,.62-.51l3-13.49A.47.47,0,0,0,8.43,11.69Z M40.62,10.92h-6a.61.61,0,0,0-.52.25,1,1,0,0,0-.15.57l3,13.49a.6.6,0,0,0,.62.51h3a.68.68,0,0,0,.67-.67V11.59a.59.59,0,0,0-.49-.67Z"
  // },
  // {
  //   path: "/learning",
  //   sidebarName: "Learning",
  //   navbarName: "Learning",
  //   component: Learning,
  //   btn: learningButton,
  //   svgbox: "0 0 32.19 32.19",
  //   svgpath:
  //     "M31.09,5.77H12.62a1.68,1.68,0,0,1,1.69-1.69h15.1A1.69,1.69,0,0,1,31.09,5.77ZM7.61,10.25h0v0l-.25,0H7.09L6.24,11.9l.43.3L6,13.35l-.26-1.89,0-.36,0-.21H5.16l0,.21,0,.36-.26,1.89L4.18,12.2l.43-.3-.85-1.66H3.64a2.55,2.55,0,0,0-2.55,2.54v5.77a.79.79,0,0,0,1.57,0V12.78A1,1,0,0,1,3.05,12V27.24a.88.88,0,0,0,1.76,0V19.87H6v7.36a.88.88,0,0,0,1.76,0V13.12l.63-1.3H14a.79.79,0,0,0,.76-.6l6.77-.61v-.38l-7.53,0H10Zm0-2.91A2.18,2.18,0,1,0,5.43,9.52,2.17,2.17,0,0,0,7.6,7.34ZM21.49,9.51h.73v1.78l-.66.06-6.37.57a1.5,1.5,0,0,1-1.23.64h-.15v5.57H29.32V6.42H13.81V9.54H14Zm9.6,9.3H12.62a1.69,1.69,0,0,0,1.69,1.69H18.8l-4.17,7.61h2l4.17-7.61H22.9l4.17,7.61h2L24.91,20.5h4.5a1.69,1.69,0,0,0,1.68-1.69Z"
  // },
  {
    path: "/admin",
    sidebarName: "Admin",
    navbarName: "Admin",
    component: Admin,
    btn: learningButton,
    svgbox: "0 0 32.19 32.19",
    svgpath:
      "M31.09,5.77H12.62a1.68,1.68,0,0,1,1.69-1.69h15.1A1.69,1.69,0,0,1,31.09,5.77ZM7.61,10.25h0v0l-.25,0H7.09L6.24,11.9l.43.3L6,13.35l-.26-1.89,0-.36,0-.21H5.16l0,.21,0,.36-.26,1.89L4.18,12.2l.43-.3-.85-1.66H3.64a2.55,2.55,0,0,0-2.55,2.54v5.77a.79.79,0,0,0,1.57,0V12.78A1,1,0,0,1,3.05,12V27.24a.88.88,0,0,0,1.76,0V19.87H6v7.36a.88.88,0,0,0,1.76,0V13.12l.63-1.3H14a.79.79,0,0,0,.76-.6l6.77-.61v-.38l-7.53,0H10Zm0-2.91A2.18,2.18,0,1,0,5.43,9.52,2.17,2.17,0,0,0,7.6,7.34ZM21.49,9.51h.73v1.78l-.66.06-6.37.57a1.5,1.5,0,0,1-1.23.64h-.15v5.57H29.32V6.42H13.81V9.54H14Zm9.6,9.3H12.62a1.69,1.69,0,0,0,1.69,1.69H18.8l-4.17,7.61h2l4.17-7.61H22.9l4.17,7.61h2L24.91,20.5h4.5a1.69,1.69,0,0,0,1.68-1.69Z"
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default siteRoutes;
