import { BasicComponent } from './basic/basic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { EnterLeaveStatesComponent } from './enter-leave-states/enter-leave-states.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'enterleave', component: EnterLeaveComponent },
  { path: 'enterleavestates', component: EnterLeaveStatesComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
