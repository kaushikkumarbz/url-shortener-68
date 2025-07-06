import React, { useEffect, useState } from 'react'
import { Stack , Text} from '@mantine/core';
import Service from '../utils/http';
import { Avatar } from '@mantine/core';
const service = new Service();

export default function Profile() {
    const [user, setUser] = useState({});

    async function getMyData() {
        try {
            let data = await service.get("user/me");
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMyData();
    }, [])

    return (
        <div>
            <Stack
                h={300}
                bg="var(--mantine-color-body)"
                align="center"
                justify="center"
                gap="md"
            >
                <Text>This is my profile</Text>
                <Text size = "xl"> {user.name} </Text>
                <Text>{user.email}</Text>
                <Avatar src={user.avatar} alt="it's me" />
            </Stack>
        </div>
    )
}
