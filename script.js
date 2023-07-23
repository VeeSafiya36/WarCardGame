// Create War Card Game:
//2 players
//deal 26 cards to each player, deck of 52 cards
//iterate through turns where each player plays a turn
//player who plays higher card, wins a point
//ties result in zero points 
//after all cards have been played, display score and winner
//write a unit test using mocha and chai for one function

//functions needed: 
//deal cards
//taking turns putting cards down
//comparing card values
//displaying winner and score


// created suit and value arrays
const suits= ['heart','spade','clover','diamond']
const values=  ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

// created card class that takes in a suit, value, and face
class Card {
    constructor(suit,value,face){
        this.suit= suit;
        this.value= value;
        this.face = face;
    }
       
}
// created player class to take in playerNumber and turn
class Player {
    constructor(num){
        this.name = `Player ${num}`;
        this.hand = [];
    }
}

// created game class with cards as an empty array and added methods
class Game {
    constructor(cards){
        this.deck = [];
        this.makeDeck();
        this.round = 0;
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.dealCards();
        this.flipCards();

    }

    // created makeDeck method to make deck of 52 cards by using a nested for loop
    makeDeck() {
        for (let x = 0; x < values.length; x++) {
            for (let suit of suits) {
                let card = new Card(suit,x + 1,values[x]);
                this.deck.push(card);
                
        }
    }

    // used Math.floor(Math.random) to shuffle the 52 cards
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    // created dealCards method using splice so that each player has 26 cards
    dealCards() {
        this.player1.hand = this.deck.splice(0,26);
        this.player2.hand = this.deck.splice(0,26);
    }
    
     // need to compare elements in player1.hand array with elements in player2.hand array, one at a time
   // round changes each time, increments by 1
    

    flipCards() {
     // declared 2 playerPoints variables to keep track of points
    let player1Points = 0;
    let player2Points = 0;
        console.log(`Welcome to the Game of War!!!`)
    
    // // created for loop to go through rounds and if/else if/else statement to compare card values and log winner of the round
     for(let i = 0; i < this.player1.hand.length; i++){
        console.log(`Player 1 Card Value: ${this.player1.hand[i].value}`);
        console.log(`Player 2 Card Value: ${this.player2.hand[i].value}`);
        if (this.player1.hand[i].value > this.player2.hand[i].value){
            console.log(`${this.player1.hand[i].value} is greater than ${this.player2.hand[i].value} \n
            Player 1 wins round!`)
            player1Points++
        }
        else if (this.player1.hand[i].value === this.player2.hand[i].value){
            console.log(`${this.player1.hand[i].value} is equal to ${this.player2.hand[i].value} \n
            Tie`)
        
        }

        else {
            console.log(`${this.player2.hand[i].value} is greater than ${this.player1.hand[i].value} \n
            Player 2 wins round!`)
            player2Points++
        }
     }
         // compare points to determine final winner
        // created if/else if/else statement to log overall winner based on comparison of total points
        if(player1Points > player2Points){
            console.log(`Player 1 has ${player1Points} points\n
            Player 1 is the winner!`)
        }
        else if (player1Points === player2Points){
            console.log(`Player 2 has ${player2Points} points \n
            Both Players Have the Same Amount of Points! Rematch!`)
        }
        else {
            console.log(`Player 2 has ${player2Points} points \n
            Player 2 is the winner!`)
        }
    } 
        
}

let war =  new Game;
//console.log(war.player1.hand);