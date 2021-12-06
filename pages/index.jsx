import router from "next/router";
import React from "react";
import Button from "../components/Button";
import { color } from "../components/Color";
import Image from "next/image";
import { Heading2, Heading3, Title } from "../components/Typography";
import Header from "../components/Wrapper/Header";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data, status } = useSession();
  const [showContent, setShowContent] = React.useState(false);
  React.useEffect(() => {
    if (status == "authenticated") {
      router.push("/dashboard");
    } else if (status == "unauthenticated") {
      setShowContent(true);
    }
  }, [status]);

  return (
    showContent && (
      <div style={{ backgroundColor: color.background, minHeight: "100vh" }}>
        <Header />
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
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
              <div>
                <Button
                  text="Mulai Belajar"
                  onClick={() => router.push("/dashboard")}
                />
              </div>
            </div>
            <Image
              src="/images/undraw_online_learning_re_qw08.svg"
              alt="branding"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    )
  );
}
