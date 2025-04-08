//Luiza e Thabata
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { ImagemComponent } from "../imagem/imagem.component";

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() exibeFrase : boolean = false

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
    let random = this.frases[Math.floor(Math.random() * this.frases.length)];
    return random;
    }

  /*Frase(){
    if(this.img == "biscoitoQuebrado.png"){
      let random = this.frases[Math.floor(Math.random() * this.frases.length)];
      return random;}
    else if(this.img == "biscoito.png"){
      return "";}

    return"";
    }*/

}
