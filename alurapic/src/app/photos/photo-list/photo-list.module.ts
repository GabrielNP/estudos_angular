import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './../../shared/components/card/card.module';
import { FilterByDescriptionPipe } from './filter-br-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    FilterByDescriptionPipe,
    LoadButtonComponent,
    PhotoListComponent,
    PhotosComponent,
    SearchComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    PhotoModule,
  ]
})
export class PhotoListModule {}
