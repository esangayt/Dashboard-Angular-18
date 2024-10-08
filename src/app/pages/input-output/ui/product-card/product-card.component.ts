import {ChangeDetectionStrategy, Component, Input, input, output} from '@angular/core';
import {Product} from "../../../../interfaces/product.interface";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  // @Input({
  //   required: true,
  // })
  // public product!: Product;
  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
