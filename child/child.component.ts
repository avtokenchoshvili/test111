import { Component, OnInit } from '@angular/core';
import { Review } from '../interface/review';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


hideItems:any = {};


 

 



 
 arrayOne:Review[] = [{
  question:"rame kitxva?",
  answer:'gaeces pasuxi'
},

{
  question: "dasvi shekitxva",
  answer: " amomwuravi pasuxi"
},

{
  question: "kitxva",
  answer: " pasuxi"
}

]; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.arrayOne)
    this.arrayOne.forEach(e =>{
      this.hideItems[e.answer] = false
    })
    
  }

  showentity(item:Review){
Object.keys(this.hideItems).forEach(h =>{
  this.hideItems[h]=false;
});
this.hideItems[item.answer] = true;
  }

}
