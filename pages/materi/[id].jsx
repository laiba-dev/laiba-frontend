import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { color } from "../../components/Color";
import PraktikumCard from "../../components/PraktikumCard";
import { Heading3, Text, Title } from "../../components/Typography";

export default function DetailMateri({ materi }) {
  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Heading3>{materi.nama}</Heading3>
        </div>
        <Card>
          <div style={{ display: "grid", rowGap: "20px" }}>
            <Title>Pendahuluan</Title>
            <Text color={color.text}>{materi.deskripsi}</Text>
            <div>
              <Button text="Download Materi" />
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Heading3>Praktikum</Heading3>
        {materi.praktikum.map((value) => (
          <PraktikumCard key={value.id} praktikum={value} />
        ))}
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const detailMateri = {
    id: 1,
    nama: "Hello World",
    deskripsi:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident itaque ex veniam! Obcaecati nulla voluptates voluptate quaerat quas accusantium, esse, quisquam commodi dolorem mollitia molestiae nisi, iure quam sint! Accusantium!",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
    praktikum: [
      {
        id: 1,
        nama_praktikum: "Hello world menggunakan text",
        penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
        materiid: 1,
        success: false,
      },
      {
        id: 2,
        nama_praktikum: "Hello world menggunakan text",
        penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
        materiid: 1,
        success: false,
      },
      {
        id: 3,
        nama_praktikum: "Hello world menggunakan text",
        penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
        materiid: 1,
        success: false,
      },
    ],
  };

  return {
    props: {
      materi: detailMateri,
    },
  };
}
