import React from "react";
import Button from "./Button";
import Card from "./Card";
import { color } from "./Color";
import { Text, Title } from "./Typography";
import MateriService from "../utils/services/MateriService";
import { useSession } from "next-auth/react";
import swal from "sweetalert";

const berhasilMulai =
  "Kami telah mengirim invitasi untuk bergabung pada repositori Github. Silahkan cek email kamu untuk memulai mengerjakan";

export default function PraktikumCard({ praktikum }) {
  const { data: session } = useSession();

  const renderButton = () => {
    if (praktikum.tanggal_selesai !== null) {
      return <Button text={"Selesai"} disabled={true} />;
    } else if (praktikum.user_repo !== null) {
      return (
        <Button
          text={"Lanjutkan"}
          onClick={() => {
            window.location.href = "https://github.com/" + praktikum.user_repo;
          }}
        />
      );
    } else if (praktikum.available === true) {
      return (
        <Button
          text={"Kerjakan"}
          onClick={() => {
            MateriService(session.user.apiToken).mulaiPraktikum(praktikum.id);
            swal({
              text: "Lanjutkan belajar di repository kamu",
              title: "Lanjut Belajar",
              icon: "success",
            });
          }}
        />
      );
    } else {
      return <Button text={"Kerjakan praktikum sebelumnya"} disabled={true} />;
    }
  };

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
          {renderButton()}
        </div>
      </Card>
    </div>
  );
}
