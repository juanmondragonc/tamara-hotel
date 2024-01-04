import React from "react";
import {
  Container,
  Button,
  Image,
  Navbar,
  Offcanvas,
  Col,
  Row
} from 'react-bootstrap';

import { Routes, Route, Link } from "react-router-dom";
import Rooms from './views/Rooms';
import Home from './views/Home';
import Hotel from './views/Hotel';
import './App.css';
import LogoTH from './elements/images/logoTH.png';
import Menu from './elements/images/menu.png';
import Line02 from './elements/images/line02.jpg';
import TamaraImg from './elements/images/tamara01.png';


class App extends React.Component{
  constructor(props){
    super(props);
    this._isMounted = false;
    this.state = {
      isVisible: false,
      expanded: false,
      timerOver: false,
      dataTexts: [],
      dataRooms: [],
      dataImages: [],
      dataImageRooms: [],
      languaje: 'ES',
      bookingES: "RESERVA HOY",
      bookingEN: "BOOKING TODAY",
      menuES: "MENÚ",
      menuEN: "MENU",     
      roomsES: "HABITACIONES",
      roomsEN: "ROOMS",
      hotelES: "EL HOTEL",
      hotelEN: "THE HOTEL",
      addressES: "DIRECCIÓN",
      addressEN: "ADDRESS",
      contactES: "CONTACTO",
      contactEN: "CONTACT"
    }
  }
  componentDidMount(){
    this._isMounted = true;
    this._isMounted && this.getTexts("ES");
    this._isMounted && this.getRooms("ES");
    this._isMounted && this.getRoomsImage();
    this._isMounted && this.getImages();
    if(!this.state.isVisible){
      setTimeout(() => { 
        this.setState({isVisible: true});
      }, 3000)
    }
    else {
      this.setState({isVisible: false});
    }
  }

  setExpanded(expanded){
    this.setState({expanded:expanded})
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getTexts=async(lang)=>{
    this.setState({languaje: lang});
    await fetch(`https://ws.tamarahotel.mx/texts.php?lang=${lang}`)
    .then(response => response.json())
        .then(data => {
            this._isMounted && this.setState({dataTexts: data});
        })
  }

  getRooms=async(lang)=>{
    this.setState({languaje: lang});
    await fetch(`https://ws.tamarahotel.mx/rooms.php?lang=${lang}`)
    .then(response => response.json())
        .then(data => {
            this._isMounted && this.setState({dataRooms: data});
        })
  }

  getRoomsImage=async()=>{
    await fetch(`https://ws.tamarahotel.mx/rooms_image.php`)
    .then(response => response.json())
        .then(data => {
            this._isMounted && this.setState({dataImageRooms: data});
        })
  }

  getImages=async()=>{
    await fetch(`https://ws.tamarahotel.mx/images.php`)
    .then(response => response.json())
        .then(data => {
            this._isMounted && this.setState({dataImages: data});
        })
  }

  getLang=(lang)=>{
    this.getTexts(lang);
    this.getRooms(lang);
  }

  Booking(){
    window.open("https://wubook.net/wbkd/wbk/?lcode=1638806541", "_blank")
  }



  render(){
    const {
      dataTexts, dataRooms, dataImages, dataImageRooms,
      isVisible, languaje, bookingEN, bookingES, menuEN, menuES,
      roomsES, roomsEN, hotelES, hotelEN, addressEN, addressES,
      contactEN, contactES,
      expanded
    } = this.state;
    
    return (
      <div >
        <Routes>
          <Route path="/" element={
            <Home 
              dataTexts={dataTexts}
              dataImages={dataImages}
            />} 
          />
          <Route path="rooms" element={
            <Rooms 
              dataTexts={dataTexts}
              dataRooms={dataRooms}
              dataImageRooms={dataImageRooms}
            />} />
          <Route path="hotel" element={
            <Hotel 
              dataTexts={dataTexts}
              dataImages={dataImages}
            />} 
          />
        </Routes>
        <Navbar 
          collapseOnSelect
          expanded={expanded}
          expand={false}
        >
            <Container >
              <div className="container-left">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="menu btn-menu-left" onClick={() => this.setExpanded(expanded ? false : "expanded")}   >
                  <Image src={Menu} className="btn-menu"/>
                  <span className="hide">{languaje === "ES" ? (menuES):(menuEN)}</span>
                </Navbar.Toggle>
                <Button onClick={() => this.Booking()} className="btn-book button-book-nav">{languaje === "ES" ? (bookingES):(bookingEN)}</Button>
              </div>
              
              <div className="container-center">
                <Navbar.Brand>
                  <Link to='/'><Image src={LogoTH} className="responsive-logo" /></Link>
                </Navbar.Brand>
              </div>
              <div className="container-right">

                  <a className="bi-white" href="https://www.instagram.com/tamarahotelpuebla" target="_blank" rel="noreferrer"><i className="bi bi-instagram hide" /></a>
                  <span className="hide">|</span>
                  <span className="languaje-span">
                    <Button className={languaje === "ES" ? (""):("underline")} variant="light" onClick={() => this.getLang("EN")}>EN</Button>
                    <Button className={languaje === "ES" ? ("underline"):("")} variant="light" onClick={() => this.getLang("ES")}>ES</Button>
                  </span>
     
              </div>
              
            </Container>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              className="canvasmenu "
              
            >
              <Offcanvas.Header >
                <button onClick={() => this.setExpanded(false)} type="button" className="btn-close" aria-label="Close"></button>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-header-center text-align-menu " >
                <div className="text-padding-menu-right">
                  <Link onClick={() => this.setExpanded(false)} to="/rooms" >{languaje === "ES" ? (roomsES):(roomsEN)}</Link>
                  <br/>
                  <br/>
                  <Link onClick={() => this.setExpanded(false)} to="/hotel">{languaje === "ES" ? (hotelES):(hotelEN)}</Link>
                </div>
                <Row className="bottom-center">
                    <Col>
                      <Button onClick={() => this.Booking()} className="button-book btn-book-full">{languaje === "ES" ? (bookingES):(bookingEN)}</Button>
                    </Col>
                </Row>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>

        {isVisible ? (<></>): (
          <div className="loadingSection">
              <div className="tamara-image-mov">
              </div>
              <img src={TamaraImg} className="responsive-image-tamara " alt="Tamara"/>
              <div className="textPrincipal tamara-text1-mov">
              Vivo la vida en los márgenes de la sociedad, y las reglas de la sociedad normal no aplican a aquellos que viven al márgen.
              </div>
              <div className="textSecundary tamara-text2-mov">
              TAMARA LEMPICKA
              </div>
          </div>
        )}

        <div className="sectionline">
          <Container>
            <Row>
              <Col>
                <Image src={Line02} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="sectionFooter">
            <Container>
                <Row className="col-align-center">
                  <Col md="4" sm="12" className="margin-bottom-2">
                    <Image src={LogoTH} alt="Logo"/>
                  </Col>
                  <Button onClick={() => this.Booking()} className="button-book hide-full">{languaje === "ES" ? (bookingES):(bookingEN)}</Button>
                  <Col md="3" sm="12" className="hide-full margin-bottom-2" >

                  </Col>
                  <Col md="4" sm="6" className="margin-bottom-2">
                      <div className="tamaraGold margin-bottom">{languaje === "ES" ? (addressES):(addressEN)}</div>
                      <div className="fontroom">
                      9 poniente No. 106, Centro Histórico<br/>
                      CP 72000. Puebla, México.
                      </div>
                  </Col>
                  <Col md="4" sm="6" className="margin-bottom-2">
                      <div className="tamaraGold margin-bottom">{languaje === "ES" ? (contactES):(contactEN)}</div>
                      <div className="fontroom">
                      recepcion@tamarahotel.mx
                      <br/>
                      + 52 (2221) 444562
                      <br/>
                      2215 580934
                      </div>
                  </Col>
                  <Col md="3" className="hide-full margin-bottom-2" >
                    <a className="bi-white" href="https://www.facebook.com/Tamara-Hotel-Puebla-108074098363984" target="_blank" rel="noreferrer"><i className="bi bi-facebook" /></a>
                    <span>    </span>
                    <a className="bi-white" href="https://www.instagram.com/tamarahotelpuebla" target="_blank" rel="noreferrer"><i className="bi bi-instagram" /></a>
                  </Col>
                </Row>
            </Container>
        </div>

        <div className="footer">
            <Container >
                <div className="fontroom col-align-center-2">
                © 2022 Tamara Hotel. Todos los derechos reservados | Aviso de Privacidad
                </div>
            </Container>
        </div>
        
      </div>
    );
  }
}

export default App;
