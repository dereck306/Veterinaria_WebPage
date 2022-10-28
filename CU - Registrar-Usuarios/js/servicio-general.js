let url = 'http://localhost:3000/api'

const registrarDatos = async(pdatos, pendpoint) => {
    url += pendpoint

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });

};