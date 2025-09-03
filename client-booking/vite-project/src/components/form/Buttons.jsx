import { Button } from "../ui/button";
import { Loader } from 'lucide-react';

const Buttons = ({ text ,isPending }) => {
  return (<Button 
    disabled={isPending}
    className= "capitalize mt-2">
        {isPending 
            ?<>
              <Loader className="animate-spin" />
              <span>Loading....</span>
             </>
            :<p>{text}</p>
        }
    </Button>
  );
};
export default Buttons;