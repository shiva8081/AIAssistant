import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  name?: string;
  email?: string;
}

//create the context value type
interface UserContextType {
  Authuser: User | null;
  setAuthuser: (user: User | null) => void;
  getuser: () => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
//define the type of children
interface AuthContextProviderProps {
  children: ReactNode;
}
export const UserProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [Authuser, setAuthuser] = useState<User | null>(null);
  const getuser = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/current_user", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        if (data && data.message != "Yeah, no login user") {
          setAuthuser(data);
        } else {
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
    <UserContext.Provider value={{ Authuser, setAuthuser, getuser }}>
      {children}
    </UserContext.Provider>
  );
};
