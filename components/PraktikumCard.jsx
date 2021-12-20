import React from "react";
import Button from "./Button";
import Card from "./Card";
import { color } from "./Color";
import { Text, Title } from "./Typography";

export default function PraktikumCard({ praktikum }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Title>{praktikum.nama_praktikum}</Title>
            <Text color={color.text}>{praktikum.penjelasan}</Text>
          </div>
          <Button
            text={
              praktikum.success ? "Kerjakan" : "Kerjakan praktikum sebelumnya"
            }
            disabled={!praktikum.success}
          />
        </div>
      </Card>
    </div>
  );
}
