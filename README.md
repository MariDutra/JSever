# JSever
 Projeto do Módulo 3
<h2>Projeto individual</h2>,<p> referente ao módulo 3, do curso de Desenvolvedor Web Full Stack do Resilia Educação, em parceria com o SENAC RJ.</p>

<p>O trabalho abaixo tem como o intuito de estabelecer uma API REST utilizando JSON SERVER e explorando os protocolos de métodos HTTP. O repositório, trata-se dos dados de uma plataforma onde o usuário poderá comprar ingressos para o cinema. Além disso, a empresa não é só para filmes mas também encontra produtos relacionados aos filmes e o funcionamento de uma lanchonete. Isso dá mais autonomia e variedade ao usuário!</p>

<h3>O projeto foi intitulado  <a href="http://localhost:3000">CineHollyood</a>- ele possui três rotas ( filmes, produtos & food), com, no mínimo, 4 atributos cada, e o repositório foi hospedado no site <a href="https://projmod3.onrender.com/">Render</a>.</h3>   

<h2>Rotas e dados:</h2>
Veja abaixo, como foi estruturada a API com dados mokados:

# "filmes": [
        {
            "id": 1,
            "nome": "Terrifier",
            "descricao": "Um assassino maníaco decide aterrorizar três jovens em plena noite de Halloween. Para piorar, o criminoso é um palhaço chamado Art que tem um visual completamente assustador: máscara branca, lábios pintados de preto e dentes afiados.",
            "direcao": "Damien Leone",
            "genero": "terror",
            "categoria_id": 1,
            "preco": 25.50
        }

# "produtos": [
        {
            "id": 1,
            "nome": "Camiseta Terrifier",
            "descricao": "T-shirt de manga curta 100% algodão, jersey simples, 165 g/m², gola redonda de 4 camadas e costuras reforçadas na gola e nos ombros. Costuras laterais. Os designs das nossas t-shirts são baseados em ideias originais/adaptações não oficiais de séries, filmes, videojogos, etc. ou qualquer tipo de ficção.",
            "tamanho": "P/M/G/GG",
            "categoria_genero": "camiseta/terror",
            "categoria_id": 1,
            "preco": 25.50
        }

#  "food": [
        {
            "id": 1,
            "nome": "Hamburguer de Carne",
            "descricao": "Sanduíche composto por pão tipo brioche, bacon crispy, molho especial, carne 100% bovina, queijo sabor emental, tomate e alface.",
            "caloria": "767 kcal",
            "categoria": "Hamburguer",
            "categoria_id": 1,
            "preco": 25.50
        }
