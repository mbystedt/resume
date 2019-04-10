import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { skillSetArr, SkillSet } from '../shared/skill-set';

/**
 * Component that displays a searchable table of various skills.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public filter: string = '';
  public displayedColumns: string[] = ['star', 'name', 'experience'];

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  public dataSource = new MatTableDataSource<SkillSet>(skillSetArr.sort((a, b) => {
    if (a.weight === b.weight) {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  }
  ));

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      return data.name.toLowerCase().indexOf(filter) !== -1 || (data.tags && data.tags.indexOf(filter) !== -1);
    }
  }

  public setFilter(filter: string): void {
    this.filter = filter;
    this.dataSource.filter = filter.toLowerCase();
  }
}
