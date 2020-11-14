let headerOne = document.createElement('h1');
headerOne.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(headerOne);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

const centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ypsum';
centerContent.appendChild(paragraph);

const leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

const rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

let leftContentImage = document.createElement('img');
leftContentImage.src = 'https://picsum.photos/200';
leftContentImage.className = 'small-image';
leftContent.appendChild(leftContentImage);

const numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
const ordList = document.createElement('ul');
rightContent.appendChild(ordList);
for (let index = 0; index < 10; index += 1) {
    let newListItem = document.createElement('li');
    newListItem.innerText = numbers[index];
    newListItem.style.color = 'rgb(255, 255, 255)'
    ordList.appendChild(newListItem);
}

let textHeaderThree = ['Primeira Tag H3', 'Segunda Tag H3', 'Terceira Tag H3'];

for (let index = 0; index < 3; index += 1) {
    let headerThree = document.createElement('h3');
    headerThree.className = 'description';
    headerThree.innerText = textHeaderThree[index];
    
    mainContent.appendChild(headerThree);
}

headerOne.className = 'title';
mainContent.removeChild(leftContent);
rightContent.style.margin = 'auto';
centerContent.style.backgroundColor = 'green';

let lastChild = ordList.lastChild;
ordList.removeChild(lastChild);
lastChild = ordList.lastChild;
ordList.removeChild(lastChild);


// --------------------------------------
// 1. Adicione a classe title na tag h1 criada;
// 2. Adicione a classe description nas 3 tags h3 criadas;
// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 6. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.