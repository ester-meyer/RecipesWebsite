import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import useFormControler from '../Hooks/useFormControler'

export default function SignUpForm() {

    const { register, handleSubmit, errors , onSubmit } = useFormControler()
    return (
        <Stack sx={{ gap: 4, mt: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl error={!!errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" {...register("name", { required: "name is requured" })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </FormControl>
                <FormControl error={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        sx={{
                            '& .MuiInput-underline:before': {
                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // צבע ברירת מחדל
                            },
                            '& .MuiInput-underline:after': {
                                borderBottom: '1px solid rgb(208, 0, 64)', // צבע כאשר בפוקוס
                            },
                            '&:focus': {
                                outline: 'none',
                            },
                        }}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format"
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </FormControl>
                <FormControl error={!!errors.password}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
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
    )
}