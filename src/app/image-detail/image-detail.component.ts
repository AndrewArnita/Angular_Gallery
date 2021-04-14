import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from './shared/image-service.service';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image:any

  constructor(private imageService:ImageServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.image = this.imageService.getImage(+ this.route.snapshot.params['id'])
  }

}
