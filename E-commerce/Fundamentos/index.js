window.addEventListener('load', ()=>{

    let btnCalcular =  document.querySelector('#btn-calcular');

    btnCalcular.addEventListener('click', async function(e){
        const {value: metrosCuadrados} = await Swal.fire({
            input: 'text',
            inputLabel: '¿Cuantos metros cuadrados mide tu casa?',
            inputPlaceholder: '200'
          })

        const {value: tipoCasa} = await Swal.fire({
            input: 'select',
            inputOptions: {
                    Casa: '1. Casa',
                    Apartamento: '2. Apartamento'
                },
            inputLabel: '¿Que tipo de casa tienes?',
            inputPlaceholder: 'Selecciona el tipo de casa'
        })

        const {value: numResidentes} = await Swal.fire({
            input: 'text',
            inputLabel: '¿Cuantas personas viven en su casa?',
            inputPlaceholder: '2'
        })

        await administracion(metrosCuadrados, tipoCasa);
        

        await cuotaDeAseo(metrosCuadrados, tipoCasa);
        

        await derechosDeGimnasio(numResidentes);
        
    })


})




function administracion(metrosCuadrados, tipoCasa){
    if (Number(metrosCuadrados && tipoCasa === 'Casa')){
        return Swal.fire('Administracion:' + (metrosCuadrados * 1500 + 100000));
    } else if(Number(metrosCuadrados) && tipoCasa === 'Apartamento'){
        return Swal.fire('Administracion: ' + (metrosCuadrados * 1500 + 50000));
    } else {
        return Swal.fire('Por favor sigue el formato indicado');
    }
}

function cuotaDeAseo(metrosCuadrados, tipoCasa){
    let admin = administracion(metrosCuadrados, tipoCasa);
    let porcentajeAdmin= admin * 0.1;
    let adicionalMt2= metrosCuadrados * 1000;

    return Swal.fire('Cuota de aseo: ' + (porcentajeAdmin + adicionalMt2));
}

async function derechosDeGimnasio(numResidentes){

    let sumaHombres = 0;
    let sumaMujeres = 0;
    let totalDeGimnasio = 0;

    if (numResidentes > 0){
        const {value: numHombres} = await Swal.fire({
            input: 'text',
            inputLabel: '¿Cuantas hombres viven en su casa?',
            inputPlaceholder: '2'
        })
        if (numHombres > 0){
            const { value: hombreMenor10 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas niños menores de 10 viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: hombreEntre10Y20 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas hombres entre 10 y 20 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: hombreEntre20Y40 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas hombres entre 20 y 40 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: hombreEntre40Y60 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas hombres entre 40 y 60 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: hombreMayor60 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas hombres mayores de 60 viven en su casa?',
                inputPlaceholder: '2'
            })
            if (hombreMenor10 > 0){
                sumaHombres += hombreMenor10*0
            }
            if (hombreEntre10Y20 > 0){
                sumaHombres += hombreEntre10Y20*20000
            }
            if (hombreEntre20Y40 > 0){
                sumaHombres += hombreEntre20Y40*15000
            }
            if (hombreEntre40Y60 > 0){
                sumaHombres += hombreEntre40Y60*10000
            }
            if (hombreMayor60 > 0){
                sumaHombres += hombreMayor60*0
            }
        }

        const {value: numMujer} = await Swal.fire({
            input: 'text',
            inputLabel: '¿Cuantas Mujeres viven en su casa?',
            inputPlaceholder: '2'
        })
        if (numMujer > 0){
            const { value: mujerMenor10 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas niñas menores de 10 viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: mujerEntre10Y18 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas mujeres entre 10 y 18 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: mujerEntre18Y35 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas mujeres entre 18 y 35 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: mujerEntre35Y55 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas mujeres entre 35 y 55 años viven en su casa?',
                inputPlaceholder: '2'
            })
            const { value: mujerMayor55 } = await Swal.fire({
                input: 'text',
                inputLabel: '¿Cuantas mujeres mayores de 55 viven en su casa?',
                inputPlaceholder: '2'
            })
            if (mujerMenor10 > 0){
                sumaMujeres += mujerMenor10*0
            }
            if (mujerEntre10Y18 > 0){
                sumaMujeres += mujerEntre10Y18*15000
            }
            if (mujerEntre18Y35 > 0){
                sumaMujeres += mujerEntre18Y35*12000
            }
            if (mujerEntre35Y55 > 0){
                sumaMujeres += mujerEntre35Y55*8000
            }
            if (mujerMayor55 > 0){
                sumaMujeres += mujerMayor55*0
            }
            
        }


        totalDeGimnasio =  sumaMujeres + sumaHombres;

        return Swal.fire('Derecho de gimnasio: ' +totalDeGimnasio );

    } else{
        return Swal.fire('Derecho de gimnasio: ' +totalDeGimnasio );
    }
}