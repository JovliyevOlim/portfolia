import '../../App.css'
import {useState} from "react";
import Slider from  'react-slick'
import main1 from '../../image/main1.jpg'
import main2 from '../../image/main2.jpg'
import main3 from '../../image/main3.jpg'
import main4 from '../../image/main4.jpg'
import main5 from '../../image/main5.jpg'
import main6 from '../../image/main6jpg.jpg'
import main7 from '../../image/main7.jpg'
import main8 from '../../image/main8.jpg'
import {FaArrowRight, FaArrowLeft} from "react-icons/all";
import Shadow from "../../image/mask.jpg";
import {Carousel} from "react-carousel-minimal";

const images = [main1,main2,main3,main4,main5,main6,main7,main8]

function Home({active,video}){

    const NextArrow = ({onClick}) =>{
        return(
                <div className={'arrow next'} onClick={onClick}>
                    <FaArrowRight/>
                </div>
        )
    }
    const PrevArrow = ({onClick}) =>{
        return(
                <div className={'arrow prev'} onClick={onClick}>
                    <FaArrowLeft/>
                </div>
        )
    }


 const  setting = {
     infinite:true,
     lazyload:true,
     speed:300,
     slidesToShow:3,
     centerMode:true,
     centerPadding:0,
     nextArrow: <NextArrow/>,
     prevArrow: <PrevArrow/>,
     beforeChange: (current,next) => setImageIndex(next)
 }
 const [imageIndex,setImageIndex]  = useState(0)

    return(
        <div className={`sources ${active}`}>
            <img className={`mask`} src={Shadow} alt="####"/>
            <video src={video} autoPlay muted  loop >
            </video>
                <div className="App">
                    <Slider {...setting}>
                        {
                            images.map((img,index)=>(
                                    <div className={index===imageIndex ? 'slide activeSlide' : 'slide'}>
                                        <img src={img} alt={img}/>
                                    </div>
                                )

                            )
                        }
                    </Slider>


            </div>

        </div>


    )
}
export default Home