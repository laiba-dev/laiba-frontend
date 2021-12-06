import React from "react";
import Image from "next/image";
import { Title, Text } from "./Typography";
import Card from "./Card";

export default function PembelajaranCard({ id, image, title, desc }) {
  return (
    <Card>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Image
            priority
            src={image}
            alt="Logo Pembelajaran"
            width="156px"
            height="156px"
          />
        </div>
        <Title>{title}</Title>
        <Text color="#808080">{desc}</Text>
      </div>
    </Card>
  );
}
