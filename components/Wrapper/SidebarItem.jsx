import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../Typography";
import { color } from "../Color";

export default function SidebarItem({ icon, text, url, active, onSelected }) {
  return (
    <Link href={url}>
      <div
        className="sidebar-item"
        style={{
          background: active && color.secondary,
        }}
        onClick={onSelected}
      >
        <Image src={icon} alt="Sidebar Item Image" width="24px" height="24px" />
        <div style={{ marginLeft: "23px" }}>
          <Text color="white">{text}</Text>
        </div>
      </div>
    </Link>
  );
}
