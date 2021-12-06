import React from "react";
import PembelajaranCard from "../components/PembelajaranCard";
import { Heading3 } from "../components/Typography";

export default function Pembelajaran({ listFramework }) {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Pilih Pembelajaran</Heading3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          rowGap: "20px",
          columnGap: "20px",
        }}
      >
        {listFramework.map((value) => (
          <PembelajaranCard
            key={value.id}
            image={value.urlGambar}
            title={value.judul}
            desc={value.deskripsi}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const frameworks = await fetch(`${process.env.API_URL}/api/framework`, {
    method: "GET",
  });
  const data = await frameworks.json();
  return {
    props: {
      listFramework: data,
    },
  };
}
