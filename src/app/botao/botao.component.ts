import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() img = "biscoito.png";
  @Input() botao: string = "";
  @Input() texto: string = "";


  quebrar(){
    if(this.img == "biscoito.png"){
      this.img = "biscoitoQuebrado.png";
    }else{
      this.img = "biscoitoQuebrado.png";
    }
  }

  restaurar(){
    if(this.img == "biscoitoQuebrado.png"){
      this.img = "biscoito.png";
    }else{
      this.img = "biscoito.png";
    }
  }
}
