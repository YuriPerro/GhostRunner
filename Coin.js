function Coin(params = {}) {
    var exemplo = {
        x: 150,    y: 150,
        vx: 0,  vy: 0,
        ax: 0,  ay: 0,
        w: 27,  h: 27,   
        a: 0,
        va: 0,    vm: 0,
        frame: 0,
        props: {},
        cooldown: 0,
        color: "red",
        pc: null,
        movimento: null,
        scene: null,
        mapa: null,
        assets: null,
        tipo: "moeda",
    }
    Object.assign(this, exemplo, params);
}
Coin.prototype = new Coin();
Coin.prototype.constructor = Coin;

Coin.prototype.mover = function(dt){
    this.frame += 12*dt;
    //this.aplicaRestricoes(dt);

}

Coin.prototype.desenhar = function (ctx) {

    ctx.save();
    var F = Math.floor(this.frame);

        ctx.translate(this.x, this.y);
        //ctx.fillStyle = this.color;
        //ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        
        if( this.mapa.K == 0 ){
        ctx.drawImage(
            this.scene.assets.img("coin"),
            (F%6)*75,
            0,
            75,
            75,
            -this.w / 2,
            -this.h / 2,
            this.w,
            this.h 
        )};

        if( this.mapa.K == 1){
            ctx.drawImage(
                this.scene.assets.img("coin2"),
                (F%6)*75,
                0,
                70,
                75,
                -this.w / 2,
                -this.h / 2,
                this.w,
                this.h 
        )};
    

    ctx.restore();
};
