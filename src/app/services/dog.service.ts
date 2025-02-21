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
      image: "https://img.dominos.vn/viber_image_2024-12-20_11-11-37-302.jpg",
      name: "Pizza Hải Sản",
      breed: "Hải sản",
      bio: "Tăng 50% lượng topping protein: Tôm Có Đuôi, Mực Khoanh; Thêm Phô Mai Mozzarella, Xốt Pesto Kem Chanh, Xốt Kim Quất, Xốt Vải, Xốt Xoài, Hành Tây, Cà Chua, Lá Mùi Tây, Xốt Bơ Tỏi Viền Bánh",
      price: 355000,
      id: 0,
    },

    {
      image: "https://img.dominos.vn/PC-MB1000X667px+super+topping%402x.png",
      name: "Pizza Hải Sản sốt hải sản",
      breed: "Sốt đặc biệt",
      bio: "Tăng 50% lượng topping protein: Mưc Khoanh, Tôm Có Đuôi; Thêm Phô Mai Mozzarella, Cà Chua, Hành Tây, Xốt Pesto, Xốt Chanh, Parsley",
      price: 235000,
      gender: "male",
      id: 1
    },

    {
      image: "https://img.dominos.vn/viber_image_2024-12-20_10-48-58-179.jpg",
      name: "Pizza Bơ Gơ Mỹ",
      breed: "Siêu Topping",
      bio: "Tăng 50% lượng topping protein: Thịt Bò Bơ Gơ Nhập Khẩu, Thịt Heo Xông Khói; Thêm Xốt Phô Mai, Xốt Mayonnaise, Phô Mai Mozzarella, Phô Mai Cheddar, Dưa Chuột Muối, Cà Chua, Hành Tây, Nấm, Bột Paprika Hun Khói",
      price: 235000,
      id: 2,
      gender: ''
    },

    {
      image: "https://img.dominos.vn/Pizza+Extra+Topping+(2).jpg",
      name: "Pizza Hải Sản Sốt Mayo",
      breed: "Hải Sản",
      bio: "Tăng 50% lượng topping protein: Tôm, Mực, Thanh Cua; Thêm Phô Mai Mozzarella, Xốt Mayonnaise, Húng Tây, Hành",
      price: 235000,
      id: 3,
      gender: ''
    },
    {
      image: "https://img.dominos.vn/Pizza+Extra+Topping+(3).jpg",
      name: "Pizza Siêu Topping Hải Sản Nhiệt Đới Xốt Tiêu",
      breed: "Hải Sản",
      bio: "Tăng 50% lượng topping protein: Tôm, Mực; Thêm Phô Mai Mozzarella, Phô Mai Cheddar, Thơm, Hành Tây, Xốt Mayonnaise, Xốt Tiêu Đen",
      price: 205000,
      id: 4,
      gender: ''
    },
    {
      image: "https://img.dominos.vn/Pizza+Extra+Topping+(1).jpg",
      name: "Pizza Bò Và Tôm Nướng Kiểu Mỹ",
      breed: "Hải Sản",
      bio: "Tăng 50% lượng topping protein: Tôm, Thịt Bò Mexico; Thêm Phô Mai Mozzarella, Cà Chua, Hành, Xốt Cà Chua, Xốt Mayonnaise Xốt Phô Mai",
      price: 175000,
      id: 5,
      gender: ''
    },
    {
      image: "https://img.dominos.vn/Pizza+Extra+Topping+(4).jpg",
      name: "Pizza Dăm Bông Dứa Kiểu Hawaiian",
      breed: "Siêu Topping",
      bio: "Tăng 50% lượng topping protein: Thịt Dăm Bông; Thêm Phô Mai Mozzarella, Dứa, Xốt Mayonnaise, Xốt Cà Chua",
      price: 205000,
      id: 6,
      gender: ''
    }
  ];
}
