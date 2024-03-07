import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import './team.css'
export const Activities = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Our Events</h2>
                        <p> JUST A DUMMY IMAGE ;) <br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div class="row1">   
                           <img src="https://imgs.search.brave.com/1GMTHsb76JMR5fmEqPZoEfPmnBK8CgcDHDZ8Hp0Y6ps/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b25saW5lLXRlY2gt/dGlwcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/Y29tcHJlc3MtaW1h/Z2UuanBn" alt="Profile Image" width={10} height={10} />           
                        </div>
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
