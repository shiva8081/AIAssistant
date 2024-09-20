const Message = () => {
  return (
    
    //   {/* Chat messages will go here */}
      <div className="flex w-full flex-col gap-5">
        {/* <!-- Sent --> */}
        <div className="ml-auto flex max-w-[80%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-black p-4 text-lg text-neutral-100 md:max-w-[60%] dark:bg-white dark:text-black">
          I accidentally deleted some important files. Can they be recovered?
        </div>

        {/* <!-- Recieved --> */}
        <div className=" flex max-w-[90%] flex-col gap-2 rounded-r-md rounded-tl-md bg-neutral-50 p-4 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
          <div className="text-xl">
            I'm sorry to hear that. Let me guide you through the process to
            resolve it. Could you please provide your username?
          </div>
        </div>
      </div>
    
  );
};

export default Message;
