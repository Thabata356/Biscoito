import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImagemComponent } from "../imagem/imagem.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() label : string = "";
  @Input() primary : boolean = true;
  @Output() clicked = new EventEmitter();
  @Input() disabled : boolean = false;
  //@Input() tipoBotao: string = "";
  //@Input() textoBotao: string = "";

  onClick(){
    this.clicked.emit();
  }

  /*quebrarBiscoito(){
    var biscoito = "biscoitoQuebrado.png"
    this.estadoBiscoito.emit(biscoito);
  }

  restaurarBiscoito(){
     var reiniciarBiscoito = "biscoito.png"
     this.estadoBiscoito.emit(reiniciarBiscoito);
  }*/

  /*quebrar(){
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
  }*/
}