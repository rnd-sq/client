import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

export default function Login() {
    // Ref objects
    const username = React.useRef();
    const password = React.useRef();

    /**
     * @param {React.MutableRefObject} refObject
     */
    const getCb = refObject => e => refObject.current = e.currentTarget.value;
    
    const onSubmit = async () => {
        await axios.post("/api/login", {
            username: username.current,
            password: password.current
        });
    };

    // Render
    return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>Welcome back!</Header>
            <Form size="large" onSubmit={onSubmit}>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        onChange={getCb(username)}
                    />

                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={getCb(password)}
                    />

                    <Button color='teal' fluid size='large' type='submit'>Login</Button>
                </Segment>
            </Form>
            <Message>New to us? <a href='/signup'>Sign Up</a></Message>
        </Grid.Column>
    </Grid>
};