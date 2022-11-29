import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-passenger-data',
  templateUrl: './view-passenger-data.component.html',
  styleUrls: ['./view-passenger-data.component.css']
})
export class ViewPassengerDataComponent {


  passenger:any =[]

  constructor(private api:ApiService){
    api.fetchPassenger().subscribe(

      (response)=>{
        this.passenger=response;
      }
    )
  }

}
