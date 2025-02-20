import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ICategory } from '../../../types';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  // categoryList: ICategory[]=[]
  products$:Observable<any>
  constructor(private productService: ProductService) { 
    this.products$ = productService.getAllCategory().pipe(
      map((item: any) => {
        console.log(item);
        console.log(JSON.stringify(item));
        
        return item
      })
    )
  }

  // getAllCategories = () => {
  //   this.productService.getAllCategory().subscribe((result: any) => {
  //     console.log(result); 
  //      this.categoryList=result
  //   })
  // }
}
