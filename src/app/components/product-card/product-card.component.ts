import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {DogService} from "../../services/dog.service";
import {DogModel} from "../../models/dog.model";
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor(protected dogService: DogService) {
  }


  @Input() dog!: DogModel


}
