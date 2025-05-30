import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { ImagemComponent } from "../imagem/imagem.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-biscoito',
  imports: [FrasesComponent, BotaoComponent, ImagemComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  //@Input() frase : string = "";
  //@Input() statusBiscoito : string = "";

    ehQuebrado : boolean = false;
  quebrar(){
    this.ehQuebrado = true;
  }

  reiniciar(){
    this.ehQuebrado = false;
  }

}
