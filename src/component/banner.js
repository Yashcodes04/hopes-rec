import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
 
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
                <h1>H<span className="o">O</span>PES</h1>
                <span className="tagline">The Official Media Club under PES University</span>
                
                  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus nec nulla malesuada congue. Phasellus at libero nec nisl euismod placerat. Donec vestibulum, libero at congue fermentum, magna lorem aliquet odio, vel fermentum massa libero et velit. Suspendisse potenti. Sed ut risus mi. Sed ultrices magna eu risus lobortis, at ullamcorper mauris pulvinar. Sed efficitur laoreet leo, vitae fermentum mauris aliquet nec. Duis sit amet risus ac odio eleifend vehicula a ut tortor. In hac habitasse platea dictumst. Vivamus eu arcu vitae purus lobortis ultrices. Sed id nisi eu mauris condimentum fermentum. Sed vel turpis nec libero condimentum dapibus. Duis ultrices felis sit amet ligula efficitur, eu elementum justo scelerisque. Sed vel velit nec nulla eleifend tempus. Vivamus nec faucibus libero.

<br></br>
</p>
</Col>
            <Col xs={12} md={6} xl={5}>
            
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            
                  
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
