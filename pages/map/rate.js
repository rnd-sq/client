import React from 'react';
import { Button, Dropdown, Form, Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Head from "next/head";

export default function Rate() {
    // Ref objects
    const mapName = React.useRef();
    const difficulty = React.useRef();
    const rateType = React.useRef();

    const getCb = refObject => e => refObject.current = e.currentTarget.value;

    const dropdownCb = (event, refObject) =>
        refObject.current = event
            .currentTarget
            .querySelector(".text").innerHTML.toLowerCase();

    const getOptions = o => o.map(s => ({
        key: s,
        value: s,
        text: s[0].toUpperCase() + s.slice(1)
    }));

    const onSubmit = async () =>
        axios.put("/api/maps/rate", {
            name: mapName.current,
            rate: {
                type: rateType.current,
                difficulty: difficulty.current
            },
            token: localStorage.getItem("token")
        })
            .then(x => NotificationManager.success(x.data.message))
            .catch(e =>
                NotificationManager.error(e.response.data.message)
            );

    // Render
    return <>
        <Head>
            <title>Rate a map</title>
        </Head>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>Rate a map</Header>
                <Form size="large" onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            placeholder='Enter the map name'
                            onChange={getCb(mapName)}
                        />

                        <div className='field'>
                            <Dropdown
                                placeholder='Select a difficulty'
                                fluid
                                search
                                selection
                                options={getOptions(['easy', 'medium', 'hard', 'insane', 'expert', 'master'])}
                                onChange={e => dropdownCb(e, difficulty)}
                            />
                        </div>

                        <div className='field'>
                            <Dropdown
                                placeholder='Select a rate type'
                                fluid
                                search
                                selection
                                options={getOptions(["rated", "epic", "legendary", "godlike"])}
                                onChange={e => dropdownCb(e, rateType)}
                            />
                        </div>

                        <Button color='teal' fluid size='large' type='submit'>Submit</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
        <NotificationContainer />
    </>
};