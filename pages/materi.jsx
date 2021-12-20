import React from "react";
import MateriCard from "../components/MateriCard";
import { Heading3 } from "../components/Typography";

export default function ListMateri({ listMateri }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Heading3>List Materi</Heading3>
      {listMateri.map((materi) => (
        <MateriCard key={materi.id} materi={materi} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.API_URL}/api/materi`, {
    method: "GET",
  });
  const data = await response.json();

  var completedCourses = [
    {
      id: 1,
      success: true,
    },
  ];
  var available = true;
  const coursesListFinal = [];

  data.forEach((course) => {
    const thiscoursesuccess =
      completedCourses.findIndex(
        (completedCourse) => completedCourse.id == course.id
      ) > -1;
    if (thiscoursesuccess) {
      coursesListFinal.push({
        ...course,
        available: true,
      });
    } else if (available) {
      coursesListFinal.push({
        ...course,
        available: true,
      });
      available = false;
    } else {
      coursesListFinal.push({
        ...course,
        available: false,
      });
    }
  });
  return {
    props: {
      listMateri: coursesListFinal,
    },
  };
}
