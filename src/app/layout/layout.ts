import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Copyright } from '../copyright/copyright';
import { outletRoutes } from '../app.routes';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, RouterOutlet, MatTabsModule, Copyright],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  public routerLinks = outletRoutes.filter((route) => route.path !== '**');

  protected activeLink = this.routerLinks[0];

  protected onActivate($event: unknown): void {
    this.activeLink = this.routerLinks.find((rLinks) => $event instanceof rLinks.component) ?? this.routerLinks[0];
  }
}
