
// import React from "react";
// import { Typography, Button } from "@material-tailwind/react";
// import { FlagIcon } from "@heroicons/react/24/solid"
// import { useNavigate } from "react-router-dom";

// export default function Page404(){

//     const nevigate =  useNavigate()
//   return (
//       <div className="h-screen mx-auto grid place-items-center text-center px-8">
//         <div>
//           <FlagIcon className="w-20 h-20 mx-auto" sx={{color:"rgb(251, 26, 93)"}} />
//           <Typography
//             variant="h1"
//             color="blue-gray"
//             className="mt-10 !text-3xl !leading-snug md:!text-4xl"
//           >
//             Error 404 <br /> It looks like something went wrong.
//           </Typography>
//           <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
//             Don&apos;t worry, our team is already on it.Please try refreshing
//             the page or come back later.
//           </Typography>
//           <Button color="gray" className="w-full px-4 md:w-[8rem]" onClick={()=>{nevigate(-1)}}>
//             back home
//           </Button>
//         </div>
//       </div>
//   );
// }


import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h1">
                            404F
                        </Typography>
                        <Typography
                            variant="h4"
                        >
                            It looks like something went wrong.
                        </Typography>
                        <Typography>
                            Don&apos;t worry, our team is already on it.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: 'rgb(251, 26, 93)' }} onClick={() => { navigate(-1) }}>Back Home</Button>
                    </Grid>
                    <Grid xs={6}>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                            alt=""
                            width={500} height={250}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}