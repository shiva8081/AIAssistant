import Message from "./Message";

const Messages = ({
  messages,
  loading,
}: {
  messages: { text: string; sender: "user" | "bot" }[];
  loading: boolean;
}) => {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
      {loading && <Message text="" sender="bot" loading={true} />}
    </div>
  );
};

export default Messages;
