import { Component, OnInit } from '@angular/core';
import { GetSpaceXListService } from './services/get-space-xlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lists: any;
  constructor(private getSpaceXListService: GetSpaceXListService){}

  ngOnInit(){
    this.getSpaceXListService.getInitialList().subscribe((res) => {
       this.lists = res;
    })

  }

  getFilteredList(event){
    this.getSpaceXListService.getFilteredList(event).subscribe((res) => {
       console.log(res);
       this.lists = res;
    })
  }
}
