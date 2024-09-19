




const Pdfview = ({pdf,pdfViewerRef}:{pdf:string,pdfViewerRef: React.RefObject<HTMLDivElement> }) => {
  
  return (

        <div ref={pdfViewerRef} className="  overflow-auto ">
          <div className=" inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg p-4">
              <iframe
                src={pdf}
                title="Uploaded PDF"
                className="w-full h-[calc(100vh-300px)] border-none"
              />
            </div>
          </div>
        </div>
  )
}

export default Pdfview
