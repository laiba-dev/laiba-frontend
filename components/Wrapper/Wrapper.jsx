import { signIn, useSession } from "next-auth/react";
import React from "react";
import { color } from "../Color";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Wrapper({ children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { data: session, status } = useSession();

  switch (status) {
    case "authenticated":
      return (
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
              name={session.user.name}
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
      );

    case "loading":
      return <p>loading...</p>;

    case "unauthenticated":
      signIn();
      break;
    default:
      break;
  }
}
