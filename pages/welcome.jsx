import router from "next/router";
import React from "react";
import Button from "../components/Button";
import { color } from "../components/Color";
import Link from "next/link";
import { Heading2, Heading3, Title } from "../components/Typography";
import Header from "../components/Wrapper/Header";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data, status } = useSession();
  React.useEffect(() => {
    if (status == "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <div style={{ backgroundColor: color.background, minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "80px",
          }}
        >
          <div
            style={{
              padding: "200px 40px",
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
            }}
          >
            <Heading2>Selamat Datang di LAIBA</Heading2>
            <Title>Learning Application in Balanced Assessment</Title>
            <Link href="/" passHref>
              <Button text="Mulai Belajar" />
            </Link>
          </div>
          <img
            src="/images/undraw_online_learning_re_qw08.svg"
            alt="branding"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
