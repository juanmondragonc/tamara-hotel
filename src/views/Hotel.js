import React from "react";
import { 
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import HotelSlider from '../components/Hotelslider';
import WelcomeLine from '../elements/images/welcomeLine01.jpg';
import Line02 from '../elements/images/line02.jpg';
import Line03 from '../elements/images/line03.jpg';
import Section0201 from '../elements/images/hotel/section02_01.jpg';
import Section0202 from '../elements/images/hotel/section02_02.jpg';
import TamaraImg from '../elements/images/tamara01.png';

class Hotel extends React.Component {

    getItem(name){
        return this.props.dataTexts.map((text, i) => {
            var value = "";
            if(text.name === name){
                value = text.text;
            }
            return value;
        })
    }

    render(){
        return (
            <div>
                <div className="section1Hotel">
                    <Container>
                        <Row className="col-align-center">
                            <h2>{this.getItem("hotel01")}</h2>
                        </Row>
                    </Container>
                </div>

                <div className="section2">
                <div className="all-center hide"><Image className="welcome-line hide" src={WelcomeLine}/></div>
                
                    <Container>
                    
                        <Row className="margin-small">
                        
                            <Col md="6" sm="6" >
                                <div className="margin-bottom tamaraGold">{this.getItem("hotel02")} </div>
                                <h4 className="line-height col-padding-right-2">{this.getItem("hotel03")}</h4>
                                <div className="parrafo-tamara margin-bottom ">{this.getItem("hotel04")}</div>
                            </Col>
                            <Col md="6" sm="6" >
                                <Image src={Section0201} className="responsive-image"/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="sectionline">
                    <Container>
                        <Row>
                        <Col>
                            <Image src={Line02} />
                        </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section3">
                    <Container>
                        <Row>
                            <Col md="12"><div className="margin-bottom tamaraGold">{this.getItem("hotel05")}</div></Col>
                        </Row>
                        <Row>
                            <Col md="12"><h4>{this.getItem("hotel06")}</h4></Col>
                        </Row>
                        <Row>
                            <Col md="12"><div className="parrafo-tamara margin-bottom">{this.getItem("hotel07")}</div></Col>
                        </Row>
                    </Container>
                    <Container className="slick-padding">
                        <Row>
                            <Col md="1" className="hide"></Col>
                            <Col md="10" xs="12" className="margin-bottom-slider"><HotelSlider dataImageRooms={this.props.dataImages} className="margin-bottom-slider"/></Col>
                            <Col md="1" className="hide"></Col>
                        </Row>
                    </Container>
                    
                </div>
                <div className="section2">
                    <Container>
                        <Row className="row-reverse margin-small">
                            
                            <Col md="6" sm="6" className="col-padding-left">
                                <div className="margin-bottom tamaraGold">{this.getItem("hotel08")}</div>
                                <h4>{this.getItem("hotel09")}</h4>
                                <div className="parrafo-tamara ">{this.getItem("hotel10")}</div>
                            </Col>
                            <Col md="6" sm="6" >
                                <Image src={Section0202} className="responsive-image margin-bottom "/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section2middle">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={Line03} className="responsiveImgH"/>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
                <div className="section5">
                    <Container>
                        <Row >
                            <Col md="12" className="margin-bottom">
                                <Image src={TamaraImg} className="section5img" alt=""/>
                            </Col>
                            <Col md="12" className="margin-bottom">
                                <h4>{this.getItem("hotel11")}</h4>
                            </Col>
                            <Col md="12" className="col-padding-left-2 col-padding-right-2 col-align-left">
                                <div className="parrafo-tamara">{this.getItem("hotel12")}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                    
                </div>
            </div>
        );
    }
}
export default Hotel;
