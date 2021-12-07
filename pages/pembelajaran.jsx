import React from "react";
import PembelajaranCard from "../components/PembelajaranCard";
import { Heading3 } from "../components/Typography";
import router from "next/router";

export default function Pembelajaran({ listFramework }) {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Pilih Pembelajaran</Heading3>
      </div>
      <div className="pembelajaran-list">
        {listFramework.map((value) => (
          <div
            onClick={() => router.push("/materi?pembelajaranid=" + value.id)}
            key={value.id}
          >
            <PembelajaranCard key={value.id} pembelajaran={value} />
          </div>
        ))}
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
