import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // Ensure no content overlap with footer or navbar
    if (posts.length === 0) {
        return (
            <Container>
                <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
                    <p className='text-2xl'>Loading posts...</p>
                </div>
            </Container>
        )
    } else {
        return (
            <Container>
                {/* Add padding/margin to leave space below the navbar */}
                <div className="flex flex-wrap min-h-screen mt-24 mb-16">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        )
    }
}

export default AllPosts
