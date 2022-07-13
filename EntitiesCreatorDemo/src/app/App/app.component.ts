import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MapEntityService } from '../map-entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //file location of the component’s template HTML
  styleUrls: ['./app.component.css'] //file location of the component’s template style-sheet
})
export class AppComponent {
  title = 'EntitiesCreatorDemo';
 
  constructor(private formBuilder: FormBuilder, private mapEntityService:MapEntityService ) { }

  profileForm = this.formBuilder.group({
    title: [''],
    xPosition: [''],
    yPosition: ['']
  });

  saveForm(data:any) {
    console.log('Form data is: ', this.profileForm.value); 
    this.mapEntityService.postMapEntity(data);
  }
}