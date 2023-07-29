import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const PersonasErrores = Yup.object().shape({
    nombre: Yup.string()
        .required('Requerido'),
    apellido: Yup.string()
        .required('El apellido es requerido.'),
    email: Yup.string()
        .required('El correo es obligatorio')
        .email('El correo ingresado no tiene formato válido'),
    password: Yup.string()
        .required('Contraseña requerida'),
    doc: Yup.number()
        .integer('Debe ser numero entero')
        .required('El número de documento es requerido.')
        .positive('No puede ser negativo'),
    tel: Yup.number()
        .integer('Debe ser numero entero')
        .positive('No puede ser negativo'),
});

const PersonaForm = ({initialValues, botonTexto, onSubmit}) => {
    
    return (
        <Formik 
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={PersonasErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field name="nombre" className="form-control" placeholder="Nombre" />
                    {touched.nombre && errors.nombre && <div className="ms-3 mt-1 text-danger">{errors.nombre}</div>}
                    <Field name="apellido" className="form-control mt-2" placeholder="Apellido"/>
                    {touched.apellido && errors.apellido && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                    <Field name="email" className="form-control mt-2" placeholder="Correo electrónico"/>
                    {touched.email && errors.email && <div className="ms-3 mt-1 text-danger">{errors.email}</div>}
                    <Field name="password" className="form-control mt-2" placeholder="Contraseña"/>
                    {touched.password && errors.password && <div className="ms-3 mt-1 text-danger">{errors.password}</div>}
                    <Field name="confirmPassword" className="form-control mt-2" placeholder="Confirme su contraseña"/>
                    {touched.confirmPassword && errors.confirmPassword && <div className="ms-3 mt-1 text-danger">{errors.confirmPassword}</div>}
                    <Field name="doc" type="number" className="form-control mt-2" placeholder="Número de documento" />
                    {touched.doc && errors.doc && <div className="ms-3 mt-1 text-danger">{errors.doc}</div>}
                    <Field name="tel" type="number" className="form-control mt-2" placeholder="Número de teléfono" />
                    {touched.tel && errors.tel && <div className="ms-3 mt-1 text-danger">{errors.tel}</div>}
                    <button className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{botonTexto} Persona</button>
                </Form>
            )}
        </Formik>
    )
}

export default PersonaForm