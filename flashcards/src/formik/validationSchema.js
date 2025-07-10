import * as Yup from 'yup'

export const validationSchema = Yup.object({
    title: Yup.string().max(30, 'Máximo de carácteres 30.').required('Obligatorio'),
    question: Yup.string().max(60, 'Máximo de carácteres 60.').required('Obligatorio'),
    firstAnswer: Yup.string().max(30, 'Máximo de carácteres 30.').required('Obligatorio'),
    secondAnswer: Yup.string().max(30, 'Máximo de carácteres 30.').required('Obligatorio'),
    thirdAnswer: Yup.string().max(30, 'Máximo de carácteres 30.'),
    fourthAnswer: Yup.string().max(30, 'Máximo de carácteres 30.'),
    color: Yup.string()
})
