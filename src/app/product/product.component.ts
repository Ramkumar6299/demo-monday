import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myform;
  Details=[];
  constructor(private fb:FormBuilder) {
    this.myform=this.fb.group(
      {
        'Name' : this.fb.control('',Validators.required),
        'Price' : this.fb.control('',Validators.required),
        'Stock' : this.fb.control('',Validators.required)
      }
    )

   }
   adddata()
  {
    if(this.myform.valid)
    {
   // console.log(this.myform.value)
    this.Details.push(this.myform.value)
    localStorage.setItem('form-data', JSON.stringify(this.Details));
    }
    else{
      alert("Please check your inputs")
    }
  }

  ngOnInit(): void {
  }

}
