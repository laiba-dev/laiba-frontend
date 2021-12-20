import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "../../components/Button";
import { Heading1, Text } from "../../components/Typography";
import { color } from "../../components/Color";
import router from "next/router";

export default function SignIn({ providers }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color.primary,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading1 color="white">LAIBA</Heading1>
      <Text color="white">Learning Application in Balanced Assessment</Text>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            onClick={() =>
              signIn(provider.id, { callbackUrl: router.query.callbackUrl })
            }
            text={"Login dengan " + provider.id}
          />
        </div>
      ))}
    </div>
  );
}
// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
