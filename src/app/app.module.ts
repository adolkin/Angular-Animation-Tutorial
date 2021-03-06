import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroService } from './hero.service';
import { EnterLeaveComponent } from './enter-leave/enter-leave.component';
import { EnterLeaveStatesComponent } from './enter-leave-states/enter-leave-states.component';
import { AutoComponent } from './auto/auto.component';
import { TimingComponent } from './timing/timing.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { GroupsComponent } from './groups/groups.component';
import { CallbackComponent } from './callback/callback.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyChildComponent } from './zippy/zippy-child/zippy-child.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EnterLeaveComponent,
    EnterLeaveStatesComponent,
    AutoComponent,
    TimingComponent,
    MultiStepComponent,
    GroupsComponent,
    CallbackComponent,
    TodosComponent,
    ZippyComponent,
    ZippyChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
