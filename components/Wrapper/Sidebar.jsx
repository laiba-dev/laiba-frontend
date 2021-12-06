import React from "react";
import SidebarItem from "./SidebarItem";
import { Text, Heading1 } from "../Typography";
import { color } from "../Color";
import { connect } from "react-redux";
import { setSelectedMenu } from "../../utils/redux/actions/MenuActions";

export function Sidebar({ menu, setSelectedMenu }) {
  return (
    <div className="sidebar">
      <div style={{ marginBottom: "20px", padding: "20px" }}>
        <Heading1 color="white">LAIBA</Heading1>
        <Text color="white">Learning Application in Balanced Assessment</Text>
      </div>
      <div>
        <SidebarItem
          icon="/images/bx_bxs-home.png"
          url="/dashboard"
          text="Dashboard"
          active={menu.selectedKeys == 1}
          onSelected={() => setSelectedMenu(1)}
        />
        <SidebarItem
          icon="/images/fluent_learning-app-24-regular.png"
          url="/pembelajaran"
          text="Pembelajaran"
          active={menu.selectedKeys == 2}
          onSelected={() => setSelectedMenu(2)}
        />
        <SidebarItem
          icon="/images/bx_bxs-report.png"
          url="/submissions"
          text="Hasil Pembelajaran"
          active={menu.selectedKeys == 3}
          onSelected={() => setSelectedMenu(3)}
        />
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    menu: state.menu,
  }),
  { setSelectedMenu }
)(Sidebar);
