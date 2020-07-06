import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  formValue = []
  constructor() {
    this.formValue = JSON.parse(localStorage.getItem('form-data'))
    console.log(this.formValue)
   }
   remove()
   {
    console.log("removing.....")
    window.localStorage.removeItem('form-data')
   }
   edit()
   {
     console.log("editing will be done")
   }

  ngOnInit(): void {
  }

}
