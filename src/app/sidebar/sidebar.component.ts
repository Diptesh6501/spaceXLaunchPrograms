import { Component, OnInit, Output, EventEmitter } from '@angular/core';


interface Filter {
  year: number,
  sucessfulLaunch: boolean,
  sucessfulLanding: boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  years: any;
  sucessfullLaunch = false;
  sucessfullLand = false;

  @Output() filterCriteria = new EventEmitter<any>();
  defaultfilter: Filter = {
    year: 2006,
    sucessfulLaunch: false,
    sucessfulLanding: false

  }

  constructor() { }

  ngOnInit() {
    
    this.years = [
      {year: '2006' , selected:false},
      {year: '2007' , selected:false},
      {year: '2008' , selected:false},
      {year: '2009' , selected:false},
      {year: '2010' , selected:false},
      {year: '2011' , selected:false},
      {year: '2012' , selected:false},
      {year: '2013' , selected:false},
      {year: '2014' , selected:false},
      {year: '2015' , selected:false},
      {year: '2016' , selected:false},
      {year: '2017' , selected:false},
      {year: '2018' , selected:false},
      {year: '2019' , selected:false},
      {year: '2020' , selected:false}
    ]
  }

  emitFilterParameters(filter) {

    if (filter.year) {
      for(let y of this.years){
        if(y.year === filter.year){
          y.selected = true
        } else {
            y.selected = false;
        }
      }
      this.defaultfilter.year = filter.year;
    }
    if (filter.sucessfulLaunch) {
      this.defaultfilter.sucessfulLaunch = filter.sucessfulLaunch;
    }
    if (filter.sucessfulLanding) {
      this.defaultfilter.sucessfulLanding = filter.sucessfulLanding;
    }
    this.filterCriteria.emit(this.defaultfilter);
  }

}
