// import { useAppContext } from "./libs/Contextlibs";
import Child from './Child';

function Parent(){
    // const {
    //     counter,
    //     setCounter
    //   } = useAppContext();

    return(
        <div>
            <h2>Grandchild</h2>
            <Child />
        </div>
        
    );
}

export default Parent;