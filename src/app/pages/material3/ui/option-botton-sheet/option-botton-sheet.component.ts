import { Component } from '@angular/core';
import {MatListItem, MatListItemTitle, MatNavList} from "@angular/material/list";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-option-botton-sheet',
  standalone: true,
  imports: [
    MatNavList,
    MatListItemTitle,
    MatLine,
    MatListItem
  ],
  templateUrl: './option-botton-sheet.component.html',
  styleUrl: './option-botton-sheet.component.css'
})
export class OptionBottonSheetComponent {
  openLink(event: MouseEvent) {
    console.log('openLink', event);
  }
}
