//Luiza e Thabata

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  @Input() quebrado : boolean = true;

  imgBiscoito : string = "biscoito.png";
  imgBiscoitoQuebrado : string = "biscoitoQuebrado.png";

  /*trocarImg(){
    if(this.img == "biscoito.png"){
      this.img = "biscoitoQuebrado.png";
    }else{
      this.img = "biscoito.png";
    }
  }*/

}
