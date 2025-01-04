import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { createUser } from '../Store/UserSlice'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"


export default function SignUpForm() {


const navigate = useNavigate()

const dispatch = useDispatch()
return(

<Stack sx={{ gap: 4, mt: 2 }}>
    <form
        onSubmit={(event) => {
            event.preventDefault();
            const formElements = event.currentTarget.elements;
            const data = {
                name: formElements.userName.value,
                email: formElements.email.value,
                password: formElements.password.value,
                persistent: formElements.persistent.checked,
            };
            dispatch(createUser(data))
            navigate('/RecipeList')
        }}
    >
        <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="userName" />
        </FormControl>
        <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
        </FormControl>
        <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
        </FormControl>
        <Stack sx={{ gap: 4, mt: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Checkbox size="sm" label="Remember me" name="persistent" />
            </Box>
            <Button type="submit" fullWidth
                sx={{
                    backgroundColor: 'rgb(208, 0, 64)',
                    '&:hover': {
                        backgroundColor: 'rgb(251, 26, 93)'
                    }
                }}>
                Sign up
            </Button>
        </Stack>
    </form>
</Stack>
)}