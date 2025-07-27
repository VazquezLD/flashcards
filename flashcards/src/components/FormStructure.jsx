import styled from "styled-components";
import InputComponent from "./InputComponent";
import ColorPicker from "../pages/Home/ColorPicker";
import ButtonAcept from "../pages/Home/ButtonAcept";
import { ErrorMessage, Form, Formik } from "formik";
import { initialValues } from "../formik/InitialValues";
import { validationSchema } from "../formik/validationSchema";
import ButtonOptional from "./ButtonOptional";

const FormStyled = styled(Form)`
    height: 800px;
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    
    & div{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    & .spanHeader{
        font-weight: 200;
        font-size: 17px;
        color: gray;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    & .buttons{
        display: flex;
        gap: 10px;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`
const ErrorStyled = styled.span`
    font-size : 15px;
    font-weight: 200;
    color: red;
`

const FormStructure = ({title, topic, setClicked, setFlashcardMap, index}) => {
    return(
        <>
        <div>
            <ButtonOptional setClicked={setClicked}/>
        </div>
        <Formik initialValues={initialValues}
        validationSchema={validationSchema} 
        enableReinitialize={true}
        onSubmit={(values, {resetForm}) =>{
            setFlashcardMap(prev => ({
                ...prev,
                [index]: [...(prev[index] || []), values]
                }))
            resetForm()
            setClicked(index)
            
        }}>
            <FormStyled>
                <h2>{title}</h2>
                <span className="spanHeader">Esta flashcard será asignada al conjunto de "{topic}"</span>
                <div>
                    <span>Título</span>
                    <InputComponent width={'45%'} name='title'/>
                    <ErrorMessage name='title' component={ErrorStyled}/>
                </div>
                <div>
                    <span>Pregunta a contestar</span>
                    <InputComponent width={'90%'} name='question'/>
                    <ErrorMessage name='question' component={ErrorStyled}/>
                </div>
                <div>
                    <span>Opción 1</span>
                    <InputComponent width={'90%'}  name='firstAnswer'/>
                    <ErrorMessage name='firstAnswer' component={ErrorStyled}/>
                </div>
                <div>
                    <span>Opción 2</span>
                    <InputComponent width={'90%'} name='secondAnswer'/>
                    <ErrorMessage name='secondAnswer' component={ErrorStyled}/>
                </div>
                <div>
                    <span>Opción 3<span className="spanHeader">(Opcional)</span></span>
                    <InputComponent width={'90%'} name='thirdAnswer'/>
                    <ErrorMessage name='thirdAnswer' component={ErrorStyled}/>
                </div>
                <div>
                    <span>Opción 4<span className="spanHeader">(Opcional)</span></span>
                    <InputComponent width={'90%'} name='fourthAnswer'/>
                    <ErrorMessage name='fourthAnswer' component={ErrorStyled}/>
                </div>
                <ColorPicker name='color'/>
                <div className="buttons">
                    <ButtonAcept text='Aceptar' type='submit' setClicked={setClicked}/>
                </div>
            </FormStyled>
        </Formik>
        </>
    )
}
export default FormStructure