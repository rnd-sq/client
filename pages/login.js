import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Login() {
    // Ref objects
    const email = React.useRef();
    const password = React.useRef();

    /**
     * @param {React.MutableRefObject} refObject
     */
    const getCb = refObject => e => refObject.current = e.currentTarget.value;

    const onSubmit = async () => {
        const res = await axios.post("/api/login", {
            email: email.current,
            password: password.current
        })
            .then(x => x.data)
            .catch(e => {
                console.log(e);
                NotificationManager.error("Email or password is incorrect");
            });

        // Save token to local storage
        if (res) {
            NotificationManager.success("Login successful! Please wait while we redirect you to the game...");
            localStorage.setItem("token", res.token);
            setTimeout(() => window.location.href = "/home", 2000);
        }
    };

    // Render
    return <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>Welcome back!</Header>
                <Form size="large" onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            onChange={getCb(email)}
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
        <NotificationContainer />
    </>
};