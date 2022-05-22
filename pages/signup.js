import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'semantic-ui-css/semantic.min.css';
import 'react-notifications/lib/notifications.css';
import axios from "axios";

export default function Signup() {
    const email = React.useRef();
    const password = React.useRef();

    /**
     * @param {React.MutableRefObject} refObject
     */
    const getCb = refObject => e => refObject.current = e.currentTarget.value;

    const onSubmit = async () => {
        const res = await axios.post("/api/signup", {
            email: email.current,
            password: password.current
        })
            .then(x => x.data)
            .catch(e => NotificationManager.error(e.response.data.message));

        // Save token to local storage
        if (res) {
            NotificationManager.success("Signup successful! Please wait while we redirect you back to home page...");
            localStorage.setItem("token", res.token);
            setTimeout(() => window.location.href = "/", 2000);
        }
    };

    React.useEffect(() => {
        if (localStorage.getItem("token")) 
            window.location.href = "/";
    });

    // Render
    return <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>Create an account</Header>
                <Form size='large' onSubmit={onSubmit}>
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
                        <Button color='teal' fluid size='large' type="submit">Sign up</Button>
                    </Segment>
                </Form>
                <Message>
                    Already have an account? <Link href='/login'>Log in</Link>
                </Message>
            </Grid.Column>
        </Grid>
        <NotificationContainer />
    </>
};