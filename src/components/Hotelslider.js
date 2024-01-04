import React from "react";
import Slider from "react-slick";
import ArrowPrev from '../elements/images/arrowPrev.png';
import ArrowNext from '../elements/images/arrowNext.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src={ArrowNext} alt="Arrow Next"
        className={className}
        style={{ ...style, display: "block", width: "6%", height: "auto"}}
        onClick={onClick}
        />

    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img src={ArrowPrev} alt="Arrow Prev"
        className={className}
        style={{ ...style, display: "block", width: "6%", height: "auto"}}
        onClick={onClick}
      />
    );
  }
class Hotelslider extends React.Component{
  renderSlider = () => {
    const found = this.props.dataImageRooms.filter(row => {
      return row.name === "car-hotel";
    })
    if(found.length){
      return found.map((slide,i) => {
        return <div key={i}><img src={"data:image/png;base64," + slide.image} className="responsive-image-slider" alt={"Room" + i}/></div>
      });
    }
    
  }
    render(){
        const settings = {

            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            centerMode: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          };
        return (
            <div >
                <Slider {...settings}>
                  {this.renderSlider()}
                </Slider>
            </div>
        )
    }
}
export default Hotelslider;