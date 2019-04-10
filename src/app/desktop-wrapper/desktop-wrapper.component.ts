import { Component, OnInit } from '@angular/core';

/**
 * A composition component that only displays the content at desktop sizes.
 */
@Component({
  selector: 'app-desktop-wrapper',
  templateUrl: './desktop-wrapper.component.html',
  styleUrls: ['./desktop-wrapper.component.scss']
})
export class DesktopWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
