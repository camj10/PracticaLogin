import React from 'react'
import PersonaForm from '../../components/PersonaForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const PersonasAdd = () => {
    const initialValues = {
    nombre: '',
    apellido: '',
    // edad: 18,
    email:'',
    password:'',
    confirmPassword:'',
    doc:'',
    tel:'',
    }

    const crearPersona = async(values, actions) => {

        try {
            const respuesta = await axios.post(`http://localhost:8000/api/people`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha agregado ${respuesta.data.nombre} perfectamente!`,
                });
                
                actions.resetForm(initialValues);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    return (
        <>
            <h1>Agregar Persona</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <PersonaForm 
                    initialValues={initialValues}
                    botonTexto="Agregar"
                    onSubmit={crearPersona}
                    />
                </div>
            </div>
        </>
    )
}

export default PersonasAdd