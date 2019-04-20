import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public names: string[] = [
    'dan',
    'daniel',
    'dan',
    'dan',
    'dan',
    'dan',
    'dan',
    'shimon',
    'moshe',
    'yaniv',
    'yossi'
  ];

  public filteredNames: string[];

  constructor() {
    console.log(name);
  }

  ngOnInit() {
  }

  public onInput(value: string): void {
    this.filteredNames = this.names.filter((name: string) => {
      return name.includes(value);
    });
    this.filteredNames = this.filteredNames.slice(0, 5);
  }
}
