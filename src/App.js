import { Formik, Form, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Radio from './components/Radio'

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
    if (!values.radio) {
        errors.radio = 'Campo Requerido'
    } 
    
    return errors
}

function App() {

    return (
        <Formik
            initialValues={{ name: '', lastName: '', email: '', radio:'' }}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <Form>
                <TextInput name="name" label="Nombre" />
                <TextInput name="lastName" label="Apellido" />
                <TextInput name="email" label="Email" />
                <Checkbox name='accept'>Aceptar terminos y condiciones</Checkbox>
                <Select name='options' label='Opciones'>
                    <option value={null}>-- Select --</option>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                </Select>
                <Radio name="radio" value='1' label='1'/>
                <Radio name="radio" value='2' label='2'/>
                <Radio name="radio" value='3' label='3'/>
                <ErrorMessage name="radio"/>
                <button type='submit'>Enviar</button>
            </Form>
        </Formik>
    );
}

export default App;


