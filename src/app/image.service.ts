import { Injectable } from '@angular/core';
import { constructor } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imgsrc1="";
  imgsrc2="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=6EdNOdUo";
  imgsrc3="https://previews.123rf.com/images/usersam2007/usersam20071802/usersam2007180200005/95839867-two-ripe-red-apple-fruits-with-green-leaf-isolated-on-white-background-red-apples-with-clipping-path.jpg";
 
 getfruits(){
   return [
   {id:1,Image:this.imgsrc1},
   {id:2,image:this.imgsrc2}
   ]
 }

 
 constructor() { }
}
