import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { experiences } from '../shared/experience';

@Component({
  selector: 'app-experience',
  imports: [MatExpansionModule, MatIconModule, MatDividerModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = experiences;
}
