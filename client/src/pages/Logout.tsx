const Logout = () => {
  const handleLogout = (): void => {
    window.open("http://localhost:5000/api/logout", "_self");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
