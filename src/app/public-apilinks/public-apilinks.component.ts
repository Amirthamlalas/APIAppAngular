import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-apilinks',
  templateUrl: './public-apilinks.component.html',
  styleUrls: ['./public-apilinks.component.css']
})
export class PublicAPILinksComponent {

  links:any=[]
  constructor(private api:ApiService){
    api.fetchAPILinks().subscribe(

      (response)=>{
        this.links=response;
      }
    )
  }
}
