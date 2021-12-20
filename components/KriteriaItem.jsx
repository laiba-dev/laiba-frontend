import React from "react";
import Image from "next/image";
import { Text } from "./Typography";

export default function KriteriaItem({ kriteria }) {
  return (
    <div className="kriteria-item">
      <Image
        src={
          kriteria.success ? "/images/icon-check.svg" : "/images/icon-cross.svg"
        }
        alt="Kriteria Sukses"
        width={24}
        height={24}
      />
      <Text>{kriteria.nama_test_case}</Text>
    </div>
  );
}
