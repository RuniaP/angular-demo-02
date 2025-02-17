import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductCardComponent} from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-demo02';

  dogs = [
    {
      image: "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg",
      name: "Corgi 1",
      price: 100
    },
    {
      image: "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg",
      name: "Corgi 2",
      price: 200
    },
    {
      image: "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg",
      name: "Corgi 3",
      price: 300
    },
    {
      image: "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg",
      name: "Corgi 4",
      price: 400
    },
    {
      image: "https://img.freepik.com/free-photo/corgi-dog-is-lying-blue-sofa_651396-2378.jpg",
      name: "Corgi 5",
      price: 500
    },
  ]
}
