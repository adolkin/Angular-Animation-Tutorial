import { trigger, state, style, animate, transition } from '@angular/animations';

export const autoAnimation = trigger('shrinkOut', [
  state('in', style({height: '*'})),
  transition('* => void', [
    style({height: '*'}),
    animate(250, style({height: 0}))
  ])
])