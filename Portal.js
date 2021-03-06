function Portal(params = {}) {
    var exemplo = {
        x: 2000,    y: 19.5*32,
        vx: 0,  vy: 0,
        ax: 0,  ay: 0,
        w: 32,  h: 32,   
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
    }
    Object.assign(this, exemplo, params);
}
Portal.prototype = new Portal();
Portal.prototype.constructor = Portal;

Portal.prototype.mover = function(dt){
}

Portal.prototype.desenhar = function (ctx) {

    ctx.save();
    ctx.translate(this.x, this.y);
        //ctx.fillStyle = this.color;
        //ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.drawImage(
            this.assets.img("chao"),
            64, // Corte na vertical
            96, //Corte na horizontal
            32,
            32,
            -this.w / 2,
            -this.h / 2,
            this.w,
            this.h,
        );
        ctx.drawImage(
            this.assets.img("exit"),
            0, // Corte na vertical
            0, //Corte na horizontal
            600,
            300,
            (-this.w / 2) - 40,
            (-this.h / 2) + 16,
            32,
            16,
        );
    ctx.restore();
};

Portal.prototype.checaColisao = function(alvo){
    if ((alvo.x + alvo.w/2 )  < this.x - this.w / 2) return false;
    if ((alvo.x - alvo.w/2 )  > this.x + this.w / 2) return false;
    if ((alvo.y + alvo.h/2 )  < this.y - this.h / 2) return false;
    if ((alvo.y - alvo.h/2 )  > this.y + this.h / 2) return false;

    return true;
}



