import { Carousel } from 'react-carousel-minimal';
import Shadow from "../../image/mask.jpg";
import main1 from '../../image/main1.jpg'
import main2 from '../../image/main2.jpg'
import main3 from '../../image/main3.jpg'
import main4 from '../../image/main4.jpg'
import main5 from '../../image/main5.jpg'
import main6 from '../../image/main6jpg.jpg'
import main7 from '../../image/main7.jpg'
import main8 from '../../image/main8.jpg'
import main9 from '../../image/Coast-of-California-and-the-Pacific-Ocean-1024x575.jpg'

function Source({video,active}){
    const data = [
        {
            image: main8,
            caption: `<div>
                  Australia
                     </div>`
        },
        {
            image:main1,
            caption: "Atlantic Ocean"
        },
        {
            image:main2,
            caption: "Pacific Ocean"
        },
        {
            image:main3,
            caption: "Cuba"
        },
        {
            image:main4,
            caption: "Bagams island"
        },
        {
            image:main5,
            caption: "Antarctica"
        },
        {
            image:main6,
            caption: "New Zealand"
        },
        {
            image:main7,
            caption: "Fiji"
        },
        {
            image:main9,
            caption: "California"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
            <div className={`sources ${active}`}>
                <video src={video} autoPlay muted  loop >
                </video>
                <img className={`mask`} src={Shadow} alt="####"/>
                <div className={'caro'}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="1200px"
                        height='530px'
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="100%"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        style={{
                            textAlign: "center",
                            maxWidth: "1200px",
                            maxHeight: '530px',
                            margin:'40px auto',
                            marginTop:'5.5rem',
                            padding:'0 20px 0 0'
                        }}
                    />
                </div>
            </div>

    );

}
export default Source
