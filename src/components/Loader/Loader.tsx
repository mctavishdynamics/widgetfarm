import { BarLoader } from "react-spinners";
import { Center } from "../Center/Center.tsx";

export function Loader() {
  return (
    <Center>
      <BarLoader width={"100%"} height={4} />
    </Center>
  );
}
