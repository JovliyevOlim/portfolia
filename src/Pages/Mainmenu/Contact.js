import {Link} from "react-router-dom";
import Shadow from "../../image/mask.jpg";

function Contact({video,active,classnames}){

    return(
        <div className={`text ${active}`}>
            <video src={video} autoPlay muted  loop >
            </video>
            <img className={`mask`} src={Shadow} alt=""/>
          <div className="row">
              <div className="col-md-2 mt-5">
                  <ul className="source2">
                      <li><Link className={'d-flex justify-content-end mb-5'}><img className={'contactimage'} src={classnames.phone} alt="####"/></Link></li>
                      <li><Link className={'d-flex justify-content-end mb-5'}><img className={'contactimage'} src={classnames.gmail} alt="####"/></Link></li>
                      <li><Link className={'d-flex justify-content-end'}>     <img className={'contactimage'} src={classnames.telegram} alt="####"/></Link></li>
                  </ul>
              </div>
              <div className="col-md-10 contacttext">
                    <h3 className={'text-end h2'}> +99890-124-86-64</h3>
                    <h3 className={'text-end h2'}> olimjovliyev98@gmail.com</h3>
                    <h3 className={'text-end h2'}> @o_jovliyev</h3>
              </div>
          </div>

        </div>
    )
}
export default Contact