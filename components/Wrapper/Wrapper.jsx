import { signIn, useSession } from "next-auth/react";
import React from "react";
import { color } from "../Color";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Wrapper({ children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { data, status } = useSession();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    switch (status) {
      case "loading":
        setLoading(true);
        break;

      case "authenticated":
        setLoading(false);
        break;

      case "unauthenticated":
        signIn();
        break;

      default:
        break;
    }
  }, [status]);

  return (
    !loading && (
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
    )
  );
}
