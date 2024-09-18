import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

//create the context value type
interface UserContextType {
  Authuser: any;
  getuser: () => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const usecontext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("usecontext must be used within a AuthContextProvider");
  }
  return context;
};
//define the type of children
interface AuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [Authuser, setAuthuser] = useState(null);
  const getuser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/current_user", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        if(data&&data.message!="Yeah, no login user"){
          setAuthuser(data);
        }else{
            setAuthuser(null);
            console.log(data.message);
        }
        console.log(Authuser);
      }
    } catch (error) {
      console.error("error in fetching user", error);
    }
  };
  // useEffect to fetch the user when the component mounts
  useEffect(() => {
    getuser();
  }, []);

  return (
    <UserContext.Provider value={{ Authuser, getuser }}>
      {children}
    </UserContext.Provider>
  );
};
