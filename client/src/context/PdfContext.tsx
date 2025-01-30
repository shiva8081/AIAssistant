import { createContext, useContext,useState,useEffect,ReactNode } from "react";



// create the context value type
interface PdfContextType {
    pdfText:string | null;
    pdfUrl:string | null;
    setPdfText:(text:string | null) => void;
    setPdfUrl:(url:string | null) => void;
}
const PdfContext=createContext<PdfContextType | undefined>(undefined);
export const usecontext=()=>{
    const context=useContext(PdfContext);
    if(!context){
        throw new Error("usecontext must be used within a PdfContextProvider");
    }
    return context;
}

interface PdfContextProviderProps{
    children:ReactNode;
}
export const PdfContextProvider=({children}:PdfContextProviderProps)=>{
    const [pdfText,setPdfText]=useState<string | null>(null);
    const [pdfUrl,setPdfUrl]=useState<string | null>(null);
    
    return <PdfContext.Provider value={{pdfText,pdfUrl,setPdfText,setPdfUrl}}>{children}</PdfContext.Provider>
}