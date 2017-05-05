import { Injectable } from '@angular/core';
import { Card } from "app/card";

@Injectable()
export class AppService {
    cards: Array<Card>
    constructor() {
        this.cards = new Array();
        
        let card = new Card();

        card.nomePersonagem = "Batman"
        card.meuNome = "Matheus Marinho"
        card.nomeBotao = "Bat"
        card.filme = "Batman O Filme"
        card.imagem ="https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"

        this.cards.push(card)

        let card1 = new Card();

        card1.nomePersonagem = "Flash"
        card1.meuNome = "Reuel Lucas"
        card1.nomeBotao = "Rapido"
        card1.filme = "Flash O Filme"
        card1.imagem ="http://baconside.com.br/wp-content/uploads/2016/07/theflashcover.jpg"

        this.cards.push(card1)

        let card2 = new Card();

        card2.nomePersonagem = "Homem Aranha"
        card2.meuNome = "Avelino Gomez"
        card2.nomeBotao = "Teia"
        card2.filme = "Homem Aranha O Filme"
        card2.imagem ="https://s.aficionados.com.br/imagens/homem-aranha-7_cke.jpg"
        

        this.cards.push(card2)


        

     }

     getCards(){
         return this.cards;
     }


}