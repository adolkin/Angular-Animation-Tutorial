import { trigger, state, style, animate, transition } from '@angular/animations';

export const enterleaveAnimation = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(100)
  ]),
  transition('* => void', [
    animate(100, style({ transform: 'translateX(100%)' }))
  ])
])