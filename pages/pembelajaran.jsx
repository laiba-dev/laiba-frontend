import React from "react";
import PembelajaranCard from "../components/PembelajaranCard";
import { Heading3 } from "../components/Typography";
import router from "next/router";
import { API_URL } from "../utils/constants";

export default function Pembelajaran({ listFramework }) {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Pilih Pembelajaran</Heading3>
      </div>
      <div className="pembelajaran-list">
        {listFramework.map((value) => (
          <PembelajaranCard key={value.id} pembelajaran={value} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const frameworks = await fetch(`${API_URL}/api/framework`, {
    method: "GET",
  });
  const data = await frameworks.json();
  return {
    props: {
      listFramework: data.data,
    },
  };
}
