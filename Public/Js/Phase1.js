//  import Snake from './Snake.js';
 
 export default class Phase1 extends Phaser.Scene {
    constructor(){
        super('Phase1');
    }

    create (){
        this.Snake = new Snake(this)
    }

    update(time){
        console.log('update');
        this.Snake.update(time)
    }
 }

 