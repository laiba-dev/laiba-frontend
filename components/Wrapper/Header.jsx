import React from "react";
import Image from "next/image";
import { Text } from "../Typography";
import DropdownItem from "./DropdownItem";
import { signOut } from "next-auth/react";
import { color, shadow } from "../Color";
import DropdownContent from "../DropdownContent";

export default function Header({ setCollapsed, name }) {
  return (
    <div className="header">
      <div style={{ cursor: "pointer", paddingTop: "4px" }}>
        <Image
          src="/images/ci_hamburger.png"
          alt="Sidebar Toggle"
          width="24px"
          height="24px"
          onClick={setCollapsed}
        />
      </div>
      <div className="dropdown">
        <div style={{ padding: "20px", cursor: "pointer" }}>
          <Text color={color.text}>Hai, {name}</Text>
        </div>
        <DropdownContent>
          <DropdownItem
            text="Logout"
            action={() => {
              signOut();
            }}
          />
        </DropdownContent>
      </div>
    </div>
  );
}
