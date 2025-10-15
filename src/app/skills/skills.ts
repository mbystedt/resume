import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

import {MatInputModule} from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { skillSetArr, SkillSet } from '../shared/skill-set';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  public filter: string = '';
  public displayedColumns: string[] = ['star', 'name', 'experience'];

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<SkillSet>(skillSetArr.sort((a, b) => {
    if (a.weight === b.weight) {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  }
  ));

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: any, filter: any) => {
      return data.name.toLowerCase().indexOf(filter) !== -1 || (data.tags && data.tags.indexOf(filter) !== -1);
    }
  }

  public setFilter(filter: string): void {
    this.filter = filter;
    this.dataSource.filter = filter.toLowerCase();
  }
}
