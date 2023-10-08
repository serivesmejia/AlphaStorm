<script lang="ts">
    import G4 from "../popups/G4.svelte";

    var G1Visible = true

    function pepe() {
        G1Visible = false
    }

</script>

{#if G1Visible}
<G4 funcionBotonOcultar={pepe}/>
{/if}

<style>
    @import url(https://db.onlinewebfonts.com/c/54bc695c63b2240b4798585129fe3112?family=F29LTZaridSlab-Regular);
    .top{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 20%;
        display: flex;
        padding: 1px 100.234px;
        justify-content: center;
        align-items: center;
        gap: 43.852px;
        background-color: #cf3202;
        opacity: 0.82;
    }
    .solaso{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
    
}
.Logo{
    font-family: "F29LTZaridSlab-Regular";
    font-size: 3vw;
}

.Who{
    font-family: "F29LTZaridSlab-Regular";
    font-size: 3vw;
}
.Credits{
    font-family: "F29LTZaridSlab-Regular";
    font-size: 3vw;
}
.What{
    font-family: "F29LTZaridSlab-Regular";
    font-size: 3vw;
}
.cuerpo{
    background-color: #cf3202;
    opacity: 0.82;
    position: absolute;
    top: 180px;
    height: 335px;
    left: 0;
    right: 0;
    gap: 80.852px;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 100px 100.234px;
    display: flex;
}

.primer{
    height: 350px;
    width: 600px;
    background-color: #02cf6f;
}

.texto{
    height: 350px;
    width: 400px;
    background-color: #521a00;
    padding: 50px 50px;
}
</style>

<head>
    <link href="https://db.onlinewebfonts.com/c/54bc695c63b2240b4798585129fe3112?family=F29LTZaridSlab-Regular" rel="stylesheet">
    
</head>

<img src="img/suna.jpg" class="solaso">
<header class="top">
    <h1 class="Logo">Automatic Location and Prediction of Helios Anomalies</h1> 
    <menu>
        
        <button class="What" >Learn about </button>
        <button class="Who">Who are we?</button>
        <button class="Credits">Credits</button>
    </menu>
</header>
 
<body>
    

    <menu class="cuerpo">
        <div class="primer"></div>
        <div class="texto"></div>
    </menu>
</body>
