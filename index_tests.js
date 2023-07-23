const expect = chai.expect;
const assert = chai.assert;



describe('dealCards():It should split a deck of 52 cards into two separate arrays of 26',()=>{
    let war = new Game;
    war.player1.hand.length
    war.player2.hand.length
})

it('#Should return an array of 26 elements for each player',()=>{
    let war = new Game;
    expect(war.player1.hand.length).to.equal(26)
    expect(war.player2.hand.length).to.equal(26)
})

it('#Should fail',()=>{
    let war = new Game;
    expect(war.player1.hand.length).to.equal(52)
})