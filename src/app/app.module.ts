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


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EnterLeaveComponent,
    EnterLeaveStatesComponent,
    AutoComponent
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
