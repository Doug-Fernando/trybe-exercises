const selectEstado = document.querySelector('#estado');
const botaoEnviar = document.querySelector('#enviar');
const estados = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)',
];

estados.forEach((estado) => {
  const criarEstado = document.createElement('option');
  criarEstado.value = estado.slice(estado.length - 3, estado.length - 1);
  criarEstado.innerHTML = estado;
  selectEstado.appendChild(criarEstado);
});

botaoEnviar.addEventListener('click', (event) => {
  const inputDataIni = document.querySelector('#date-start').value;
  console.log(inputDataIni);
  event.preventDefault();
  const dataCamp = inputDataIni.split('/');
  const dia = parseInt(dataCamp[0], 10);
  const mes = parseInt(dataCamp[1], 10);
  const ano = parseInt(dataCamp[2], 10);

  if (!(dia > 0 && dia <= 31)) {
    alert('Dia inválido!');
  } else if (!(mes > 0 && mes <= 12)) {
    alert('Mês inválido!');
  } else if (!ano > 0) {
    alert('Ano não pode ser número negativo!');
  }
});
