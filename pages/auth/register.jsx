import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { color } from "../../components/Color";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import { Text, Title } from "../../components/Typography";

export default function Register() {
  const [userData, setUserData] = React.useState({
    nim: "",
    nama: "",
    prodi: "",
    username: "mirfanrafif",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: color.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "347px" }}>
        <Card>
          <Title>Register</Title>
          <Text color={color.text}>
            Kamu sudah punya akun github. Tapi username kamu belum terdaftar di
            Sistem kami. Silahkan registrasi untuk melanjutkan
          </Text>
          <Divider />
          <FormField
            type="number"
            value={userData.nim}
            onChange={(event) =>
              setUserData({ ...userData, nim: event.target.value })
            }
            placeholder="NIM"
          />
          <FormField
            type="text"
            value={userData.nama}
            onChange={(event) =>
              setUserData({ ...userData, nama: event.target.value })
            }
            placeholder="Nama"
          />
          <FormField
            type="text"
            value={userData.prodi}
            onChange={(event) =>
              setUserData({ ...userData, prodi: event.target.value })
            }
            placeholder="Program Studi"
          />
          <FormField
            type="text"
            value={userData.username}
            onChange={(event) =>
              setUserData({ ...userData, username: event.target.value })
            }
            placeholder="Username Github"
            disabled
          />
          <Button text="Daftar" onClick={() => {}} />
        </Card>
      </div>
    </div>
  );
}
