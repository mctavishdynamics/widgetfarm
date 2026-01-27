import { useId } from "react";

export function usePropsWithId<T extends { id: string }>(props: T): T {
  return {
    ...{ id: useId() },
    ...props,
  } as T;
}
