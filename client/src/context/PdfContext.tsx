import React, { createContext, useContext, useState } from "react";

// create the context value type
interface PdfContextType {
  pdfUrl: string | null;
  setPdfUrl: (url: string | null) => void;
  pdfText: string;
  setPdfText: (text: string) => void;
}

const PdfContext = createContext<PdfContextType | undefined>(undefined);

export const PdfProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfText, setPdfText] = useState<string>("");

  return (
    <PdfContext.Provider value={{ pdfUrl, setPdfUrl, pdfText, setPdfText }}>
      {children}
    </PdfContext.Provider>
  );
};

export const usePdfContext = () => {
  const context = useContext(PdfContext);
  if (context === undefined) {
    throw new Error("usePdfContext must be used within a PdfProvider");
  }
  return context;
};
