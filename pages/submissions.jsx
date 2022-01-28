import React from "react";
import SubmissionCard from "../components/SubmissionCard";
import { Heading3 } from "../components/Typography";
import SubmissionService from "../utils/services/SubmissionService";
import { useSession } from "next-auth/react";
import { useState } from "react";
import MateriShimmer from "../components/MateriShimmer";

export default function Submissions() {
  const { data: session } = useSession();
  const [submissions, setSubmissions] = React.useState([]);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    SubmissionService(session.user.apiToken)
      .getListSubmission()
      .then((response) => {
        var listsubmission = [];
        response.data.data.forEach((pembelajaranItem) => {
          pembelajaranItem.log_pembelajaran.forEach((log) => {
            var submission = {
              ...log,
              nama_praktikum: pembelajaranItem.praktikum.nama_praktikum,
              tanggal_mulai: pembelajaranItem.created_at,
            };
            listsubmission.push(submission);
          });
        });
        setSubmissions(listsubmission);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Hasil Pembelajaran</Heading3>
      </div>

      <div>
        {loading ? (
          <MateriShimmer />
        ) : (
          submissions.map((submission) => (
            <SubmissionCard key={submission.id} submission={submission} />
          ))
        )}
      </div>
    </div>
  );
}
