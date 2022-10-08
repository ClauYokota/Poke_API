import { Component } from '@angular/core';
import { Pokemon } from './models/poke';
import { PokeServiceService } from './poke-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-poke';

  constructor(
  ){}


}
