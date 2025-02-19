import { Injectable } from '@angular/core';
import {DogModel} from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() {}

  getDogDetail(id: number) {
    const dog = this.dogs.find((e) => e.id == id)
    console.log(dog)
    return dog;
  }

  dogs : DogModel[] =  [
    {
      image: "https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg",
      name: "Buddy",
      breed: "Golden Retriever",
      bio: "Buddy is a Golden Retriever. He is very friendly and loves to play fetch.",
      price: 1000,
      id: 0,
    },

    {
      image: "https://thuythithi.com/wp-content/uploads/2021/07/7-giong-cho-mat-xe-duoc-nhieu-nguoi-yeu-thich-nhat.jpeg",
      name: "Lamie",
      breed: "Poodle",
      bio: "Lamie is a Poodle. She is very playful and loves to cuddle.",
      price: 300,
      gender: "male",
      id: 1
    },

    {
      image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-cho-28.jpg",
      name: "Lucky",
      breed: "Husky",
      bio: "Lucky is a Husky. He is very energetic and loves to run.",
      price: 500,
      id: 2,
      gender: ''
    },

    {
      image: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-cho-cute-de-thuong-nhat.jpg",
      name: "Lubaba",
      breed: "Poodle",
      bio: "Lubaba is a Poodle. She is very friendly and loves to play fetch.",
      price: 400,
      id: 3,
      gender: ''
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_NzLUroAee39JTsSwiHiF_N_Coyts7lsGA&s",
      name: "Lubaba",
      breed: "Poodle",
      bio: "Lubaba is a Poodle. She is very friendly and loves to play fetch.",
      price: 400,
      id: 4,
      gender: ''
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-zWKqpcTC4wKfAF9M4A1tJepo6kiyN8hlw&s",
      name: "Lubaba",
      breed: "Poodle",
      bio: "Lubaba is a Poodle. She is very friendly and loves to play fetch.",
      price: 400,
      id: 5,
      gender: ''
    },
    {
      image: "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/4/13/benh-dai-1-1713028875976268311752-0-0-637-1020-crop-1713028879956712337240.gif",
      name: "Lubaba",
      breed: "Poodle",
      bio: "Lubaba is a Poodle. She is very friendly and loves to play fetch.",
      price: 400,
      id: 6,
      gender: ''
    }
  ];
}
