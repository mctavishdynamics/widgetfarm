import { useContext, useEffect, useRef } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";

export function PageBody() {
  const context = useContext(WidgetFarmContext);

  const theme = context.theme;
  const activeClassRef = useRef(theme.PageBody);

  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.add(theme.PageBody);
    activeClassRef.current = theme.PageBody;

    return () => {
      document
        .getElementsByTagName("body")[0]
        .classList.remove(activeClassRef.current);
    };
  }, [theme]);

  return null;
}
