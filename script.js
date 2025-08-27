//comunicação com o banco de dados - no_sql-json

fetch('dado.json').then(resposta=>resposta.json()).then(banco=>{
console.log(banco)

//front-end
document.getElementById('imagem').innerHTML = banco[3].ImagemProdutos.img001
document.getElementById('produto').innerHTML = banco[0].produtos.prod01
document.getElementById('preco').innerHTML = banco[2].Preco.preco01
document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend01
document.getElementById('cliente').innerHTML = banco[4].cliente.comp001


document.getElementById('imagem2').innerHTML = banco[3].ImagemProdutos.img002
document.getElementById('produto2').innerHTML = banco[0].produtos.prod02
document.getElementById('preco2').innerHTML = banco[2].Preco.preco02
document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend02
document.getElementById('cliente2').innerHTML = banco[4].cliente.comp02


document.getElementById('imagem3').innerHTML = banco[3].ImagemProdutos.img003
document.getElementById('produto3').innerHTML = banco[0].produtos.prod03
document.getElementById('preco3').innerHTML = banco[2].Preco.preco03
document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend03
document.getElementById('cliente3').innerHTML = banco[4].cliente.comp03


document.getElementById('imagem4').innerHTML = banco[3].ImagemProdutos.img004
document.getElementById('produto4').innerHTML = banco[0].produtos.prod04
document.getElementById('preco4').innerHTML = banco[2].Preco.preco04
document.getElementById('vendedor4').innerHTML = banco[1].vendedor.vend04
document.getElementById('cliente4').innerHTML = banco[4].cliente.comp04


document.getElementById('imagem5').innerHTML = banco[3].ImagemProdutos.img005
document.getElementById('produto5').innerHTML = banco[0].produtos.prod05
document.getElementById('preco5').innerHTML = banco[2].Preco.preco05
document.getElementById('vendedor5').innerHTML = banco[1].vendedor.vend05
document.getElementById('cliente5').innerHTML = banco[4].cliente.comp05
})