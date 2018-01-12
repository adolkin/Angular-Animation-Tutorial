// trigger apply where you want animation, called [@heroState]
// state is a string value that you define in your application code. 
// In the example, the states 'active' and 'inactive' are based on the logical state of hero objects. 
// style: specify the end styles of each state.
// transitions between the states. Each transition controls the timing of switching between one set of styles and the next
// animate
import { trigger, state, style, animate, transition } from '@angular/animations';

// basicAnimation is name of Animation so other components can import
// 'heroState' is name of trigger to comapre with 'inactive' and 'active'
// an animation state is  a string
export const basicAnimation = trigger('heroState', [
  state('inactive', style({
    backgroundColor: '#eee',
    transform: 'scale(1)'
  })),
  state('active', style({
    backgroundColor: '#cfd8dc',
    transform: 'scale(1.1)'
  })),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out'))
])
