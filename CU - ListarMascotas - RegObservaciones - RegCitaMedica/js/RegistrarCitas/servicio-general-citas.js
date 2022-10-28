'use strict'
let url = 'http://localhost:3000/api'

const obtenerDatos = async(pendPoint) => {
    let listaDatos = [];
    url += pendPoint;


    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaDatos = response.data.lista;
    });

    return listaDatos;
};


const registrarDatos = async(pdatos, pendPoint) => {
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};