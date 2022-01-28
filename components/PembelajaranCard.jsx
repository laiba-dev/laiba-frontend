import React from "react";
import Image from "next/image";
import { Title, Text } from "./Typography";
import Link from "next/link";
import Card from "./Card";
import router from "next/router";

export default function PembelajaranCard({ pembelajaran }) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/materi?pembelajaranId=" + pembelajaran.id);
      }}
    >
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
            <img
              src={pembelajaran.url_gambar}
              alt="Logo Pembelajaran"
              width="156px"
              height="156px"
            />
          </div>
          <Title>{pembelajaran.judul}</Title>
          <Text color="#808080">{pembelajaran.deskripsi}</Text>
        </div>
      </Card>
    </div>
  );
}
