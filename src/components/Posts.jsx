import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/asyncThunk/postsThunk";

function  Posts() {
    const dispatch = useDispatch()
    const {posts, isLoading, isError} = useSelector((state) => state.posts)
    function getPosts() {
        dispatch(fetchPosts())
    }
    if(isLoading) {
        return <div>Loading...</div>
    } else if(isError) {
        return <div>{isError}</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={getPosts}>Fetch posts</button>
            <div>
                <ul>
                    {
                        posts.map((post)=> (
                            <li key={post.id}>
                                {post.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Posts;