import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animación de entrada para elementos
export const fadeInUp = (element) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    }
  });
};

// Animación para el menú
export const menuAnimation = (menu) => {
  gsap.from(menu, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
};

// Animación para las tarjetas
export const staggerCards = (cards) => {
  gsap.from(cards, {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: cards[0],
      start: "top 80%",
    }
  });
};

// Animación para el hero
export const heroAnimation = (hero) => {
  gsap.from(hero, {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out"
  });
};

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
}; 