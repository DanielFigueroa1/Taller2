class Nekai extends Enemigo{
    constructor(app,enemigo){
        super(app,enemigo);
        this.velX = 3;
        this.velY = 2;
        this.vida = 4;
        this.disparar = false;
        this.tam = 20;

    }

    show(){
    this.app.rect((20,60,20),this.x,this.y);    
    }

    
}