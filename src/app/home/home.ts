import { Component } from '@angular/core';
import { Resume } from '../resume/resume';

@Component({
  selector: 'app-home',
  imports: [Resume],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
