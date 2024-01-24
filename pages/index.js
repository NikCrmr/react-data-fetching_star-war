import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import Loading from "@/components/Loading/Loading.styled";
import ErrorMessage from "@/components/Error/Error.styled";
// import { useRouter } from "next/router";
import useSWR from "swr";
import { uid } from "uid";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const URL1 = `https://swapi.dev/api/people/`;
  const { data: character, error, isLoading } = useSWR(URL1, fetcher);
  console.log("index", character);
  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        <li>
          <StyledLink href="/characters/1">{`Luke Skywalker`}</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/2">C-3PO</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/3">R2-D2</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/4">Darth Vader</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/5">Leia Organa</StyledLink>
        </li>
        <li>
          <StyledLink
            href="/characters/10
          "
          >
            Obi-Wan Kenobi
          </StyledLink>
        </li>
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;

/*
<List>
        <li>
          <StyledLink href="/characters/1">Luke Skywalker</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/2">C-3PO</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/3">R2-D2</StyledLink>
        </li>
        <li>
          <StyledLink href="/characters/4">Darth Vader</StyledLink>
        </li>
      </List>
*/
