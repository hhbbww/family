window.onload = function () {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(50,25,400,450);
    ctx.lineWidth =2.0;
    ctx.beginPath();
    // 画整体方格
    for(var i=0;i<8;i++){
        ctx.moveTo(50,75+(50*i));
        ctx.lineTo(450,75+(50*i));
    }
    for(var i=0;i<7;i++){
        ctx.moveTo(100+(50*i),25);
        ctx.lineTo(100+(50*i),225);
    }
    for(var i=0;i<7;i++){
        ctx.moveTo(100+(50*i),475);
        ctx.lineTo(100+(50*i),275);
    }
    // 画九宫
    ctx.moveTo(200,25);
    ctx.lineTo(300,125);
    ctx.moveTo(300,25);
    ctx.lineTo(200,125);
    ctx.moveTo(200,475);
    ctx.lineTo(300,375);
    ctx.moveTo(300,475);
    ctx.lineTo(200,375);
    //画炮、兵，位标；
    for(var j=0;j<2;j++){
    for(var i=0;i<2;i++){
        ctx.moveTo(95+(300*i),110+(300*j));
        ctx.lineTo(95+(300*i),120+(300*j));
        ctx.moveTo(95+(300*i),120+(300*j));
        ctx.lineTo(85+(300*i),120+(300*j));
        ctx.moveTo(95+(300*i),140+(300*j));
        ctx.lineTo(95+(300*i),130+(300*j));
        ctx.moveTo(95+(300*i),130+(300*j));
        ctx.lineTo(85+(300*i),130+(300*j));

        ctx.moveTo(105+(300*i),110+(300*j));
        ctx.lineTo(105+(300*i),120+(300*j));
        ctx.moveTo(105+(300*i),120+(300*j));
        ctx.lineTo(115+(300*i),120+(300*j));
        ctx.moveTo(105+(300*i),140+(300*j));
        ctx.lineTo(105+(300*i),130+(300*j));
        ctx.moveTo(105+(300*i),130+(300*j));
        ctx.lineTo(115+(300*i),130+(300*j));
    }
}
    for(var j=0;j<2;j++){
    ctx.moveTo(55,160+(150*j));
    ctx.lineTo(55,170+(150*j));
    ctx.moveTo(55,170+(150*j));
    ctx.lineTo(65,170+(150*j));
    ctx.moveTo(55,190+(150*j));
    ctx.lineTo(55,180+(150*j));
    ctx.moveTo(55,180+(150*j));
    ctx.lineTo(65,180+(150*j));

    ctx.moveTo(445,160+(150*j));
    ctx.lineTo(445,170+(150*j));
    ctx.moveTo(435,170+(150*j));
    ctx.lineTo(445,170+(150*j));
    ctx.moveTo(445,190+(150*j));
    ctx.lineTo(445,180+(150*j));
    ctx.moveTo(435,180+(150*j));
    ctx.lineTo(445,180+(150*j));

    for(var i=0;i<3;i++){
        ctx.moveTo(145+(100*i),160+(150*j));
        ctx.lineTo(145+(100*i),170+(150*j));
        ctx.moveTo(145+(100*i),170+(150*j));
        ctx.lineTo(135+(100*i),170+(150*j));
        ctx.moveTo(145+(100*i),190+(150*j));
        ctx.lineTo(145+(100*i),180+(150*j));
        ctx.moveTo(145+(100*i),180+(150*j));
        ctx.lineTo(135+(100*i),180+(150*j));
        ctx.moveTo(155+(100*i),160+(150*j));
        ctx.lineTo(155+(100*i),170+(150*j));
        ctx.moveTo(155+(100*i),170+(150*j));
        ctx.lineTo(165+(100*i),170+(150*j));
        ctx.moveTo(155+(100*i),190+(150*j));
        ctx.lineTo(155+(100*i),180+(150*j));
        ctx.moveTo(155+(100*i),180+(150*j));
        ctx.lineTo(165+(100*i),180+(150*j));
    }
}
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "#000";
    ctx.stroke();











}