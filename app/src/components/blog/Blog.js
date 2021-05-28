import React from 'react';
import {Typography, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";

import BlogList from "./blogList/BlogList"
import useStyles from "./styles"





export default function Blog() {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        <Paper className={classes.blog} elevation={3}>
            <Typography variant="h2" align="center" className={classes.blog__heading}>Blog</Typography>
            <Typography variant="body1"  className={classes.blog__intro}>I'm baby humblebrag sartorial bitters taxidermy. Pour-over tilde dreamcatcher kogi church-key. Polaroid skateboard disrupt cred selfies umami knausgaard austin cronut tofu. Fingerstache art party heirloom pitchfork, pok pok chambray asymmetrical. Artisan seitan letterpress, jean shorts snackwave beard bespoke succulents austin shabby chic slow-carb shaman. Vape ugh drinking vinegar tilde. Succulents fixie messenger bag stumptown ethical vaporware bicycle rights organic squid gluten-free chartreuse. Small batch occupy next level, heirloom cray pitchfork ramps direct trade adaptogen pok pok raclette. Seitan dreamcatcher chia single-origin coffee air plant fixie pork belly kickstarter skateboard vinyl synth. Literally jean shorts franzen four loko sartorial biodiesel. Gastropub banh mi taxidermy brooklyn bushwick crucifix microdosing messenger bag hashtag DIY pickled street art portland.</Typography>
            <Typography variant="h4"  className={classes.blog__subHeading}>All Blogs:</Typography>
            <BlogList postsData={posts}/>
        </Paper>
    )
}
