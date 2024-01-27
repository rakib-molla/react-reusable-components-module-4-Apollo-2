import { createContext } from "react";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ double: boolean } | null>(null);

export const Form = ({ children, onSubmit, double }) => {
  return (
    <FormElementContext.Provider value={{double}}>
      <form
        onSubmit={onSubmit}
        className={cn("border shadow-lg w-full mx-auto p-5", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <h1>{children}</h1>
      </form>
    </FormElementContext.Provider>
  );
};
