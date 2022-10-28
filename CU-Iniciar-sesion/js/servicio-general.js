'use strict'
let url = 'http://localhost:3000/api'

const obtenerListaDatos = async(pendpoint) => {
    let listaDatos = [];
   url += pendpoint;

    await axios({
        method: 'get',
        url: url,
    }).then(response => {
        listaDatos = response.data.lista;

    });
    return listaDatos
};

