import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// for creating and updating posts

// The post object contains data for editing an existing post.
export default function PostForm({ post }) {

    // register: Registers form inputs.
    // handleSubmit: Handles form submission.
    // watch: Watches changes in input fields.
    // setValue: Programmatically updates field values.
    // control: Used with controlled components like the rich text editor.
    // getValues: Fetches the current form values.

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        // The defaultValues object initializes form fields:
        // If post exists (edit mode), it uses its values.
        // Otherwise (create mode), it defaults to empty strings or "active" for status.

        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();

    //retrieves the authenticated user's data from the state
    const userData = useSelector((state) => state.auth.userData);

    //handles form submission. It processes the data submitted from the form.
    const submit = async (data) => {

        //If a post exists, the form is in edit mode.
        if (post) {

            //Checks if a new image is uploaded
            //If so, uploads it using appwriteService.uploadFile.

            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            //If a new file is uploaded, deletes the previous featured image.
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
            // Updates the post by calling appwriteService.updatePost with:
            // The post ID (post.$id).
            // The form data spread into the payload.
            // If a new file was uploaded, includes the new featuredImage.

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            //If the update is successful, navigates to the updated post's page using its ID.
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
        else
        //If no post exists, the form is in create mode.
        {
            //Uploads the image file.
            const file = await appwriteService.uploadFile(data.image[0]);

            //   If the file upload succeeds:
            if (file) {
                // Adds the uploaded image's ID (fileId) as featuredImage.
                const fileId = file.$id;
                data.featuredImage = fileId;

                // Calls appwriteService.createPost to create a new post with the form data and the authenticated user's ID (userData.$id).

                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                // Navigates to the new post's page if successful.
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };
    // transforms a string (value) into a URL-friendly slug:

    // Removes extra whitespace.
    // Converts to lowercase.
    // Replaces non-alphanumeric characters with hyphens.
    // Converts spaces to hyphens.

    //Memoized with useCallback to prevent unnecessary re-computation.
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    //Watches for changes in the title field using watch.
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {

                //Updates the slug field in real-time using slugTransform whenever title changes.

                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        //Cleans up the subscription on component unmount.
        return () => subscription.unsubscribe();

    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}