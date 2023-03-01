/* global gsap, ScrollTrigger */

gsap.registerPlugin(ScrollTrigger);

const speed = 100;

const scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: '.scroll-element',
  start: 'top top',
  end: '45% 100%',
  scrub: 3
});

scene1.to('.front', {
  y: 6 * speed,
  x: 0,
  scale: 1,
  ease: 'power1.in'
},
0.2
);
