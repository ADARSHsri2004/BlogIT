import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

//fetches a specific post's data based on the slug parameter and renders an editable form (PostForm).
function EditPost() {
    const [post, setPosts] = useState(null)
    //useParams from react-router-dom extracts route parameters from the URL
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost

// Flow:
        // On mount:
            // Checks if slug exists.
            // If valid, fetches the post data.
            // If invalid, redirects to the home page.
        // Passes the fetched post data to PostForm.