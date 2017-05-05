import { Component } from '@angular/core';
import { Card } from "app/card";
import { AppService } from "app/app.service.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
//   meuNome = "Matheus Marinho"
//   imagem = "assets/groot.jpg"
//   liberado = false 
//   controladorImagem = false
//   nomes = ['Matheus','Avelino','Jesimiel','Grauber']
  
//   pegarValor(valor){
//   alert(valor)
// }

//   alterarValorImagem(){
//     this.controladorImagem = !this.controladorImagem
//   }

//   getPersonagem(){
//     let personagem = 'Groot'
//     return personagem
//   }

//   getFilme(){
//     return "Guardiões da Galáxia Vol.2"
//   }
    cards: Array<Card>;

    constructor(private service:AppService){
        this.cards = this.service.getCards()
    }
  
  
  
  
  
  
  
  
  
  
  
  
  // meuNome="Matheus Marinho"
  // imagem = 'https://i.ytimg.com/vi/FAciZRkOKQs/maxresdefault.jpg'
  // personagem = 'Groot';
  // input :boolean = true;
  // imagemVisivel :boolean = false;
  // nomesAmigos = ['Senhor das Estrelas','Gamora','Rocket','Nebulosa']
  // habilidades = [{id:1,habilidade:'Regeneração'},{id:2,habilidade:'Elasticidade'},{id:3,habilidade:'Absorver Madeira'}]

  // getFilme(){
  //   return "Guardiões da Galáxia Vol.2"
  // }

  // aparecerImagem(){
  //   this.imagemVisivel = !this.imagemVisivel
  // }

  // mostrarHabilidade(habilidade){
  //   console.log(habilidade)
  // }
}
