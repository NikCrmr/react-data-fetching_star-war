import { useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import Loading from "@/components/Loading/Loading.styled";
import ErrorMessage from "@/components/Error/Error.styled";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const URL = `https://swapi.dev/api/people/${id}`;
  const { data: character, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;

  //const searchTerm = {character.name};
  const searchType =
    "Databank,Character,Artifact,Location,Organization,TypeOfThing";

  const iframeSrc = `https://www.starwars.com/search?q=${character.name}&m=true&f%5Btype%5D=${searchType}`;

  return (
    <Layout>
      <StyledLink href="/">back</StyledLink>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eyeColor}
        birthYear={character.birthYear}
      />
      <br />
      <iframe src={iframeSrc} height={400}></iframe>
    </Layout>
  );
}
// umbennen in einer eckigen dynamic routes fetch data
