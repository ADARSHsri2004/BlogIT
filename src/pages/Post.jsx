import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (

        <div className="min-h-screen pt-20 p-5 flex flex-col  items-center bg-gradient-to-r from-[#f44336] to-[#2196f3]">
            <div className="flex gap-8">
                <div className="w-[40vw] h-fit  flex flex-col  mb-4  p-2 bg-gray-100  border border-black/10 bg-white/30 backdrop-blur-md rounded-xl shadow-lg    transition-transform duration-500 hover:shadow-xl ">
                    <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="max-w-[40vw] max-h-full rounded-xl"/>
                </div>
                <div className=" w-[40vw] h-[80vh]  flex flex-col  mb-4 p-5 bg-gray-100  border border-black/10 bg-white/30 backdrop-blur-md rounded-xl shadow-lg  transition-transform duration-500 hover:shadow-xl ">
                    <div className="text-gray-200  mb-4">
                        <h1 className="text-3xl  font-bold">{post.title}</h1>
                    </div>
                    <div className="w-full text-lg overflow-y-scroll break-words"> 
                        {parse(post.content)}
                    </div>
                </div>
            </div>


            {isAuthor && (
                <div className="flex  justify-center mt-3">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button bgColor="bg-green-500" className="mr-3 w-[7vw] p-3 transition-all duration-400 hover:bg-green-600 hover:scale-105 hover:shadow-lg">
                            Edit
                        </Button>
                    </Link>
                    <Button bgColor="bg-red-500" className="w-[7vw] p-3 transition-all duration-400 hover:bg-red-600 hover:scale-105 hover:shadow-lg" onClick={deletePost}>
                        Delete
                    </Button>
                </div>
            )}
        </div>

    ) : null;
}