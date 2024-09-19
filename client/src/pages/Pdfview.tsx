const Pdfview = ({
  pdf,
  pdfViewerRef,
}: {
  pdf: string;
  pdfViewerRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={pdfViewerRef} className="op w-full ">
      <div className="  bg-black bg-opacity-0 flex items-center justify-center">
        <div className="  bg-white rounded-lg p-4">
          <iframe
            src={pdf}
            title="Uploaded PDF"
            className=" h-[calc(100vh-200px)] w-[calc(100vw-400px)] border-none"
          />
        </div>
      </div>
    </div>
  )
};

export default Pdfview;
