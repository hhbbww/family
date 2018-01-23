function Snake(){
    this.snake = document.querySelector('.snake');
    this.arr = ['1_0','2_0','3_0']
    this.dir = 40;
    this.flag = {'1_0':true,'2_0':true,'3_0':true};
    this.food = '';
}
Snake.prototype={
    star:function () {
        this.draw();
        this.drawsnake();
        this.move();
        this.key();
        this.Food();
    },
    draw:function () {
        for(let i=0;i<20;i++){
            for(let j=0;j<20;j++){
                this.snake.innerHTML+=`<li id="${i}_${j}"></li>`
            }
        }
    },
    drawsnake:function () {
        this.arr.forEach(element=>{
            document.getElementById(element).classList.add('hot');
        })
    },
    move:function () {
        var that = this;
        that.t= setInterval(function () {
            var oldsnake = that.arr[that.arr.length-1];
            var newarr = oldsnake.split('_');
            var newsnake ;

            if(that.dir == 37){
                newsnake = `${newarr[0]*1}_${newarr[1]*1-1}`
            }else if(that.dir==38){
                newsnake = `${newarr[0]*1-1}_${newarr[1]*1}`
            }else if(that.dir==39){
                newsnake = `${newarr[0]*1}_${newarr[1]*1+1}`
            }else if(that.dir==40){
                newsnake = `${newarr[0]*1+1}_${newarr[1]*1}`
            }
            var newt = newsnake.split('_');
            if(newt[1]<0 || newt[1] >19 || newt[0]<0 || newt[0]>19 || that.flag[newsnake]){
                clearInterval(that.t);
                alert("game over")
            };
            if(newsnake==that.food){
                that.arr.push(newsnake);
                that.flag[newsnake]=true;
                document.getElementById(that.food).style.background = "#fff";
                that.Food();
            }else {
                that.arr.push(newsnake);
                that.flag[newsnake]=true;
                var wei = that.arr.shift();
                document.getElementById(wei).classList.remove('hot');
                delete that.flag[wei];
            }
            that.drawsnake();
        },500)

    },
    key:function(){
        document.onkeydown = function(e){
            let keycode = e.keyCode;
            if(Math.abs(keycode-this.dir)==2){
                return;
            }
            if(keycode == 13){
                clearInterval(this.t)
            }
            this.dir=keycode;
        }.bind(this)
    },
    Food:function(){
        var x = Math.floor(Math.random()*20);
        var y = Math.floor(Math.random()*20);
        do{
            x = Math.floor(Math.random()*20);
            y = Math.floor(Math.random()*20);
        }while (this.flag[`${x}_${y}`]);
        this.food = `${x}_${y}`;
        document.getElementById(this.food).style.background = "red"
    }


}