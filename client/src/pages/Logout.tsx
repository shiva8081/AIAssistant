const Logout = () => {
  const handleLogout = (): void => {
    window.open("http://localhost:5001/api/logout", "_self");
  };
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-lg shadow-md transition  ease-in-out flex items-center" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
