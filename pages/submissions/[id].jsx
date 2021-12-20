import React from "react";
import Card from "../../components/Card";
import { Text, Heading3, Title } from "../../components/Typography";
import { color, shadow } from "../../components/Color";
import TestResultCard from "../../components/TestResultCard";

export default function DetailSubmission({ testResult }) {
  // React.useEffect(() => {
  //   console.log(testResult);
  // }, []);

  return (
    <div>
      <div className="container-row">
        <Heading3>Detail Hasil Pembelajaran</Heading3>
      </div>
      <div className="container-row">
        <Card>
          <div className="submission-time">
            <Text color={color.text}>Nama Mahasiswa</Text>
            <Text>{testResult.about.username}</Text>
            <Text color={color.text}>Materi yang dipelajari</Text>
            <Text>Materi 1</Text>
            <Text color={color.text}>Praktikum yang dikerjakan</Text>
            <Text>Hello world dengan text</Text>
            <Text color={color.text}>Waktu Pengumpulan</Text>
            <Text>{testResult.about.time}</Text>
          </div>
        </Card>
      </div>
      {testResult.test.tests.map((test) => (
        <div className="container-row">
          <TestResultCard test={test} />
        </div>
      ))}
      {testResult.test.runtime_error.length > 0 && (
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
              {testResult.test.runtime_error.split("\n").map((row) => (
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
      testResult: {
        about: {
          username: "mirfanrafif",
          project_name: "hello-flutter-mirfanrafif",
          time: "12/20/2021, 16:07:22",
        },
        test: {
          pipeline_id: "123123123",
          success: false,
          tests: [
            {
              id: 1,
              name: "loading D:\\Mine\\Ngoding\\AndroidProjects\\hello_flutter\\test\\widget_test.dart",
              result: "success",
              message: null,
            },
            {
              id: 3,
              name: "Hello world text should available",
              result: "success",
              message: null,
            },
            {
              id: 4,
              name: "Text should change",
              result: "error",
              message:
                'expected: exactly one matching node in the widget tree,\nactual: _TextFinder:<zero widgets with text "Hello, irfan" (ignoring offstage widgets)>,\nwhich: means none were found but one was expected',
            },
          ],
          runtime_error: "",
        },
      },
    },
  };
}
