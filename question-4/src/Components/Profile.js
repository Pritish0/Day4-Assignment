import { useAppContext } from "../libs/Contextlibs";

function Dashboard(){
    const {
        username
    } = useAppContext();

    return(
        <div>
            <strong>Profile</strong> &nbsp;
            username: {username}
        </div>
    );
}

export default Dashboard;