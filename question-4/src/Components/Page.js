import { useAppContext } from "../libs/Contextlibs";
import Profile from './Profile';

function Dashboard(){
    const {
        username
    } = useAppContext();

    return(
        <div>
            <strong>Page</strong> &nbsp;
            username: {username}
            <br/>
            <Profile/>
        </div>
    );
}

export default Dashboard;