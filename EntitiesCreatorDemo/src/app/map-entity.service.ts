import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MapEntityService {

  constructor( private http: HttpClient) { }

  postMapEntity(data:any){
    this.http.post('http://localhost:50001/MapEntity', data).subscribe((res)=> console.log(res));
}}
