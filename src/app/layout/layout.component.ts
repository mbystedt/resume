import { Component, OnInit } from '@angular/core';

/**
 * The main layout component.
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public navLinks = [
    {
      path: '/home',
      label: 'Home'
    },
    {
      path: '/professional',
      label: 'Professional'
    },
    {
      path: '/project',
      label: 'Portfolio'
    },
    {
      path: '/experience',
      label: 'Experience'
    },
    {
      path: '/social',
      label: 'Contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
