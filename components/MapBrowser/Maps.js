// @ts-check

import { Card } from "semantic-ui-react";

/**
 * @param {{ map: { name: string, rate: { difficulty: string, type: string }, creator: string, data: string, verifier: string, dateCreated: Date }[] }} param0
 */
export default function Maps({ map }) {
    console.log(map[0])

    const items = map.map(m => ({
        header: m.name,
        meta: `By: ${m.creator.substring(0, m.creator.indexOf("@"))}` + (
            m.verifier ? " - Verifier: " + m.verifier.substring(0, m.verifier.indexOf("@")) : ""
        ),
        description: `Difficulty: ${m.rate.difficulty} - Type: ${m.rate.type}`,
        fluid: true,
        className: "map-card",
        onClick: () => location.href =  "/map/" + encodeURIComponent(m.name)
    }));

    // @ts-ignore
    return <Card.Group items={items} id="maps" />;
}