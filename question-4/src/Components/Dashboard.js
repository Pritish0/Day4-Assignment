import { useAppContext } from "../libs/Contextlibs";
import SideNav from './SideNav';
import Main from './Main';

function Dashboard(){
    const {
        title,
        username,
        activeProfileId
    } = useAppContext();

    return(
        <div>
            <strong>Dashboard</strong> &nbsp;
            title: {title}, username: {username}, activeProfileId: {activeProfileId}
            <br/>
            <br/>
            <div className="dashboard">
                <SideNav />
                <Main />
            </div>
        </div>
    );
}

export default Dashboard;