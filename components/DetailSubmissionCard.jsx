import React from "react";
import Card from "./Card";
import { Text } from "./Typography";
import KriteriaItem from "./KriteriaItem";
import { color } from "./Color";
import Button from "./Button";
import router from "next/router";

export default function DetailSubmissionCard({ submission }) {
  return (
    <div>
      <Card>
        <div className="detail-grid">
          <div className="submission-time">
            <Text color={color.text}>Waktu Mulai Mengerjakan</Text>
            <Text>27 November 2021</Text>
            <Text color={color.text}>Waktu Pengumpulan</Text>
            <Text>27 November 2021</Text>
            <Text color={color.text}>Waktu Pengerjaan</Text>
            <Text>1 Hari 20 Menit</Text>
          </div>
          <div className="submission-time">
            <Text color={color.text}>Kriteria</Text>
            <div>
              {submission.log_test.map((log) => (
                <KriteriaItem kriteria={log} key={log.id} />
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
          }}
        >
          <Button
            text="Lihat Detail Jawaban"
            onClick={() => router.push("/submissions/1")}
          />
        </div>
      </Card>
    </div>
  );
}
