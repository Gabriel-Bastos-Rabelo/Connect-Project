import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = ()=>{
    return (
        <Box flex={4} p={2} display="flex" justifyContent="center">
        <div className='d-flex flex-column'>
        <Post 
        image={"https://i.postimg.cc/yN7XHfNB/bagan-myanmar-MOSTBEAUTIFUL0921-7de032dd5a894dbc970896d65fc0283b.webp"} 
        tittle={"Bagan, Myanmar"} 
        description={"It's hard to truly grasp the magnitude of Bagan Archaeological Zone, dominated by thousands of temples, pagodas, and stupas. Explore the UNESCO World Heritage Site on a bike (or e-bike to cover even more ground). For an eagle's-eye view, take a hot-air balloon ride at sunrise to see the temples scattered across the lush landscape."}
        />
        <Post
        image={"https://i.postimg.cc/MpgH0HhL/Grand-Canyon-Don-Eim03-9ed8c918096f46ab91a58fa983f9e713.webp"}
        tittle={"Grand Canyon, Arizona"}
        description={"Offering some of the most spectacular scenery on the planet, the Grand Canyon truly merits the term \"breathtaking.\" The vast geologic wonderland, one mile deep and up to 18 miles across, displays countless layers of colorful rock and practically hypnotic vistas."}
        />
        <Post
        image={"https://i.postimg.cc/8zGNTWgN/ha-long-bay-vietnam-MOSTBEAUTIFUL0921-910a3a82a03f4bb59d49290fbdc2a6db.webp"}
        tittle={"Hạ Long Bay, Vietna"}
        description={"With hundreds of jungle-covered karsts springing out of emerald green waters, Hạ Long Bay is a photographer's dream. Hop on a boat or kayak to explore the UNESCO World Heritage Site's beautiful islands and surreal cave systems."}
        
        />
        <Post
        image={"https://i.postimg.cc/ZRpwY9Sz/fernando-de-noronha-brazil-MOSTBEAUTIFUL0921-f0500a8f70314eb385389a63b7324f16.webp"}
        tittle={"Fernando de Noronha, Brazil"}
        description={"Blissfully isolated 217 miles off the Brazilian mainland, this lovingly-preserved archipelago offers pristine beaches and clear waters abundant in marine life perfect for world-class snorkeling."}
        />
    </div>
        </Box>
    )
}

export default Feed