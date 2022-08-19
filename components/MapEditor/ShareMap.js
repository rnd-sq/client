// @ts-check
import React from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import findStart from "../../utils/findStart";
import "semantic-ui-css/semantic.min.css";
import findWin from "../../utils/findWin";

/**
 * @param {{ map: Field }} param0 
 */
export default function ShareMap({ map }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const inputValue = React.useRef("");

    const onSubmit = async () => {
        setIsOpen(false);
        // Check before sending request
        if (!findStart(map)) {
            NotificationManager.error("Start position is not set");
            return;
        }

        if (!findWin(map)) {
            NotificationManager.error("This map is impossible");
            return;
        }

        // Send request
        return axios.post("/api/maps/publish", {
            map,
            name: inputValue.current,
            creator: localStorage.getItem("token")
        })
            .then(req => {
                NotificationManager.success(req.data.message);
                setTimeout(() => 
                    window.location.href = 
                        "/map/" 
                        + encodeURIComponent(inputValue.current), 2000)
            })
            .catch(e => NotificationManager.error(e.response.data.message));
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