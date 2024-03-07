import React, { useEffect } from 'react';
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  useEffect(() => {
    const skillBx = document.querySelector('.skill-bx');
    skillBx.classList.add('animated');
  }, []);

  return (
    <section className="skill" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus nec nulla malesuada congue. Phasellus at libero nec nisl euismod placerat. Donec vestibulum, libero at congue fermentum, magna lorem aliquet odio, vel fermentum massa libero et velit. Suspendisse potenti. Sed ut risus mi. Sed ultrices magna eu risus lobortis, at ullamcorper mauris pulvinar. Sed efficitur laoreet leo, vitae fermentum mauris aliquet nec. Duis sit amet risus ac odio eleifend vehicula a ut tortor. In hac habitasse platea dictumst. Vivamus eu arcu vitae purus lobortis ultrices. Sed id nisi eu mauris condimentum fermentum. Sed vel turpis nec libero condimentum dapibus. Duis ultrices felis sit amet ligula efficitur, eu elementum justo scelerisque. Sed vel velit nec nulla eleifend tempus. Vivamus nec faucibus libero.
</p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};