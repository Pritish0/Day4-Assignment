import { useAppContext } from "../libs/Contextlibs";

function TopNav(){
    const {
        title
    } = useAppContext();

    return(
        <div>
            <strong>TopNav</strong> &nbsp;
            title: {title}
        </div>
    );
}

export default TopNav;