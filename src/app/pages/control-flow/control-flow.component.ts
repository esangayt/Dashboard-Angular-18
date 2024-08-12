import {Component, signal} from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
