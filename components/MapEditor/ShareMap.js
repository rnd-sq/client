// @ts-check
import React from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "semantic-ui-css/semantic.min.css";

/**
 * @param {{ map: Field }} param0 
 */
export default function ShareMap({ map }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const inputValue = React.useRef("");

    const onSubmit = async () => {
        setIsOpen(false);
        const res = await axios.post("/api/maps/publish", {
            map,
            name: inputValue.current
        })
            .then(req => req.data.message)
            .catch(e => NotificationManager.error(e.response.data.message));

        if (res)
            NotificationManager.success(res);
    }

    return <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        trigger={<div id="share-map">Share map</div>}
        closeIcon
        size="mini"
        style={{ textAlign: "center" }}
    >
        <Modal.Header>Share the map</Modal.Header>
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