import { useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import Loading from "@/components/Loading/Loading.styled";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const URL = `https://swapi.dev/api/people/${id}`;
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <Loading></Loading>;
  if (error) return <p>error...@!#</p>;

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
// umbennen in einer eckigen dynamic routes fetch data
