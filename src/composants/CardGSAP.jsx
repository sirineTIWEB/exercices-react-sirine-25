import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function CardGSAP(props) {
    
      const cardsRef = useRef([]);
    
      useEffect(() => {
        const cards = cardsRef.current;
        // Animation d'entrée initiale 
        gsap.fromTo(cards, {
          y: 50, opacity: 0, scale: 0.8
        }, {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out"
        });
    
        // Animation au survol pour chaque carte 
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, scale: 1.05, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
    
        });
    
        return () => {
          cards.forEach(card => {
            gsap.killTweensOf(card);
          });
        };
      }, []);
    
      const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
          cardsRef.current.push(el);
        }
    
      };

    return (
        <div ref={addToRefs} className={`card ${props.colorClass}`}>
            <div className="card-glow"></div>

            <div className="card-icon-wrapper">
                <span className="card-icon">{props.icon}</span>
            </div>

            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">
                {props.description}
            </p>
        </div>
    )
}

export default CardGSAP;