import type { RouteObj } from "./types";

import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import { Employee } from "../pages/Employee/Employee";


export const routesData: RouteObj[] = [
  {path: "/", element: <CreateEmployee/>},
  {path: "employee", element: <Employee/>},
  { path: "*", element: <PageNotFound /> },
];
