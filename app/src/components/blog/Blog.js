import React from 'react';
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

export default function Blog() {
    const posts = useSelector((state) => state.posts);
    console.log(posts)

    return (
        <div>
            <Typography variant="h2">Blog</Typography>
        </div>
    )
}
