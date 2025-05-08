import { fadeInUp, menuAnimation, staggerCards, heroAnimation, parallaxEffect } from './animations.js';

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Animación del menú
  const menu = document.querySelector('nav');
  if (menu) menuAnimation(menu);

  // Animación del hero
  const hero = document.querySelector('.hero');
  if (hero) heroAnimation(hero);

  // Animación de las tarjetas
  const cards = document.querySelectorAll('.card');
  if (cards.length) staggerCards(cards);

  // Animación de elementos al hacer scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => fadeInUp(element));

  // Efecto parallax
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(element => parallaxEffect(element));

  // Menú hamburguesa
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuButton.classList.toggle('active');
    });
  }
}); 