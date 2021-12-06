import { signIn, useSession } from "next-auth/react";
import router from "next/router";
import React from "react";
import { color } from "../Color";
import Header from "./Header";
import Sidebar from "./Sidebar";

const publicPaths = ["/auth/login", "/auth/register", "/"];

export default function Wrapper({ children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { data, status } = useSession();
  const [loading, setLoading] = React.useState(true);
  const [useTemplate, setUseTemplate] = React.useState(true);

  React.useEffect(() => {
    const authCheck = () => {
      const route = router.asPath.split("?", 1)[0];
      console.log("Auth Check " + status);
      if (!publicPaths.includes(route)) {
        setUseTemplate(true);
        switch (status) {
          case "authenticated":
            setLoading(false);
            break;

          case "unauthenticated":
            signIn();
            break;

          default:
            break;
        }
      } else {
        setLoading(false);
        setUseTemplate(false);
      }
    };

    authCheck();

    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => authCheck());

    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => authCheck());
    };
  }, [status]);

  return loading ? (
    <p>Loading...</p>
  ) : useTemplate ? (
    <div>
      {!collapsed && <Sidebar />}
      <div
        style={{
          background: color.background,
          minHeight: "100vh",
          marginLeft: !collapsed ? "212px" : "0px",
        }}
      >
        <Header
          name={data.user.name}
          setCollapsed={() => {
            setCollapsed(!collapsed);
          }}
        />
        <div
          style={{
            paddingTop: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  ) : (
    children
  );
}
