import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {interval, take, tap} from "rxjs";
import {ProductCardComponent} from "./ui/product-card/product-card.component";

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class InputOutputComponent {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
