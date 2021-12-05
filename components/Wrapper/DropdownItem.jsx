import React, { useState } from "react";
import { Text } from "../Typography";

export default function DropdownItem({ text, action }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="header-dropdown-item" onClick={action}>
      <Text>{text}</Text>
    </div>
  );
}
