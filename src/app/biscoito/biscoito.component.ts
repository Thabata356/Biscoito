import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  @Input() frase = "";
  @Input()img = "biscoito.png";

  frases = ["Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não há que ser forte. Há que ser flexível.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Motivação não é sinônimo de transformação, mas um passo em sua direção.",
    "Acredite em milagres, mas não dependa deles.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "Espere pelo mais sábio dos conselhos: o tempo.",
    "Um novo começo é muitas vezes disfarçado de um final."];

  sortearFrase(){
    if(this.img == "biscoitoQuebrado.png"){
      let random = this.frases[Math.floor(Math.random() * this.frases.length)];
      return random;}
    else if(this.img == "biscoito.png"){
      return "";}
    return"";
    }
}
