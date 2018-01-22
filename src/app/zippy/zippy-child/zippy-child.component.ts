import { zippyAnimation } from './../../_animations/zippy.animation';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy-child',
  templateUrl: './zippy-child.component.html',
  styleUrls: ['./zippy-child.component.css'],
  animations: [ zippyAnimation ]
})
export class ZippyChildComponent implements OnInit {

  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
  }

}
