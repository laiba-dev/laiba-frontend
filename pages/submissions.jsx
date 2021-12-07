import React from "react";
import SubmissionCard from "../components/SubmissionCard";
import { Heading3 } from "../components/Typography";

export default function Submissions({ submissions }) {
  React.useEffect(() => {
    console.log(submissions);
  }, [submissions]);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Hasil Pembelajaran</Heading3>
      </div>

      <div>
        {submissions.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const submissions = await fetch(`${process.env.API_URL}/api/submissions`, {
    method: "GET",
  });
  const data = await submissions.json();
  return {
    props: {
      submissions: data,
    },
  };
}
