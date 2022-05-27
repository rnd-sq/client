// @ts-check
import React from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

/**
 * @param {{ map: Field }} param0 
 */
export default function ShareMap({ map }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const inputValue = React.useRef("");

    const onSubmit = async () => {
        const res = await axios.post("/api/maps/publish", {
            map,
            name: inputValue.current
        }).then(req => req.data).catch(e => e.response.data);
        console.log(res);
    }

    return <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        trigger={<div>Share map</div>}
    >
        <Modal.Header>Enter the map name</Modal.Header>
        <Modal.Content>
            <Input
                focus
                placeholder="Map name..."
                onChange={e => inputValue.current = e.currentTarget.value}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button type="submit" labelPosition="right" onClick={onSubmit}>Submit</Button>
        </Modal.Actions>
    </Modal>;
}