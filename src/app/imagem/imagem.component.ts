//Luiza e Thabata

import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  img = "biscoito.png";

  trocarImg(){
    if(this.img == "biscoito.png"){
      this.img = "biscoitoQuebrado.png";
    }else{
      this.img = "biscoito.png";
    }
  }

}
