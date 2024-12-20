import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        // appwriteService.getPosts().then((posts) => {
        //     if (posts) {
        //         setPosts(posts.documents)
        //     }
        // })

    }, [])
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation on page load
        setIsVisible(true);
    }, []);




    const gotoAddpost = () => {
        // Replace '/destination' with the route or URL you want to navigate to
        navigate("/add-post");
    }
    return (

        <Container>
            <div className='h-screen  w-full relative top-0 text-center text-white justify-center bg-[url("/t3.png")]'>

                <div className='flex flex-col pt-24 items-center  gap-8 '>
                    <p className='text-5xl font-semibold mt-10'> Unleash Your Tech Creativity with BlogIT</p>
                    <p className='text-xl mb-4'>Your go-to platform for creating, sharing, and discovering IT insights.</p>
                    <button className='bg-green-500 w-[10vw] p-3 rounded-lg transition transform hover:scale-105  hover:bg-green-600  hover:text-md hover:shadow-lg  active:bg-blue-500  active:text-white' onClick={gotoAddpost}>Create Blog</button>

                </div>

            </div>
            <div className='h-[75vh] bg-[rgb(255,128,0)] flex flex-row justify-between text-white '>
                <div className='flex flex-col w-[44vw] justify-center pl-40 text-left gap-2'>
                    <h1 className='text-[44px]'>Write. Edit. Share. Inspire.</h1>
                    <p className='text-[18px] text-left'>BlogIT empowers IT enthusiasts to express their ideas, connect with like-minded individuals, and contribute to the ever-evolving world of technology.
                    </p>
                </div>
                <div>
                    <img src="bg6.png" alt="" className='h-[75vh] -z-10 ' />
                    {/* <img src="bg2.png" alt="" className='h-[75vh]' /> */}
                    {/* bg-[rgb(188,56,46)] */}
                </div>

            </div>

            <div className='h-[75vh] bg-[rgb(235,228,255)] flex flex-row justify-between'>
                <div>
                    <img src="bg3.png" alt="" className='h-[75vh]' />
                </div>
                <div className='text-right flex flex-col w-[47vw] justify-center pr-36 gap-2'>
                    <h1 className='text-[44px]'>Hang onto your memories</h1>
                    <p className='text-[18px] text-right'> BlogIT lets you safely store thousands of posts, photos, and more.
                    </p>
                </div>
            </div>

            <div className='h-[75vh] bg-[rgb(118,197,202)] flex flex-row justify-between'>
                <div className='flex flex-col w-[47vw] justify-center pl-36 text-left gap-2'>
                    <h1 className='text-[44px]'>Discover What's Buzzing in IT</h1>
                    <p className='text-[18px] text-left'>Explore the latest tech trends, tips, and tricks from our passionate bloggers.</p>
                </div>
                <div className=''>
                    <img src="b5.png" alt="" className='h-[75vh] ' />
                </div>
            </div>

            {/* <div className='h-[75vh] bg-gray-50'>third</div> */}
            <div className='h-[75vh] bg-[rgb(188,56,46)] flex flex-row justify-between text-white'>
                <div className='text-left flex flex-col w-[44vw] justify-center pl-40 gap-2'>
                    <h1 className='text-[44px]'>Get Started in Minutes</h1>
                    <p className='text-[18px] text-left'>Sign up now and let your voice be heard!</p>
                    <button className='bg-green-500 w-[10vw] p-3 mt-4 rounded-lg transition transform hover:scale-105  hover:bg-green-600  hover:text-md hover:shadow-lg  active:bg-blue-500  active:text-white' onClick={gotoAddpost}>Create Blog</button>
                </div>
                <div>
                    <img src="bg2.png" alt="" className='h-[75vh]' />
                </div>

            </div>
        </Container>
    )
    //all posts page logic

    // if (posts.length === 0) {
    //     return 
    // }
    // else{
    //     return (
    //         <div className='w-full py-8'>
    //             <Container>
    //                 <div className='flex flex-wrap'>
    //                     {posts.map((post) => (
    //                         <div key={post.$id} className='p-2 w-1/4'>
    //                             <PostCard {...post} />
    //                         </div>
    //                     ))}
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }

}

export default Home