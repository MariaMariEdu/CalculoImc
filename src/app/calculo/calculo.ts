import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  standalone: false,
  templateUrl: './calculo.html',
  styleUrl: './calculo.css'
})
export class Calculo {
  weight: number =0;
  height: number =0;
  bmi: number =0;
img: string = '../assets/img/imcNull.jpeg';
  class: string = "(￣︶￣)↗ Insira os dados nos campos:"

  operationBmi(){
if (this.height <= 0|| this.weight <= 0) 
  {
  this.bmi =0;
  this.class ="insira sua altura"
  this.img = '../assets/img/imcNull.jpeg'
  return;
}  

this.bmi = this.weight / (this.height * this.height);

if (this.bmi >=16){
  this.class = '＞﹏＜ Muito abaixo do peso!';
  this.img = '../assets/img/muitoAbaixo.jpeg';
}
else if (this.bmi >17 && this.bmi <18.5){
  this.class = '＞︿＜ Abaixo do peso';
  this.img = '../assets/img/abaixo.jpeg';
}
else if (this.bmi >18.5 && this.bmi <24.9){
  this.class = '\^o^/ Saudavel!';
  this.img = '../assets/img/normativo.jpeg';
}
else if (this.bmi >25 && this.bmi <29.9){
  this.class = '╯︿╰ Acima do peso...';
  this.img = '../assets/img/acima.jpeg';
}
 else if (this.bmi >30 && this.bmi < 34.9){
  this.class = '≧ ﹏ ≦ Obesidade grau I';
  this.img = '../assets/img/obesidade1';
}
else if (this.bmi >=35 && 40){
  this.class = 'ಥ_ಥ Obesidade grau II';
  this.img = '../assets/img/acima.jpeg';
}
}
}
