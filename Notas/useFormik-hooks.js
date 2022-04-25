//onSubmit={formik.handleSubmit} se le tiene que pasar a
//todas las etiquetas de tipo submit
//
//onChange={formik.handleChange] se les pasa a los objetos para hacer
//el track de sus cambios con formik
//
//formik.values.NOMBREDELCAMPODEINITIALVALUES se le pasa
//como valor al input correspondiente

import { useFormik } from 'formik'


const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Campo Requerido'
  } else if (values.name.length < 4) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastName) {
    errors.lastName = 'Campo Requerido'
  } else if (values.lastName.length < 4) {
    errors.lastName = 'El apellido es muy corto'
  }

  if (!values.email) {
    errors.email = 'Campo Requerido'
  } else if (values.email.length < 4) {
    errors.email = 'El email es muy corto'
  }


  return errors
}

function App() {

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type='text'
        {...formik.getFieldProps('name')} //reemplaza los siguientes campos automaticamente
      // name='name'
      // onChange={formik.handleChange}
      // onBlur={formik.handleBlur}
      // value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      
      <label>Apellido</label>
      <input
        type='text'
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <br />

      <label>Email</label>
      <input
        type='email'
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
