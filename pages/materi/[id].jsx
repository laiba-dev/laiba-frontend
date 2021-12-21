import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { color } from "../../components/Color";
import PraktikumCard from "../../components/PraktikumCard";
import { Heading3, Text, Title } from "../../components/Typography";

export default function DetailMateri({ materi, praktikum, kuis }) {
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
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Praktikum</Heading3>
      </div>
      <div style={{ marginBottom: "40px" }}>
        {praktikum.map((value) => (
          <PraktikumCard key={value.id} praktikum={value} />
        ))}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Kuis</Heading3>
      </div>
      <div style={{ marginBottom: "20px" }}>
        {kuis.map((value) => (
          <PraktikumCard key={value.id} praktikum={value} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.API_URL}/api/materi/1`);
  const data = await response.json();

  //memilih praktikum yang bisa dikerjakan
  var available = true;
  const praktikumList = [];

  data.praktikum.forEach((praktikum) => {
    const thiscoursesuccess = praktikum.success;
    if (thiscoursesuccess) {
      praktikumList.push({
        ...praktikum,
        available: true,
      });
    } else if (available) {
      praktikumList.push({
        ...praktikum,
        available: true,
      });
      available = false;
    } else {
      praktikumList.push({
        ...praktikum,
        available: false,
      });
    }
  });

  console.log(praktikumList);

  //memilah antara praktikum dan kuis
  const praktikum = praktikumList.filter((value) => value.type == "exercise");
  const kuis = praktikumList.filter((value) => value.type == "quiz");

  return {
    props: {
      materi: data,
      praktikum: praktikum,
      kuis: kuis,
    },
  };
}
