<script lang="ts">
    export var funcionBotonOcultar: () => void;
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/54bc695c63b2240b4798585129fe3112?family=F29LTZaridSlab-Regular);
.cuerpo{
    height: 500px;
    width: 100%;
}
.cuadro{
    background-color:  #ffe6a8;
    height: 98%;
    width: 50%;
    margin: auto;
    position: absolute;
    top: 100px;
    border: 2px solid #ffb800;
    border-radius: 30px;
    position: relative;
}
.boton{
    
    position:absolute;
    left: 4%;
    bottom: 4%; 
    height: 20%;
    width: 92%;
    border: 2px; 
    border-radius: 25px; 
    background-color: #fbff00;
}
.sol { 
    position: absolute;
    top: 4%;
    left: 4%;
    width: 25%;
    max-height: 25%;
    height: 25%;  
}
.texto{
    position: absolute;
    top: -4%;
    left: 28%;
    right: 4%;
    font-size: 4vw;
    font-family: "F29LTZaridSlab-Regular";
    text-align: center;
    
}
.segun{
    position: absolute;
    top: 3%;
    left: 13%;
    width: 25%;
    height: 25%;
    color: white;
    font-family: "F29LTZaridSlab-Regular";
    font-size: 4vw;
}
.otro{
    position: absolute;
    top: 25%;
    left: 8%;
    width: 84%;
    height: 25%;
    color: black; 
    font-size: 2.4vw;
    text-align: center;
    font-family: "F29LTZaridSlab-Regular";
}

.otra{
    position: absolute;
    top: 40%;
    left: 8%;
    width: 84%;
    height: 25%;
    color: black; 
    font-size: 2.2vw;
    text-align: center;
    font-family: "F29LTZaridSlab-Regular";
}

.reto{
    position: absolute;
    top: 48%;
    left: 8%;
    width: 84%;
    height: 25%;
    color: black; 
    font-size: 2.2vw;
    text-align: center;
    font-family: "F29LTZaridSlab-Regular";
}

.casa{
    position: absolute;
    top: 65%;
    left: 8%;
    width: 84%;
    height: 25%;
    color: black; 
    font-size: 2.5vw;
    text-align: center;
    font-family: "F29LTZaridSlab-Regular";
}

.glasses{
    position: absolute;
    top: 55%;
    left: 40%;
    width: 20%;
    height: 20%;

}
.botonaso{
    position:absolute;
    border: 2px;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    background-color: #ffb800;
    font-size: 5vw;
}
</style>
<head>
    <link href="https://db.onlinewebfonts.com/c/54bc695c63b2240b4798585129fe3112?family=F29LTZaridSlab-Regular" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="cuerpo">
        <div class="cuadro">
            <div class="top">
            <!-- svelte-ignore a11y-missing-attribute -->
                
                <div class="dataop">
                    <img src="img/sun.png" class="sol">
                    <div>
                        <h1 class="segun">G3</h1>
                    </div>
                </div>
            </div>
            <h1 class="texto">Geomagnetic storm warning 
                type G3</h1>
            <p class="otro">The risks generated by G3 type storms are:
            </p>
            <li class="otra" type="disc">
                
Systems: Voltage corrections may be required.

            </li>
            <!-- <li class="reto" type="disc">
                HF Radio: Lost of radio contact for about an hour. 
            </li> -->
            <!-- <li class="casa" type="disc">
                Biologic: Passengers in high-flying may be exposed to radiation
            </li> -->
            <img class="glasses" src="img/electrician.png">
            <div class="boton">
                <button class="botonaso" on:click={funcionBotonOcultar}>
                    Understand
                </button>
            </div>
    
        </div>
    </div>
        
</body>