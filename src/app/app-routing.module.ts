import { BasicComponent } from './basic/basic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'enterleave', component: EnterLeaveComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
