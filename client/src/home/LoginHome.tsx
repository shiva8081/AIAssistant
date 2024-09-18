import bgcolor from "../Img/bgcolor.png";

const LoginHome = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgcolor})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          Chat with any PDF
        </h1>
        <p className="text-xl text-gray-200">
          Join millions of students, researchers and professionals to instantly
          answer questions and understand research with AI
        </p>
      </div>
    </div>
  );
};

export default LoginHome;
