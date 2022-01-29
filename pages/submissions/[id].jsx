import React from "react";
import Card from "../../components/Card";
import { Text, Heading3, Title } from "../../components/Typography";
import { color, shadow } from "../../components/Color";
import TestResultCard from "../../components/TestResultCard";
import SubmissionService from "../../utils/services/SubmissionService";
import { useSession } from "next-auth/react";
import Shimmer from "react-js-loading-shimmer";

const testResultInitialState = {
  pembelajaran: {
    praktikum: {},
  },
  log_test: [],
  runtime_error: "",
};

export default function DetailSubmission({ logPembelajaranId }) {
  const [testResult, setTestResult] = React.useState(testResultInitialState);
  const [loading, setLoading] = React.useState(true);
  const { data: session } = useSession();

  React.useEffect(() => {
    setLoading(true);
    SubmissionService(session.user.apiToken)
      .getSubmission(logPembelajaranId)
      .then((response) => {
        const logPembelajaranData = response.data.data;
        setTestResult(logPembelajaranData);
        setLoading(false);
      });
  }, [logPembelajaranId, session.user.apiToken]);

  return (
    <div>
      <div className="container-row">
        <Heading3>Detail Hasil Pembelajaran</Heading3>
      </div>
      <div className="container-row">
        <Card>
          {loading ? (
            <div>
              <Shimmer /> <br />
              <Shimmer /> <br />
              <Shimmer />
            </div>
          ) : (
            <div className="submission-time">
              <Text color={color.text}>Nama Mahasiswa</Text>
              <Text>{testResult.pembelajaran.username}</Text>
              <Text color={color.text}>Praktikum yang dikerjakan</Text>
              <Text>{testResult.pembelajaran.praktikum.nama_praktikum}</Text>
              <Text color={color.text}>Waktu Pengumpulan</Text>
              <Text>{testResult.created_at}</Text>
            </div>
          )}
        </Card>
      </div>
      {loading ? (
        <Card>
          <Shimmer />
        </Card>
      ) : (
        testResult.log_test.map((test) => (
          <div className="container-row" key={test.id}>
            <TestResultCard test={test} />
          </div>
        ))
      )}
      {testResult.runtime_error.length > 0 && (
        <div className="container-row">
          <div
            style={{
              width: "inherit",
              height: "inherit",
              padding: "20px",
              borderRadius: "4px",
              background: "white",
              boxShadow: shadow,
              border: "1px solid #D00000",
            }}
          >
            <Title>Runtime Error</Title>
            <div
              style={{
                padding: "20px",
                background: "#FFDBDB",
                marginTop: "20px",
              }}
            >
              {testResult.runtime_error.split("\n").map((row) => (
                <div
                  style={{
                    fontFamily: "Fira Code",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#202020",
                  }}
                >
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export function getServerSideProps(context) {
  return {
    props: {
      logPembelajaranId: context.params.id,
    },
  };
}
