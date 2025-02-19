import { Component } from '@angular/core';
import {DogService} from '../../services/dog.service';
import {ProductCardComponent} from '../../components/product-card/product-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( private dogService: DogService ) {
    console.log(this.dogService.dogs)
  }

  get dogs() {
    return this.dogService.dogs;
  }
}
