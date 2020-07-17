import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo.service';
import { Photo } from './photos/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos =>
        this.photos = photos,
        err => console.log(err.message)
      );
  }
}
