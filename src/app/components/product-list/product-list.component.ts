import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name:string=""
  productQuantity:number=0
  product={
    name: "Iphone",
    price :999,
    color:"red",
    discount:8.2,
    inStock:9,
    pImage:"../../../assets/iphone.png"
  }

  getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }
  incrementQuantity(){
    
    if(this.productQuantity!=this.product.inStock){
      this.productQuantity++;
    }
  }
  decrementQuantity(){
    if(this.productQuantity>0){
      this.productQuantity--;
    }
  }
  // changeName(event:any){
  //   // console.log(event) 
  //   this.name=event.target.value
  // }
}
