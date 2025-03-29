import bgcolor from "../Img/bgcolor.png";

const LoginHome = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgcolor})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-xl max-w-3xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          AI-Powered PDF Chat & Tweet Generator
        </h1>
        <div className="space-y-6">
          <p className="text-xl text-gray-200">
            Transform the way you work with PDFs and social media content using our advanced AI tools
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-2">PDF Chat Assistant</h2>
              <p className="text-gray-200">
                Instantly analyze documents and get smart answers to your questions
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-2">Smart Tweet Generator</h2>
              <p className="text-gray-200">
                Create engaging tweets with customizable tones and styles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;