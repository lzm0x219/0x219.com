import { Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
