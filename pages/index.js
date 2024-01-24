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
  const { data: characters, error, isLoading } = useSWR(URL1, fetcher);
  console.log("index", characters);
  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <Layout>
      <h1>React Data Fetching:</h1>
      <StyledSpan>@</StyledSpan>
      <List>
        {characters.results.map((character, index) => {
          return (
            <li key={uid}>
              <StyledLink prefetch href={`characters/${index + 1}`}>
                {character.name}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Layout>
  );
}

const StyledSpan = styled.span`
  font-family: "StarJedi Special Edition";
  font-size: 5rem;
`;

const List = styled.ul`
  background-color: black;
  list-style-type: "";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transform: perspective(10px) rotateX(0deg);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-warm);
  &&:hover {
    border: 1px solid var(--color-warm);
    padding: 0.4rem;
    border-radius: 12px;
    color: #e9c62d;
  }
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
