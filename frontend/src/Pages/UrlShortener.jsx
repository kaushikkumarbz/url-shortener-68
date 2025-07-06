import { Anchor, Button, Container, Stack, Text, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http';
import Output from '../Components/Output';
const service = new Service();

export default function UrlShortener() {

    /*
    {
        "originalUrl":"https://mentorpick.com/submissions/viewSubmission/6868f8a5615c80cd556e8b97",
        "expiresAt":"",
        "title":"",
        "customUrl":""
    }

    */

    async function generateShortUrl() {
        try {
            let data = await service.post("s", input);
            setResponse(data);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
    const [input, setInput] = useState(
        {
            "originalUrl": "",
            "expiresAt": "",
            "title": "",
            "customUrl": ""
        }
    )
    const [response, setResponse] = useState(null);
    return (
        <Container size={"xs"}>
            {response ?<Output input={response} /> :
                <Stack m="xl" >
                    <Text size='30px' style={{ "textShadow": "1px 2px 10px" }} > Shorten Your URL Here </Text>
                    <TextInput onChange={(e) => {
                        setInput({ ...input, originalUrl: e.target.value });
                    }} required label="Original URL" />
                    <TextInput onChange={(e) => { setInput({ ...input, customUrl: e.target.value }); }} label="Customize your link ( Optional )" />
                    <TextInput onChange={(e) => { setInput({ ...input, title: e.target.value }); }} label="Title ( Optional )" />
                    <TextInput onChange={(e) => { setInput({ ...input, expiresAt: e.target.value }); }} type='date' label="Date of Expiry ( Optional )" />
                    <Button disabled={input.originalUrl.length < 5} onClick={() => { generateShortUrl() }}> Generate Short url </Button>
                </Stack>}
        </Container>
    )
}
