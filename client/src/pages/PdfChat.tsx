import { useLocation } from "react-router-dom";

const PdfChat = () => {
    const location=useLocation();
    const pdf  =location.state?.pdf;
    console.log(location.state)
    console.log(pdf)

    
  return (
    <div className="op mt-[72px] flex h-screen ">
      <div className="op w-1/2">
      <div className="  op  flex items-center justify-center">
        <div className=" op  bg-white rounded-lg p-4">
          <iframe
            src={pdf }
            title="Uploaded PDF"
            className="  border-none"
          />
        </div>
      </div>
       </div>
      <div className="op w-1/2"></div>
      
    </div>
  )
}

export default PdfChat
