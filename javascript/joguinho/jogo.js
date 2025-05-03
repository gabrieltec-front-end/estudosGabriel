
var altura=0
var largura=0
var i=99
a=1
var criarMosquitoTempo=1500
var nivel=window.location.search
nivel=nivel.replace("?","")
nivel=nivel
if(nivel=="facil"){
	criarMosquitoTempo=1500
	
}else if(nivel=="normal"){
	criarMosquitoTempo=1000
	
}else if(nivel=="dificil"){
	criarMosquitoTempo=750
	
	
}




function tamanhoJogo(){
     altura=window.innerHeight
     largura=window.innerWidth

     console.log(altura,largura)
}

tamanhoJogo()


 var tempoJogo=setInterval(function(){
    if(i>0){
        document.getElementById("tempo").innerHTML=i
        i--   
    }
    if(i==0){
        clearInterval(tempoJogo)
		//Aqui se o tempo chegar a zero vc venceu
    }
 },1000)


function posicaoRandomica() {

	if(document.getElementById("mosquito")){
		document.getElementById("mosquito").remove()
		if(a>3){
			window.location.href='game_over.html'

		}
		document.getElementById("v"+a).src="coracao_vazio.png"
		a++
		


	}
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'mosca.png'
	mosquito.className = 'mosquito'
	mosquito.id="mosquito"
	mosquito.onclick=function(){
		this.remove()
	}
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	document.body.appendChild(mosquito)
	

}

posicaoRandomica()