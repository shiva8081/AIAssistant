import bgcolor from "../Img/bgcolor.png";
import { usecontext } from "../context/UserContext";
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const { Authuser } = usecontext();
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgcolor})` }}
    >
      {Authuser && Authuser.displayName && (
        <h1 className="text-4xl font-bold mb-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Welcome, {Authuser.displayName}!
        </h1>
      )}
      <div className="text-center bg-black bg-opacity-70 p-10 rounded-2xl max-w-3xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold text-white mb-8 leading-tight">
          Chat with any PDF
        </h1>
        <p className="text-2xl text-gray-300 leading-relaxed">
          Join millions of students, researchers and professionals to instantly
          answer questions and understand research with AI
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
          <CloudArrowUpIcon className="h-6 w-6 mr-2" />
          <span>Upload PDF</span>
          <input id="file-upload" type="file" accept=".pdf" className="hidden" />
        </label>

      </div>
    </div>
  );
};

export default Home;
