import { useAppContext } from "../libs/Contextlibs";
import Grandchild from './Grandchild';

function Child(){
    const {
        counter,
        setCounter
    } = useAppContext();

    const handleCounter = () => {
        if(counter<10){
            setCounter(counter+1);
        }
    }

    return(
        <div>
            <h2>Child</h2>
            <button onClick={handleCounter}>Increment</button>
            <Grandchild />
        </div>
        
    );
}

export default Child;