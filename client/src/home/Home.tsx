import bgcolor from "../Img/bgcolor.png";
import { usecontext } from "../context/UserContext";
import Upload from "../pages/Upload";

const Home = () => {
  const { Authuser } = usecontext();
  return (
    <>
      <div className="h-[64px]" /> {/* Spacer for navbar */}
      <div
        className="min-h-[calc(100vh-72px)] w-full bg-fixed bg-cover bg-center py-8 px-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${bgcolor})` }}
      >
        <div className="flex-grow flex flex-col justify-center items-center w-full max-w-4xl mx-auto">
          {Authuser && Authuser.name && (
            <h1 className="text-4xl font-bold mb-7 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
              Welcome, {Authuser.name}!
            </h1>
          )}

          <div className="text-center mt-5 bg-black bg-opacity-80 p-8 rounded-3xl max-w-3xl shadow-2xl backdrop-blur-md mb-8">
            <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Your All-in-One AI Assistant
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  PDF Chat
                </h2>
                <p className="text-gray-300">
                  Upload any PDF and get instant answers to your questions.
                  Perfect for research, study, and analysis.
                </p>
              </div>
              <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Tweet Generator
                </h2>
                <p className="text-gray-300">
                  Create engaging tweets with AI. Choose your tone and style for
                  perfect social media content.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-300">
              Leverage AI to enhance your productivity and creativity
            </p>
          </div>
          <Upload />
        </div>
      </div>
    </>
  );
};

export default Home;
