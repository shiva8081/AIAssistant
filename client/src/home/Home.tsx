import bgcolor from "../Img/bgcolor.png";
import { usecontext } from "../context/UserContext";
import Upload from "../pages/Upload";

const Home = () => {
  const { Authuser } = usecontext();
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center pt-20 pb-8 px-4 flex flex-col items-center"
      style={{ backgroundImage: `url(${bgcolor})` }}
    >
      <div className="flex-grow flex flex-col justify-center items-center w-full max-w-4xl mx-auto">
        {Authuser && Authuser.name && (
          <h1 className="text-4xl font-bold mb-7 px-8 py-4  mt-11 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
            Welcome, {Authuser.name}!
          </h1>
        )}

        <div className="text-center  mt-8  bg-black bg-acity-80 p-8 rounded-3xl max-w-2xl shadow-2xl backdr-blur-md mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Chat with any PDF
          </h1>
          <p className="text-lg text-gray-300 ">
            Join millions of students, researchers and professionals to
            instantly answer questions and understand research with AI
          </p>
        </div>
        <Upload />
      </div>
    </div>
  );
};

export default Home;
