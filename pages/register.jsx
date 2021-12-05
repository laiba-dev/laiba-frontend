import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { color } from "../components/Color";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
import { Text, Title } from "../components/Typography";

export default function Register() {
  const [nim, setNim] = React.useState(0);
  const [nama, setNama] = React.useState("");
  const [prodi, setProdi] = React.useState("");
  const [username, setUsername] = React.useState("");

  return (
    <div style={{ width: "347px", margin: "auto" }}>
      <Card>
        <Title>Register</Title>
        <Text color={color.text}>
          Kamu sudah punya akun github. Tapi username kamu belum terdaftar di
          Sistem kami. Silahkan registrasi untuk melanjutkan
        </Text>
        <Divider />
        <FormField
          type="number"
          value={nim}
          onChange={(event) => setNim(event.target.value)}
          placeholder="NIM"
        />
        <FormField
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          placeholder="Nama"
        />
        <FormField
          type="text"
          value={prodi}
          onChange={(event) => setProdi(event.target.value)}
          placeholder="Program Studi"
        />
        <FormField
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username Github"
          disabled
        />
        <Button text="Daftar" onClick={() => {}} />
      </Card>
    </div>
  );
}
