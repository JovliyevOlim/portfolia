import MainMenu from "./Pages/Mainmenu/MainMenu";
import Ocean from './image/ocean.mp4'
import Ocean1 from './image/Beach - 3998.mp4'
import Ocean2 from './image/River - 85373.mp4'
import Ocean3 from './image/Waves - 70796.mp4'
import Ocean4 from './image/Nature - 31377.mp4'
import Shadow from './image/mask.jpg'
import moon from './image/2867927_moon_icon.png'
import sunny from './image/3553111_forecast_hot_summer_sun_sunny_icon.png'
import menu from './image/134216_menu_lines_hamburger_icon.png'
import menu2 from './image/6372973_list_menu_navigation_option_setting_icon.png'
import cancel from './image/211651_close_round_icon (1).png'
import cancel2 from './image/211651_close_round_icon.png'
import face from './image/5305154_fb_facebook_facebook logo_icon (2).png'
import face2 from './image/5305154_fb_facebook_facebook logo_icon (1).png'
import twit from './image/5305170_bird_social media_social network_tweet_twitter_icon.png'
import twit2 from './image/317720_social media_tweet_twitter_social_icon (1).png'
import insta from './image/1161953_instagram_icon (2).png'
import insta2 from './image/1161953_instagram_icon (1).png'
import phone from './image/1608790_phone_icon.png'
import phone1 from './image/1608790_phone_icon (1).png'
import telegram from './image/4375108_logo_telegram_icon.png'
import telegram1 from './image/4375108_logo_telegram_icon (1).png'
import gmail from './image/4691507_gmail_icon.png'
import gmail2 from './image/4691507_gmail_icon (1).png'
import {useState} from "react";
import {Link} from "react-router-dom";


function App() {

    const [classname,setClassname] = useState({
        bg:'',
        colors:'blues',
        display:'',
        display1:'',
        menu:'',
        menu1:'',
        active:'',
        menuimg:menu,
        cancel:cancel,
        face:face,
        twit:twit,
        insta:insta,
        phone:phone,
        telegram:telegram,
        gmail:gmail2,
        link:'',
        video:Ocean,
        vindex:0
    })

    function dayNight(value){
        if(value==='moon'){
            classname.bg='dark'
            classname.colors='colors'
            classname.display='d-flex'
            classname.display1='d-none'
            classname.menuimg=menu2
            classname.cancel=cancel2
            classname.face=face2
            classname.twit=twit2
            classname.insta=insta2
            classname.phone=phone1
            classname.telegram=telegram1
            classname.gmail=gmail
            classname.gmail=gmail
            classname.gmail=gmail
          let  a = {...classname}
            setClassname(a)

        }
        else{
            classname.bg='bg-white'
            classname.colors='blues'
            classname.display='d-none'
            classname.display1='d-flex'
            classname.menuimg=menu
            classname.cancel=cancel
            classname.face=face
            classname.twit=twit
            classname.insta=insta
            classname.phone=phone
            classname.telegram=telegram
            classname.gmail=gmail2
            let  a = {...classname}
        setClassname(a)
       }
    }
    function menuchange(value){
        if(value==='menu'){
            classname.menu='d-none'
            classname.menu1='d-flex'
            classname.active='active'
          let  a = {...classname}
            setClassname(a)
        }
        else{
            classname.menu='d-flex'
            classname.menu1='d-none'
            classname.active=''
        let  a = {...classname}
        setClassname(a)
       }
    }
    function change(){
        console.log(classname.vindex)
        if(classname.vindex===0){
            classname.vindex=classname.vindex+1
            classname.video=Ocean1
            let a = {...classname}
            setClassname(a)
            console.log('chnge')
        }
        else if(classname.vindex===1){
            classname.video=Ocean2
            classname.vindex=classname.vindex+1
            let a = {...classname}
            setClassname(a)
            console.log('chnge')
        }
        else if(classname.vindex===2){
            classname.vindex=classname.vindex+1
            classname.video=Ocean3
            let a = {...classname}
            setClassname(a)
        }
        else if(classname.vindex===3){
            classname.vindex=classname.vindex+1
            classname.video=Ocean4
            let a = {...classname}
            setClassname(a)
        }
        else{
            classname.video=Ocean
            console.log(classname.video)
            classname.vindex=0
            let a ={...classname}
            setClassname(a)
        }
        console.log(classname.video)
    }
  return (
      <div className={`wrapper ${classname.bg}`}>
          <div className={`header`}>
              <a href="#" className={`logos ${classname.colors}`}>LOGO</a>
              <div className={'rightSide'}>
                  <div className="btns dayNight">
                      <img onClick={()=>dayNight('moon')} className={`icon ${classname.display1}`} src={moon} alt="####"/>
                      <img onClick={()=>dayNight('sunny')} className={`icon ${classname.display}`}  src={sunny} alt="####"/>
                  </div>
                  <div className="btns menutoggle">
                      <img onClick={()=>menuchange('menu')} className={`icon1 ${classname.menu}`}  src={classname.menuimg} alt="####"/>
                      <img onClick={()=>menuchange('close')} className={`icon1 ${classname.menu1}`}  src={classname.cancel} alt="####"/>
                  </div>
              </div>
          </div>
          <section className={'main'}>
              <video src={classname.video} autoPlay muted  loop >
              </video>
              <img className={`mask`} src={Shadow} alt=""/>
                        <h2 onClick={change} className={`${classname.colors}`}>Welcome</h2>
              <ul className="source">
                  <li><Link className={'d-flex justify-content-end mb-2'}><img className={'image'} src={classname.face} alt="####"/></Link></li>
                  <li><Link className={'d-flex justify-content-end mb-2'}><img className={'image'} src={classname.twit} alt="####"/></Link></li>
                  <li><Link className={'d-flex justify-content-end'}><img className={'image'} src={classname.insta} alt="####"/></Link></li>
              </ul>
          </section>

          <MainMenu active={classname.active} video={classname.video} classnames={classname}/>



      </div>

  );
}

export default App;
