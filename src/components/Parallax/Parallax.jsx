import React, { useEffect } from 'react';
import './Parallax.css';
import Example1 from '../../assets/SliderCakes/example1.jpg';
import Example2 from '../../assets/SliderCakes/example2.jpg';
import Example3 from '../../assets/SliderCakes/example3.jpg';
import spiderman from '../../assets/SliderCakes/spiderman.jpg';
import Example5 from '../../assets/SliderCakes/example5.jpg';
import Example6 from '../../assets/SliderCakes/example6.jpg';
import Example7 from '../../assets/SliderCakes/example7.jpg';
import Example8 from '../../assets/SliderCakes/example8.jpg';

function Parallax() {
  useEffect(() => {
    const handleParallax = () => {
      const images = document.querySelectorAll('.img-parallax');
      
      images.forEach(img => {
        const imgParent = img.parentElement;
        const speed = img.getAttribute('data-speed');
        const imgY = imgParent.offsetTop;
        const winY = window.scrollY;
        const winH = window.innerHeight;
        const parentH = imgParent.offsetHeight;

        const winBottom = winY + winH;

        if (winBottom > imgY && winY < imgY + parentH) {
          const imgBottom = ((winBottom - imgY) * speed);
          const imgTop = winH + parentH;
          const imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));

          img.style.top = imgPercent + '%';
          img.style.transform = `translate(-50%, -${imgPercent}%)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallax);
    handleParallax(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
      <div className="paralaxBlock z-[50]">
        <img src={Example1} data-speed="-0.95" className="img-parallax" alt="Parallax Speed -1"/>
        <h2 data-speed="1" className="img-parallax pt-20" >Birthday Cakes</h2>
      </div>
      <div className="paralaxBlock">
        <img src={Example2} data-speed="-0.5" className="img-parallax" alt="Parallax Speed 1"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Wedding Cakes</h2>
      </div>
      <div className="paralaxBlock">
        <img src={spiderman} data-speed="-1.2" className="img-parallax" alt="Parallax Speed -0.25"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Themed Cakes</h2>
      </div>
      <div className="paralaxBlock">
        <img src={Example7} data-speed="-1.2"   className="img-parallax" alt="Parallax Speed 0.25"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Baby Shower Cakes</h2>

      </div>
      <div className="paralaxBlock">
        <img src={Example5}  data-speed="-1.2"  className="img-parallax" alt="Parallax Speed -0.75"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Gift Cakes</h2>
      </div>
      <div className="paralaxBlock">
        <img src={Example6} data-speed="-1"  className="img-parallax" alt="Parallax Speed 0.75"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Holiday Cakes</h2>

      </div>
      <div className="paralaxBlock">
        <img src={Example8} data-speed="-0.8"  className="img-parallax" alt="Parallax Speed 0.5"/>
        <h2 data-speed="0.75" className="img-parallax pt-20" >Mini Cakes</h2>

      </div>
    </>
  );
}

export default Parallax;
