import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TitleComponent} from "@shared/title/title.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export class ChangeDetectionComponent {
  public currentFramework = computed(() =>
    `Current framework is ${this.frameworkAsSignal().name} ${this.frameworkAsSignal().version}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    version: '12.0.0'
  })

  public frameworkAsProperty = signal({
    name: 'Angular',
    version: '14.0.0'
  })

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(frame => ({
        ...frame, version: '13.0.0'
      }))
      console.log('Signal updated')
    }, 3000);

  }
}
