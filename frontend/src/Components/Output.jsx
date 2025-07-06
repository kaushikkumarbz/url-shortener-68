import React from 'react'
import Service from '../utils/http';
import { Anchor, Button } from '@mantine/core';
const obj = new Service();

export default function Output(props) {

    return (
        <div>
            <Anchor href={ obj.getBaseURL() + "/api/s/" + props?.input?.shortCode} target="_blank">
                Anchor component
            </Anchor>

            <Button onClick={()=>{

            }} > Copy the short code </Button>

        </div>
    )
}
