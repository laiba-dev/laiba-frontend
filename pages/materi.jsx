import React from "react";
import { useEffect, useState } from "react";
import MateriCard from "../components/MateriCard";
import { useSession } from "next-auth/react";
import { Heading3 } from "../components/Typography";
import MateriService from "../utils/services/MateriService";
import MateriShimmer from "../components/MateriShimmer";

export default function ListMateri({ pembelajaranId }) {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const [listMateri, setListMateri] = useState([]);

  useEffect(() => {
    setLoading(true);
    MateriService(session.user.apiToken)
      .getListMateri(pembelajaranId)
      .then((response) => {
        var available = true;
        const coursesListFinal = [];

        response.data.data.forEach((course) => {
          const thiscoursesuccess = course.tanggal_selesai != null;
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

        setListMateri(coursesListFinal);
        setLoading(false);
      });
  }, [pembelajaranId, session.user.apiToken]);

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Heading3>List Materi</Heading3>
      {loading ? (
        <MateriShimmer />
      ) : (
        listMateri.map((materi) => (
          <MateriCard key={materi.id} materi={materi} />
        ))
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      pembelajaranId: context.query.pembelajaranId,
    },
  };
}
