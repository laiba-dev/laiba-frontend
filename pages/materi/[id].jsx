import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { color } from "../../components/Color";
import PraktikumCard from "../../components/PraktikumCard";
import { Heading3, Text, Title } from "../../components/Typography";
import MateriService from "../../utils/services/MateriService";
import { useSession } from "next-auth/react";
import Shimmer from "react-js-loading-shimmer";
import MateriShimmer from "../../components/MateriShimmer";

export default function DetailMateri({ materiId }) {
  const { data: session } = useSession();
  const [materi, setmateri] = useState({});
  const [praktikum, setPraktikum] = useState([]);
  const [kuis, setKuis] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    MateriService(session.user.apiToken)
      .getMateri(materiId)
      .then((materiData) => {
        //memilih praktikum yang bisa dikerjakan
        var available = true;
        const praktikumList = [];

        materiData.data.data.praktikum.forEach((praktikum) => {
          const thiscoursesuccess = praktikum.tanggal_selesai !== null;
          if (thiscoursesuccess) {
            praktikumList.push({
              ...praktikum,
              available: true,
            });
          } else if (available) {
            praktikumList.push({
              ...praktikum,
              available: true,
            });
            available = false;
          } else {
            praktikumList.push({
              ...praktikum,
              available: false,
            });
          }
        });

        setmateri(materiData.data.data.materi);
        setPraktikum(
          praktikumList.filter((value) => value.type == "praktikum")
        );
        setKuis(praktikumList.filter((value) => value.type == "kuis"));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          {loading ? (
            <Shimmer height={"30px"} />
          ) : (
            <Heading3>{materi.nama}</Heading3>
          )}
        </div>
        <Card>
          <div style={{ display: "grid", rowGap: "20px" }}>
            <Title>Pendahuluan</Title>
            {loading ? (
              <Shimmer height={"21px"} />
            ) : (
              <Text color={color.text}>{materi.pendahuluan}</Text>
            )}

            <div>
              <Button text="Download Materi" />
            </div>
          </div>
        </Card>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Praktikum</Heading3>
      </div>
      <div style={{ marginBottom: "40px" }}>
        {loading ? (
          <MateriShimmer />
        ) : (
          praktikum.map((value) => (
            <PraktikumCard key={value.id} praktikum={value} />
          ))
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Kuis</Heading3>
      </div>
      <div style={{ marginBottom: "20px" }}>
        {loading ? (
          <MateriShimmer />
        ) : (
          kuis.map((value) => (
            <PraktikumCard
              key={value.id}
              praktikum={value}
              showAlert={showAlert()}
            />
          ))
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      materiId: context.params.id,
    },
  };
}
