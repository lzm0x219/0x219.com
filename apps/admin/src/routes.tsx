import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";
import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout";

const Index = lazy(() => import("@/routes/index"));
const Test = lazy(() => import("@/routes/test"));
const UserLogin = lazy(() => import("@/routes/user.login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <Index />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/user/login",
        element: (
          <Suspense>
            <UserLogin />
          </Suspense>
        ),
      },
      {
        path: "/test",
        element: (
          <Suspense>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
