import React from 'react'
import { Formik, Form, Field } from 'formik'; 
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;
const Login = ({ onSubmit }) => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }
    const iniciar = async(values, actions) => {
        try {
            console.log("Ingresa al try Login de Client")
            const respuesta = await axios.post(`http://localhost:8000/api/login`, values);
            // const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/usuario/login`, values);
            console.log("respuesta de try login client contiene: ",respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Ingreso correcto",
                    showConfirmButton: false,
                    timer: 1500
                })
    
                actions.resetForm(initialValues);
                navigate('/')
            }
        } catch (error) {
            console.log("Ingresa  al catch de Login Client ");
            console.log(values);
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }
    return (

        <div className="container">
        <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={iniciar}
                    >
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h1 className="card-title text-center mb-5">Sign In</h1>
                        {/* {({ errors, touched }) => ( */}
                        <Form>
                            <div className="form-floating mb-3">
                                <Field name="email" className="form-control " type="email" placeholder="Ingrese email" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="password" className="form-control" placeholder="Ingrese contraseña" type="string"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-success" type="submit">Sign
                                    in</button>
                            </div>
                            {/* <div className="d-grid">
                                <button to='/register' className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                Register */}
                                 {/* <Link to='/register' >Register</Link> */}
                                {/* </button>
                            </div> */}
                        </Form>

                        {/* )} */}
                    </div>
                    
                </div>
            </div>
        </div>
        </Formik>
        </div>
    )
}

export default Login