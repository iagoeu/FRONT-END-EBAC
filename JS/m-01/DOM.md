# DOM

- Document Object Model
- Estruturas de um arquivo WEB
- Representa documentos HTML e XML
- Interface de programação
- Não é uma linguagem de programação
- É essencial para o JS entender o modelo de páginas web

## Para que serve o DOM
- Alteral a estrutura
- Alterar o estilo
- Alterar conteúdo

## como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padões estabelecidos
- Métodos (Funções)
- Árvore de Elementos
- Seletores
- Objetos (nós ou nodes )

## Exemplo HTML
````
<html>
    <head>
    </head>
    <body>
    </body>
</html>
````
## Exemplo Object

````
objeto = {
    html :{
        head : {
            body :{
                h1:{

                }
            }
        }
    }
}
````


## DOM vs JS
- DOM pode ser usado por outras linguagens
- Sem o DOM o javascript não teria noção da página

### Vantagens de usar JavaScript

- Código é executado por navegadores
- Tornar paginas dinâmicas
- Evitar Requiseções desnecessarias (Perfomance)
- SPA(Simgle Page Application)
- Reagir rapidamente a ações do usuários


### Desvantagem de usar o javaScript

- Código Executado por navegadores
- O conteúdo NÃO fica visivel para indexadores de busca
- Alterações em tempo de execução não ficam salvos no documento


### Exemplos

- document.getElementById('id')
- document.getElementByTagName('name')
- document.creatElement('name')
- parentNode.appendChild('node')
- element.innerText
- element.style
- element.setAtribut('name')
- element.addEventListener()
- window.location
- window.onload
- console.log()
- window.scroll()

## Seletores 

- Tipos de Seletores; Tag, ID, Class, Name, Query
- CallBack
- getElementById('id)
- getElementByTagName('name')
- getElementByName('name')
- getElementByClassName('name')

## Formulários
- Precisamos evitar que o usuario passe dados incorretos
- Ou seja, para direcionar melhor o uso do sistema
- Protejer a injeção de codigo malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Regex (Expreções regulares )

