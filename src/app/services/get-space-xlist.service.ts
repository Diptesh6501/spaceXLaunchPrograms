import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetSpaceXListService {

  constructor(
    public http: HttpClient

  ) { }

  getInitialList(){
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=50');
  }

  getFilteredList(filterCriteria){
     const url = `https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=${filterCriteria.sucessfulLaunch}&amp;land_success=${filterCriteria.sucessfulLanding}&amp;launch_year=${filterCriteria.year}`;
     console.log(url);
    return this.http.get(url);

  }
}
