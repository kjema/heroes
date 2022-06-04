import Link from "next/link";
import { useQuery } from "react-query";

type Props = {
  children?: React.ReactNode;
};

function HeroList(props: Props): JSX.Element {
  const { data, isLoading, isError } = useQuery("heroes", async () => {
    const response = await fetch("/api/heroes");
    return await response.json();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>List of heroes</h1>
      <Link href="/hero/[heroId]" as="/hero/1">
        Hero 1
      </Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default HeroList;
