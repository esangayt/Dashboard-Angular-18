import { Component } from '@angular/core';
import {HeavyLoadersFastComponent} from "@shared/heavyLoaders/heavy-loaders-fast/heavy-loaders-fast.component";
import {HeavyLoadersSlowComponent} from "@shared/heavyLoaders/heavy-loaders-slow/heavy-loaders-slow.component";
import {TitleComponent} from "@shared/title/title.component";

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    HeavyLoadersFastComponent,
    HeavyLoadersSlowComponent,
    TitleComponent
  ],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.css'
})
export class DeferViewsComponent {

  constructor() {

    console.log('cargado created');
  }
}
