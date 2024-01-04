import React from "react";
import { 
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import parse from 'html-react-parser';

class  Rooms extends React.Component {
    getItem(name){
        return this.props.dataTexts.map((text, i) => {
            var value = "";
            if(text.name === name){
                value = text.text;
            }
            return value;
        })
    }
    getImageRooms(name){
        const found = this.props.dataImageRooms.filter(row => {
            return row.name === name;
        })
        var image;
        if(found.length){
            image = "data:image/png;base64," + found[0].image;
        }
        return image;
    }
    renderClassReverse(i){
        if(i%2===0){
            return "col-padding-room"
        }
        else{
            return "row-reverse col-padding-room"
        }
    }
    renderClassAlign(i){
        if(i%2===0){
            return ""
        }
        else{
            return "col-align-right"
        }
    }
    render(){
        return (
            <div>
                <div className="section1Rooms">
                    <Container>
                        <Row className="col-align-center">
                            <h2>{this.getItem("room01")}</h2>
                        </Row>
                    </Container>
                </div>
                <div className="section2middle">
                    <Container style={{"margin-top": "5%"}}>
                        <Row className="margin-small">
                            <Col md="12">
                                <div className="tamaraGold margin-bottom">{this.getItem("room01")}</div>
                                <h4 className="line-height">{this.getItem("room02")}</h4>
                            </Col>
                            <Col md="12">
                                <div className="parrafo-tamara margin-bottom col-padding-left-3 col-padding-right-3" >
                                {this.getItem("room03")}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                    
                </div>
                
                    
                        {this.props.dataRooms.map((room, i)=>{
                            return (
                                <div key={i} className="section2">
                                    <Container  >
                                        <Row className={this.renderClassReverse(i)}>
                                            <Col md="6" sm="6" className={this.renderClassAlign(i)}>
                                                <div className="separation-title">
                                                    <h4 className="line-height">{room.title}</h4>
                                                    <div className="tamaraGold margin-bottom col-padding-right-room">{room.description}</div>
                                                </div>
                                                <div className="separation">
                                                    <div className="margin-bottom">
                                                        <div className="fontsize">{room.title_dim}</div>
                                                        <div className="fontroom">{parse(room.text_dim)}</div>
                                                    </div>
                                                    <div className="margin-bottom">
                                                        <div className="fontsize">{room.title_cap}</div>
                                                        <div className="fontroom">{room.text_cap}</div>
                                                    </div>
                                                    <div className="margin-bottom">
                                                        <div className="fontsize">{room.title_in}</div>
                                                        <div className="fontroom">{room.text_in}</div>
                                                    </div>
                                                    <div className="margin-bottom">
                                                        <div className="fontsize">{room.title_out}</div>
                                                        <div className="fontroom">{room.text_out}</div>
                                                    </div>
                                                    <div className="margin-bottom">
                                                        <div className="fontsize">{room.title_view}</div>
                                                        <div className="fontroom">{room.text_view}</div>
                                                    </div>
                                                    <div className="margin-bottom">
                                                        {room.text_other && <div className="fontsize">{room.title_other}</div> }
                                                        {room.text_other && <div className="fontroom">{room.text_other}</div> }
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="6" sm="6">
                                                <div >
                                                    <Image src={this.getImageRooms(room.name)} className="responsiveImg"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            )
                        })}
            </div>
        );
    }
}
export default Rooms;
