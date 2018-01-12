import { CallbackComponent } from './callback/callback.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { AutoComponent } from './auto/auto.component';
import { BasicComponent } from './basic/basic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { EnterLeaveStatesComponent } from './enter-leave-states/enter-leave-states.component';
import { TimingComponent } from './timing/timing.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'enterleave', component: EnterLeaveComponent },
  { path: 'enterleavestates', component: EnterLeaveStatesComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'timing', component: TimingComponent },
  { path: 'multistep', component: MultiStepComponent },
  { path: 'group', component: GroupsComponent },
  { path: 'callback', component: CallbackComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
