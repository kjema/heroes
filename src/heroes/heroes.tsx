import HeroList from "./hero-list/hero-list";

type Props = {
  children?: React.ReactNode;
};

function Heroes(props: Props): JSX.Element {
  return (
    <>
      <HeroList />
    </>
  );
}

export default Heroes;
