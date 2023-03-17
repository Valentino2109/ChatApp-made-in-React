// Exporting 2 components -- Title and MainLogIn
import MainLogIn from "./MainLogIn/MainLogIn";
import Title from "./Title/Title";

export default function HomeComponents() {
  return (
    <>
      <Title />
      <MainLogIn />
    </>
  );
}
