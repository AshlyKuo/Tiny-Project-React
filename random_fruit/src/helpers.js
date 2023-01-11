import fruitArray from "./fruits";

const ranNum = Math.floor(Math.random()*fruitArray.length);
const randomFruit = fruitArray[ranNum];


function choice(){
    console.log(`I’d like one ${randomFruit}, please.`);
    console.log(`Here you go:${randomFruit}`)
    console.log('Delicious! May I have another?')
};

function remove(){
    fruitArray.splice(ranNum,1)
    console.log(`I'm sorry, we're all out. We have ${fruitArray.length} left`)

}

export {choice,remove};