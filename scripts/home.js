import { Aside } from "./aside.js";
import { Api } from "./api.js";
Api.tokenVal()
Aside()
async function renderNews() {
    const mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const lista = document.getElementsByClassName('news')[0]
    const news = await Api.reqGet('news')
    news.forEach(element => {
        const dataObj = new Date (element.data)
        const date = {
            dia:dataObj.getDate(),
            mes:mes[dataObj.getMonth()],
            ano:dataObj.getFullYear(),
            diaDaSemana:semana[dataObj.getDay()]
        }
        lista.insertAdjacentHTML('afterbegin',`
        <li id="${element._id}">
            <h1>${element.title}</h1>
            <h4 style="margin-bottom:25px;">"${date.diaDaSemana}, ${date.dia} de ${date.mes} de ${date.ano}"</h4>
        </li>
        `)
        const li = document.getElementById(element._id)
        try {
            element.content.forEach( paragrafo=>{
                const p = document.createElement('p')
                p.textContent = paragrafo
                p.style = 'margin-bottom:25px;'
                li.appendChild(p)
            })            
        } catch (error) {
            
        }
        li.insertAdjacentHTML('beforeend',`<p style="font-size:5px ; margin-top: 5px;">${element._id}</p>`)
    });
}
renderNews()