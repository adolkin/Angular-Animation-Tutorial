import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';

export const bounceOutLeftAnimation = animation(
  animate('0.5s ease-out', keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
  ]))
)

export const slideAnimation = trigger('slide', [
  transition(':enter', [
    animate(500,
      style({ transform: 'translateX(-10px)' }))
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation)
  ),
])

export const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
  }
})

export const fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)
  )
])