import React from "react";
import Card from "../components/Card";
import { Text, Title } from "./Typography";
import Image from "next/image";
import { color } from "./Color";
import KriteriaItem from "./KriteriaItem";
import DetailSubmissionCard from "./DetailSubmissionCard";

export default function SubmissionCard({ submission }) {
  const [showDetail, setShowDetail] = React.useState(false);
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              alignItems: "center",
            }}
          >
            <div>
              <Image
                src={
                  submission.success
                    ? "/images/icon-success.svg"
                    : "/images/icon-fail.svg"
                }
                alt="Ikon sukses"
                width={32}
                height={32}
              />
            </div>
            <div>
              <Title>{submission.nama_praktikum}</Title>
              <Text>{submission.success ? "Berhasil" : "Belum Berhasil"}</Text>
            </div>
          </div>
          <div
            onClick={() => setShowDetail(!showDetail)}
            style={{
              transform: showDetail && "rotate(180deg)",
              cursor: "pointer",
            }}
          >
            <Image
              src="/images/icon-down.svg"
              alt="Detail Hasil Pembelajaran"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Card>
      {showDetail && <DetailSubmissionCard submission={submission} />}
    </div>
  );
}
