import { Component } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RoomsComponent],
   
  templateUrl: './app.component.html',  // this is the seperate file to loat the another file.
  //template: `<h1>Hello Abhay</h1>  <p>Thi is new paragraph<p> `,  // this is inline html and css

  styleUrl: './app.component.scss'

  // mwke the inile css
 // styles : [`h1{color : red};`]
})
export class AppComponent {
  title = 'secondangular';

  role =  'Admin';
}

