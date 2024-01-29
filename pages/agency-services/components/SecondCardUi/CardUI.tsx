import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery (make sure it's installed in your project)

const CreditCardComponent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
      let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
      let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
      let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
      let text_shadow_x = getTransformValue(
        event.clientX,
        window.innerWidth,
        28
      );
      let text_shadow_y = getTransformValue(
        event.clientY,
        window.innerHeight,
        28
      );

      $('.floating').css(
        'transform',
        'rotateX(' + card_y / 1 + 'deg) rotateY(' + card_x + 'deg)'
      );
      $('.floating').css(
        'box-shadow',
        -card_x + 'px ' + card_y / 1 + 'px 55px rgba(0, 0, 0, .55)'
      );
      $('.svg').css(
        'filter',
        'drop-shadow(' +
          -shadow_x +
          'px ' +
          shadow_y / 1 +
          'px 4px rgba(0, 0, 0, .6))'
      );
      $('.text').css(
        'text-shadow',
        -text_shadow_x + 'px ' + text_shadow_y / 1 + 'px 6px rgba(0, 0, 0, .8)'
      );
    };

    const getTransformValue = (v1, v2, value) => {
      return (((v1 / v2) * value - value / 2) * 1).toFixed(1);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      $('body').removeClass('active');
    }, 2200);
  }, []);

  return (
    <div className="active">
      <div className="floating">
        <div className="thickness"></div>
        <div className="thickness"></div>
        <div className="thickness"></div>
        <div className="card_body">
          <div className="paypal_center svg"></div>
          <div className="logo svg"></div>
          <div className="paywave svg"></div>
          <div className="chips svg"></div>
          <div className="card_no text">1234-5678-9012-3456</div>
          <div className="valid text">
            VALID <br /> THUR
          </div>
          <div className="valid_date text">12/30</div>
          <div className="holder text">Suraj</div>
          <div className="mastercard_icon svg"></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardComponent;
