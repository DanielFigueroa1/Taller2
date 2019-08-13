class Enemigo {


    constructor(app, enemigo) {
        this.app = app;
        this.enemigo = enemigo;
        this.y = this.app.random(-100, -50);
        this.velX;
        this.velY;
        this.vida;
        this.tam;
        this.vivo = true;

    stopInterval() {
        clearInterval(this.move);
        clearInterval(this.val);
        clearInterval(this.disp);
    }

     borrarTodo(){
        Enemigo.balasE = [];
    }


    validar() {
        for (let i = 0; i < Jugador.balas.length; i++) {
            let bala = Jugador.balas[i];
            if (this.app.dist(this.x, this.y,bala.x,bala.y)<this.tam) {
                Jugador.balas.splice(i,1);
                this.vida-=2;
            }
        }
    }

    isVivo() {
        return this.vivo;
    }
    }
}