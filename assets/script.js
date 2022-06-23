const logradouro = document.querySelector('#logradouro');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const ddd = document.querySelector('#ddd');
const input = document.querySelector('#cep');
const btn = document.getElementById('search');

let cep = input.value;

async function getAddress () {
    cep = input.value;
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json());

    logradouro.textContent = data['logradouro'];
    complemento.textContent = data['complemento'];
    bairro.textContent = data['bairro'];
    localidade.textContent = data['localidade'];
    uf.textContent = data['uf'];
    ddd.textContent = data['ddd'];
}

btn.addEventListener('click', getAddress);
