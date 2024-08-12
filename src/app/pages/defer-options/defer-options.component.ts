import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeavyLoadersFastComponent} from "@shared/heavyLoaders/heavy-loaders-fast/heavy-loaders-fast.component";
import {TitleComponent} from "@shared/title/title.component";

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css'
})
export class DeferOptionsComponent {

  constructor() {
    console.log(' Fast creado');
  }
}
