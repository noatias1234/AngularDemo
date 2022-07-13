import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  links = ['Map entities', 'Map Repository'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
