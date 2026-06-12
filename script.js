```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    overflow:hidden;
    background:#000;
}

.game-container{
    width:100vw;
    height:100vh;
    background:linear-gradient(to bottom,#3d0606,#1a0000);
    position:relative;
}

/* Top UI */
.top-ui{
    position:absolute;
    top:20px;
    width:100%;
    z-index:100;
}

.timer{
    text-align:center;
    color:white;
    font-size:48px;
    font-weight:bold;
}

.best-score{
    position:absolute;
    left:20px;
    color:white;
    font-size:18px;
}

/* Scene */
.scene{
    position:absolute;
    width:100%;
    bottom:180px;

    display:flex;
    justify-content:space-around;
    align-items:flex-end;
}

/* Character */
.character{
    position:relative;
}

/* Head */
.head{
    width:90px;
    height:90px;
    border-radius:50%;
    background:white;
    border:4px solid black;
    position:relative;
    transition:.3s;
}

/* Eyes */
.eyes{
    display:flex;
    gap:18px;

    position:absolute;
    top:34px;
    left:50%;

    transform:translateX(-50%);
}

.eye{
    width:9px;
    height:13px;
    background:black;
    border-radius:50%;
}

/* Mouth */
.mouth{
    width:20px;
    height:4px;
    background:black;

    position:absolute;
    left:50%;
    bottom:18px;

    transform:translateX(-50%);
    border-radius:10px;
}

/* Eyebrows */
.eyebrow{
    position:absolute;
    width:18px;
    height:4px;
    background:black;
    top:22px;
    display:none;
}

.eyebrow-left{
    left:15px;
}

.eyebrow-right{
    right:15px;
    transform:rotate(-20deg);
}

/* Body */
.body{
    width:70px;
    height:50px;

    background:white;
    border:4px solid black;
    border-bottom:none;

    margin:auto;
    margin-top:-10px;

    border-radius:30px 30px 0 0;
}

/* Laptop */
.laptop{
    width:130px;
    margin-top:-10px;
}

.screen{
    height:55px;
    border-radius:6px;
}

.base{
    height:10px;
}

.dark-laptop .screen,
.dark-laptop .base{
    background:#444;
}

.light-laptop .screen,
.light-laptop .base{
    background:#999;
}

/* Cup */
.cup-area{
    position:relative;
    width:120px;
    height:180px;
}

.straw{
    position:absolute;

    width:14px;
    height:55px;

    left:50%;
    transform:translateX(-50%);

    background:white;
    border:3px solid black;

    z-index:2;
}

.cup{
    position:absolute;
    bottom:0;

    width:110px;
    height:140px;

    background:white;
    border:4px solid black;

    overflow:hidden;

    clip-path:polygon(10% 0,90% 0,100% 100%,0 100%);
}

.tea{
    position:absolute;
    bottom:0;

    width:100%;
    height:80%;

    background:#f2d27b;

    transition:.2s;
}

/* Boba */
.boba{
    width:10px;
    height:10px;
    background:#2c1709;
    border-radius:50%;
    position:absolute;
}

.b1{left:20px;bottom:12px;}
.b2{left:40px;bottom:12px;}
.b3{left:60px;bottom:12px;}
.b4{left:80px;bottom:12px;}

.b5{left:30px;bottom:30px;}
.b6{left:50px;bottom:30px;}
.b7{left:70px;bottom:30px;}
.b8{left:50px;bottom:50px;}

/* Controls */
.controls{
    position:absolute;
    bottom:60px;
    width:100%;
    text-align:center;
}

#drinkBtn{
    border:none;
    background:#ffd84d;

    padding:18px 40px;

    font-size:22px;
    font-weight:bold;

    border-radius:40px;

    cursor:pointer;
}

/* Speech Bubble */
.speech-bubble{
    display:none;

    position:absolute;
    top:-60px;
    left:50%;

    transform:translateX(-50%);

    background:white;
    border:3px solid black;

    padding:10px 18px;

    border-radius:20px;

    font-weight:bold;
}

/* Overlay */
.overlay{
    position:absolute;
    inset:0;

    background:rgba(0,0,0,.5);

    display:none;
    justify-content:center;
    align-items:center;
}

.result-card{
    background:white;
    padding:30px;
    border-radius:20px;
    text-align:center;
}

#restartBtn{
    margin-top:20px;

    border:none;
    background:#ffd84d;

    padding:15px 30px;

    border-radius:30px;

    cursor:pointer;
}

/* Typing animation */
@keyframes typing{
    0%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-3px);
    }

    100%{
        transform:translateY(0);
    }
}

.working{
    animation:typing .4s infinite;
}

/* Suspicious face */
.suspicious .head{
    transform:rotate(12deg);
}

.suspicious .eyebrow{
    display:block;
}

/* Sweat */
.sweat{
    width:10px;
    height:15px;

    background:#8fdcff;

    position:absolute;

    border-radius:50%;

    display:none;
}

.sweat1{
    top:5px;
    left:-5px;
}

.sweat2{
    top:15px;
    right:-5px;
}

.drinking .sweat{
    display:block;
}
```


