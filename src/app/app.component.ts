import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meuNome="Matheus Marinho"
  imagem = 'https://i.ytimg.com/vi/FAciZRkOKQs/maxresdefault.jpg'
  personagem = 'Groot';
  input :boolean = true;
  imagemVisivel :boolean = false;
  nomesAmigos = ['Senhor das Estrelas','Gamora','Rocket','Nebulosa']
  habilidades = [{id:1,habilidade:'Regeneração'},{id:2,habilidade:'Elasticidade'},{id:3,habilidade:'Absorver Madeira'}]

  getFilme(){
    return "Guardiões da Galáxia Vol.2"
  }

  aparecerImagem(){
    this.imagemVisivel = !this.imagemVisivel
  }

  mostrarHabilidade(habilidade){
    console.log(habilidade)
  }
}
