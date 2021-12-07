import React from "react";
import Image from "next/image";
import { Title, Text } from "./Typography";
import Link from "next/link";
import Card from "./Card";

export default function PembelajaranCard({ pembelajaran }) {
  return (
    <Card>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Image
            priority
            src={pembelajaran.urlGambar}
            alt="Logo Pembelajaran"
            width="156px"
            height="156px"
          />
        </div>
        <Title>{pembelajaran.judul}</Title>
        <Text color="#808080">{pembelajaran.deskripsi}</Text>
      </div>
    </Card>
  );
}
