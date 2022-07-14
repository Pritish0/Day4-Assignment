import { useAppContext } from "../libs/Contextlibs";

function Grandchild(){
    const {
        counter,
        setCounter
    } = useAppContext();

    return(
        <div>
            <h2>Grandchild</h2>
            <br/>
            {counter}
        </div>
        
    );
}

export default Grandchild;