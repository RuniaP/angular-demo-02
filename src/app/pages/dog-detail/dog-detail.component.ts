import { Component } from '@angular/core';
import {DogService} from '../../services/dog.service';
import {ActivatedRoute} from '@angular/router';
import {DogModel} from '../../models/dog.model';
@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss'
})
export class DogDetailComponent {

  currentDog!: DogModel | undefined

  constructor(private dogService: DogService,
              private activatedRoute: ActivatedRoute) {

    const { id } = this.activatedRoute.snapshot.params;


    this.currentDog = this.dogService.getDogDetail(id);
  }
}
