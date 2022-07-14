import { useAppContext } from "../libs/Contextlibs";
import TopNav from './TopNav';
import Page from './Page';

function Main(){
    const {
        title,
        username
    } = useAppContext();

    return(
        <div className="main">
            <strong>Main</strong> &nbsp;
            title: {title}, username: {username}
            <br/>
            <TopNav />
            <br/>
            <Page />
        </div>
    );
}

export default Main;