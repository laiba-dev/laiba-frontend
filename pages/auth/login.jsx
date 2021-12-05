import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "../../components/Button";
import { Heading1, Text } from "../../components/Typography";

export default function SignIn({ providers }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <Heading1>LAIBA</Heading1>
      <Text>Learning Application in Balanced Assessment</Text>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            onClick={() => signIn(provider.id)}
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
