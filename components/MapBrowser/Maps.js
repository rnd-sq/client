// @ts-check

import { Card } from "semantic-ui-react";
import getDifficulty from "../../utils/getDifficulty";

/**
 * @param {{ map: { name: string, difficulty: number, creator: string, data: string, like: number, dateCreated: Date }[] }} param0
 */
export default function Maps({ map }) {
    const items = map.map(m => ({
        header: m.name,
        meta: `By ${m.creator.substring(0, m.creator.indexOf("@"))}`,
        description: `Difficulty: ${getDifficulty(m.difficulty)}`,
        fluid: true,
    }));

    return <Card.Group items={items} id="maps" />;
}