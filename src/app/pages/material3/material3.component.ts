import { Component } from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {MatButton} from "@angular/material/button";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {OptionBottonSheetComponent} from "./ui/option-botton-sheet/option-botton-sheet.component";

@Component({
  selector: 'app-material3',
  standalone: true,
  imports: [
    MatSlideToggle,
    MatIcon,
    MatBadge,
    MatButton
  ],
  templateUrl: './material3.component.html',
  styleUrl: './material3.component.css'
})
export class Material3Component {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(OptionBottonSheetComponent);
  }
}
