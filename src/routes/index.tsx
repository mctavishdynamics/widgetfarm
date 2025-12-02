import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

interface IContext {
  name: string;
}

const Context = createContext<IContext | undefined>(undefined);

// function Provider({ children }) {
//   return <Context.Provider value={{ value: 1 }}>{children}</Context.Provider>;
// }

function useName() {
  const ctx = useContext(Context);

  if (ctx === undefined) {
    throw new Error("useValue must be used within a Provider");
  }

  return ctx.name;
}

function Consumer() {
  const name = useName();

  console.log(name);

  return name;
}

function RouteComponent() {
  return (
    <div>
      <Consumer />
    </div>
  );
}
