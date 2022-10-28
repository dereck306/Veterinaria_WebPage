let url = 'http://localhost:3000/api'

const registrarDatos = async(pdatos, pendpoint) => {
    url += pendpoint

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });

};

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