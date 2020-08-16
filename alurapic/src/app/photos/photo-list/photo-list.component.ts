import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photos/photo/photo.service';
import { Photo } from '../../photos/photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService

  ) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos =>
        this.photos = photos,
        err => console.log(err.message)
      );
  }

}
