import React, { ReactNode, useContext, useState } from "react";

export interface Context {
  name: string;
  setName: (val: string) => void;
}
const defaultVal = {
  name: "",
  setName: () => {},
} as Context;

const AppContext = React.createContext(defaultVal);

const { Provider } = AppContext;

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState(defaultVal.name);
  return <Provider value={{ name, setName }}>{children}</Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`"useChatBubbleContext" must be used within "ChatBubbleProvider"`);
  }

  return context;
};

export { AppProvider, useAppContext };
