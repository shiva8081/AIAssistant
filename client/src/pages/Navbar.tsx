import Logout from "./Logout";
import Login from "./Login";

interface NavbarProps {
  Authuser: any;
}

const Navbar = ({ Authuser }: NavbarProps) => {
  return (
    <nav className="bg-slate-700 p-4 shadow-md fixed top-0 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">
            AI<span className="text-blue-400">Assistant</span>
            <span className="text-sm font-normal ml-2 text-gray-300">
              PDF & Tweets
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div>{Authuser ? <Logout /> : <Login />}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
