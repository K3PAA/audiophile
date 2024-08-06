import { NavContext } from "@/context/NavContext";
import { useContext } from "react";

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === null) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
};
