import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatGridListModule, MatInputModule, MatPaginatorModule, MatTableModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class AppMaterialModule {}
