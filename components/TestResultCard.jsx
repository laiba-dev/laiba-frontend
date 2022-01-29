import React from "react";
import Card from "./Card";
import { Text } from "./Typography";
import { shadow } from "./Color";
import Image from "next/image";
import { color } from "../components/Color";

export default function TestResultCard({ test }) {
  const [showDetail, setShowDetail] = React.useState(false);
  const [isError, _] = React.useState(test.result == "error");

  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
        padding: "20px",
        borderRadius: "4px",
        background: isError ? "white" : color.success,
        boxShadow: shadow,
        border: isError && "1px solid #D00000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Text color={isError ? "#202020" : "white"}>{test.name}</Text>
          <Text color={isError ? "#202020" : "white"}>{test.result}</Text>
        </div>
        {isError && (
          <div
            onClick={() => setShowDetail(!showDetail)}
            style={{
              transform: showDetail && "rotate(180deg)",
              cursor: "pointer",
            }}
          >
            <Image
              src="/images/icon-down.svg"
              alt="Detail Hasil Pembelajaran"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      {isError && showDetail && (
        <div
          style={{ padding: "20px", background: "#FFDBDB", marginTop: "20px" }}
        >
          {test.message.split("\n").map((row) => (
            <Text key={row.id}>{row}</Text>
          ))}
        </div>
      )}
    </div>
  );
}
