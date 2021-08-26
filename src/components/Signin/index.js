import React from 'react'
import { 
    Container, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap,
    Icon,
    Form,
    Text 
} from './SigninElements'

const Signin = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Beachbooker</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Passoword</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container> 
        </>
    )
}

export default Signin
