import React from "react";
import { 
    Container,
    Row,
    Col,
    Image,
    } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RoomsSlider from '../components/Roomslider';
import TamaraImg02 from '../elements/images/tamara02.png';
import Line01 from '../elements/images/line01.jpg';
import LogoRooms from '../elements/images/img01.png';
import WelcomeLine from '../elements/images/welcomeLine01.jpg';


class Home extends React.Component {


    getItem(name){
        return this.props.dataTexts.map((text, i) => {
            var value = "";
            if(text.name === name){
                value = text.text;
            }
            return value;
        })
    }

    getImages(name){
        const found = this.props.dataImages.filter(row => {
            return row.name === name;
        })
        var image;
        if(found.length){
            image = "data:image/png;base64," + found[0].image;
        }
        return image;
    }

    render(){
        
        return (
            <div>
                    <div className="section1">
                    
                        <Container className="col-align-center">
                            <Row>
                                <Col lg="8" xl="7"><h2>{this.getItem("home01")}</h2></Col>
                                <Col sm="2" md="3" lg="5" xl="6" className="hide"></Col>
                            </Row>
                            <Row className="bottom-center">
                                <Col>
                                    <Link variant="secondary" className="btn btn-secondary" to="/rooms">{this.getItem("home02")}</Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section2">
                    <div className="all-center hide"><Image className="welcome-line hide" src={WelcomeLine}/></div>
                    <Container >
                        
                        <Row className="margin-small">
                            <Col md="6" sm="6"  className="">
                                <div className="margin-bottom tamaraGold">{this.getItem("home03")}</div>
                                <h4  className="line-height col-padding-right-2">{this.getItem("home04")}</h4>
                                <div className="parrafo-tamara margin-bottom padding-right" >{this.getItem("home05")}</div>
                            </Col>
                            <Col md="6" sm="6" >
                                <Image src={this.getImages("home01")} className="responsive-image "/>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <div className="section3">
                    <Container className="slick-padding">
                        <Row>
                            <Col md="12">
                                <Image src={LogoRooms} className="margin-bottom-3"/>
                            </Col>
                            <Col md="12" >
                                <h4 className="margin-bottom-3">{this.getItem("home06")}</h4>
                            </Col>
                            <Col md="1" className="hide"></Col>
                            <Col md="10" xs="12" className="margin-bottom-3">
                                <RoomsSlider dataImageRooms={this.props.dataImages} className=""/>                  
                            </Col>
                            <Col md="1" className="hide"></Col>
                            <Col md="12">
                                <div className="tamara-white">{this.getItem("home07")}</div>
                            </Col>
                            <Col md="12" className="margin-bottom-3 without-margin">
                                <Image src={Line01} className="responsive-image-line-horizontal" />
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <div className="section4">
                    <Container>
                        <Row className="margin-small row-reverse">
                            <Col md="6" sm="6"  className="col-padding-left">
                                <div className="tamara-white margin-bottom">{this.getItem("home08")}</div>
                                <h4 className="line-height">{this.getItem("home09")}</h4>
                                <div className="parrafo-tamara margin-bottom ">{this.getItem("home10")}</div>
                            </Col>
                            <Col md="6" sm="6" >
                                <Image src={this.getImages("home02")} className="responsive-image"/>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <div className="section5">
                    <Container>
                        <Row>
                            <Col md="12">
                                <Image src={TamaraImg02} className="section5img margin-bottom"/>
                            </Col>
                            <Col md="12">
                                <h4 className="parrafos">{this.getItem("home11")}</h4>
                            </Col>
                            <Col md="12" className="col-padding-left-2 col-padding-right-2 margin-bottom">
                                <div className="tamaraP03 margin-bottom ">{this.getItem("home12")}</div>
                            </Col>
                            <Col md="12">
                                <div className="tamara-white">{this.getItem("home13")}</div>
                            </Col>
                            <Col md="12" className="margin-bottom without-margin">
                                <Image src={Line01} className="responsive-image-line-horizontal" />
                            </Col>
                        </Row>
                    </Container>
                </div>  
            </div>
        );
    }
}
export default Home;
