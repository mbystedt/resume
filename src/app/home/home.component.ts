import { Component, OnInit } from '@angular/core';

/**
 * The home component displays the header with my name.
 * At non-mobile widths, it also displays the other main components.
 * At mobile widths, it hides the other ones.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
