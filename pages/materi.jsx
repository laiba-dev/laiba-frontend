import React from "react";
import MateriCard from "../components/MateriCard";
import { Heading3 } from "../components/Typography";

const listMateri = [
  {
    id: 1,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
  {
    id: 2,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
  {
    id: 3,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
];

export default function ListMateri() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Heading3>List Materi</Heading3>
      {listMateri.map((materi) => (
        <MateriCard key={materi.id} materi={materi} />
      ))}
    </div>
  );
}
