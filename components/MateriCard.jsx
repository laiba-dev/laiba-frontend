import React from "react";
import Card from "../components/Card";
import { color } from "./Color";
import Button from "../components/Button";
import { Text, Title } from "./Typography";
import router from "next/router";

export default function MateriCard({ materi }) {
  return (
    <div>
      <Card>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Title>{materi.nama}</Title>
            <Text color={color.text}>{materi.deskripsi}</Text>
          </div>
          <div>
            <Button
              text="Lihat Detail"
              onClick={() => {
                router.push("/materi/" + materi.id);
              }}
              disabled={!materi.available}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
