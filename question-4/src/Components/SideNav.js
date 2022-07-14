import { useAppContext } from "../libs/Contextlibs";

function SideNav(){
    const {
        activeProfileId
    } = useAppContext();

    return(
        <div className="sidenav">
            <strong>Sidenav</strong> &nbsp;
            activeProfileId: {activeProfileId}
        </div>
    );
}

export default SideNav;