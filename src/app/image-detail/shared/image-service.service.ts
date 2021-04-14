import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  constructor() { }

  visibleImages = [];

  getImages() {
    return this.visibleImages = this.IMAGES.slice(0);
  }

  getImage(id: number){
    return this.IMAGES.slice(0).find(image => image.id == id)
  }

  IMAGES = [
    {"id": 1, "category": "ferrari", "caption": "ferrari 1!", "url":"assets/img/1.jfif"},
    {"id": 2, "category": "ferrari", "caption": "ferrari 2!", "url":"assets/img/2.jfif"},
    {"id": 3, "category": "ferrari", "caption": "ferrari 3!", "url":"assets/img/3.jfif"},
    {"id": 4, "category": "ferrari", "caption": "ferrari 4!", "url":"assets/img/4.jfif"},
    {"id": 5, "category": "ferrari", "caption": "ferrari 5!", "url":"assets/img/5.jfif"},

    {"id": 6, "category": "boxing", "caption": "boxing 1!", "url":"assets/img/6.jfif"},
    {"id": 7, "category": "boxing", "caption": "boxing 2!", "url":"assets/img/7.jfif"},
    {"id": 8, "category": "boxing", "caption": "boxing 3!", "url":"assets/img/8.jfif"},
    {"id": 9, "category": "boxing", "caption": "boxing 4!", "url":"assets/img/9.jfif"},

    {"id": 10, "category": "coding", "caption": "coding 1!", "url":"assets/img/10.jfif"},
    {"id": 11, "category": "coding", "caption": "coding 2!", "url":"assets/img/11.jfif"},
    {"id": 12, "category": "coding", "caption": "coding 3!", "url":"assets/img/12.jfif"},

    {"id": 13, "category": "swimming", "caption": "swimming 1!", "url":"assets/img/13.jfif"},
    {"id": 14, "category": "swimming", "caption": "swimming 2!", "url":"assets/img/14.jfif"},
    {"id": 15, "category": "swimming", "caption": "swimming 3!", "url":"assets/img/15.jfif"},
  ]
}
