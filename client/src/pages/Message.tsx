const Message = ({
  text,
  sender,
  loading,
}: {
  text: string;
  sender: "user" | "bot";
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <div className="mr-auto p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      className={`flex max-w-[80%] flex-col gap-2 p-4 text-lg rounded-lg ${
        sender === "user"
          ? "ml-auto bg-black text-white dark:bg-white dark:text-black rounded-l-xl rounded-tr-xl"
          : "mr-auto bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-r-xl rounded-tl-xl"
      }`}
    >
      {text}
    </div>
  );
};

export default Message;
