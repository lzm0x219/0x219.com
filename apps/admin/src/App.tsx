import { Outlet, ScrollRestoration } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

export default function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          motionUnit: 0.2,
          colorPrimary: "#6a76ab",
        },
      }}
    >
      <Outlet />
      <ScrollRestoration />
    </ConfigProvider>
  );
}
