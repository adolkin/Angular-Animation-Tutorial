import { trigger, state, style, animate, transition, group } from '@angular/animations';

export const groupAnimation = trigger('flyInOut', [
  state('in', style({ 
    width: 120, 
    transform: 'translateX(0)', 
    opacity: 1 })),
  transition('void => *', [
    style({ 
      width: 10, 
      transform: 'translateX(50px)', 
      opacity: 0 }),
    group([
      animate('3s 1s ease', style({
        transform: 'translateX(0)',
        width: 200
      })),
      animate('3s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition('* => void', [
    group([
      animate('4s ease', style({
        transform: 'translateX(50px)',
        width: 10
      })),
      animate('4s 2s ease', style({
        opacity: 0
      }))
    ])
  ])
])
