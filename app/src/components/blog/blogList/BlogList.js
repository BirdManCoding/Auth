import { CircularProgress } from "@material-ui/core";
import { useDispatch} from "react-redux"
import { useHistory } from "react-router-dom"

import {resetPosts, getPosts} from "../../../actions/postActions"
import ErrorModal from "../../shared/containers/errorModal/ErrorModal"
import BlogItem from "./blogItem/BlogItem"
import useStyles from "./styles"





function BlogList({postsData}){
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    function closeErrorModal(){
        dispatch(resetPosts())
        dispatch(getPosts())
        history.push("/")
    }

    if(postsData.isLoading) return <CircularProgress color="primary"/>
    if(postsData.error) return <ErrorModal closeFn={closeErrorModal}/>

    const singlePost = postsData.data.map(post => <BlogItem key={post._id} postData={post}/>)
    
    return <div className={classes.blogList}>{singlePost}</div>
}

export default BlogList