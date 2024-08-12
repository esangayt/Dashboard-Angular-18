import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loaders-fast.component.html',
  styleUrl: './heavy-loaders-fast.component.css'
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoadersFastComponent created');
  }
}
