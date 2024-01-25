import { createContext, useState, useContext } from "react";

// Creating the context and assign it to a variable
export const ProviderContext = createContext({
  example: null,
  exampleFunction: () => {},
});

// Exporting the context
// export default ProviderContext;

export const useExample = () => {
  return useContext(ProviderContext);
};

// example function in the context
export const CartProvider = ({ children }) => {
  const [example, setExample] = useState(null);

  const exampleFunction = () => {
    setExample("example");
  };
  const value = {
    example,
    exampleFunction,
  };

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};
