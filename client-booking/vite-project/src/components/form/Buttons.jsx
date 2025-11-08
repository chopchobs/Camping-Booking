"use client" // Enable client-side rendering
import { Button } from "../ui/button";
import { Loader } from 'lucide-react';

// Buttons component with loading state
const Buttons = ({ text ,isPending }) => {
  return (
    <Button
      disabled={ isPending }
      variant="default"
      className="w-full h-11 flex items-center 
      justify-center gap-2 bg-black text-white"
    >
      {/* Loader and text */}
      { isPending ? (
        <>
         <Loader className="animate-spin w-4 h-4" />
         <span>Loading...</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
};
export default Buttons;