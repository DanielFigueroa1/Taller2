class Nekai extends Enemigo{
    constructor(app,enemigo){
        super(app,enemigo);
        this.velX = 1;
        this.velY = 2;
        this.vida = 4;
        this.disparar = false;
        this.tam = 20;

    }

    show(){
    this.app.circle((20,20,20),this.x,this.y);    
    }

    
}