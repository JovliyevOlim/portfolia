import {Link, Route, Switch} from "react-router-dom";
import AboutUs from "./AboutUs";
import Source from "./Source";
import Contact from "./Contact";
import Home from "./Home";
import {useState} from "react";


function MainMenu({active,video,classnames}){

    const [classname, setClassname] = useState({
        link: ''
    })

    function link() {
        classname.link = 'active'
        let a = {...classname}
        setClassname(a)
    }


    return (

        <div className={`navigation ${active}`}>
            <Link to={'/home'} onClick={link} className={'menu'}>Home</Link>
            <Link to={'/source'} onClick={link} className={'menu'}>Source</Link>
            <Link to={'/about_us'} onClick={link} className={'menu'}>About us</Link>
            <Link to={'/contact'} onClick={link} className={'menu'}>Contact</Link>


            <Switch>
                <Route path={'/about_us'} render={() => <AboutUs active={classname.link} video={video}/>}/>
                <Route path={'/source'} render={() => <Source active={classname.link} video={video}/>}/>
                <Route path={'/contact'}
                       render={() => <Contact active={classname.link} video={video} classnames={classnames}/>}/>
                <Route path={'/home'}
                       render={() => <Home active={classname.link} video={video} classnames={classnames}/>}/>
            </Switch>

        </div>
    )
}export default MainMenu