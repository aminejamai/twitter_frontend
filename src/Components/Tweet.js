import {AiFillLike, AiFillStar, AiFillDelete} from 'react-icons/ai'
import {FaCommentAlt, FaRetweet} from 'react-icons/fa'
import {useState} from 'react'
import axios from 'axios';

function Tweet(){
    const [tweet, settweet] = useState('');
    const [Content, setContent] = useState('');
    
    const postTweet = (e) => {
        e.preventDefault();
        const postData = {tweet};
        
        console.log(postData);
        axios.post(`http://localhost:8080/tweet-service/tweet/post`, postData)
            .then((res)=>{
                console.log(res);
            });
        settweet('');
    };

    const commentTweet = (e) => {

        e.preventDefault();
        
        setContent("This is a comment");
        const postData = {Content};
        
        console.log(postData);
        axios.post(`http://localhost:8080/tweet-service/tweet/comment`, postData)
            .then((res)=>{
                console.log(res);
            });
        setContent('');
    };

    const likeHandler = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/tweet-service/tweet/like/1")
            .then((res)=>{
                console.log(res);
            });
    }

    const retweetHandler = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/tweet-service/tweet/retweet/1")
            .then((res)=>{
                console.log(res);
            });
    }

    const favoriteHandler = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/tweet-service/tweet/favorite/1")
            .then((res)=>{
                console.log(res);
            });
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8080/tweet-service/tweet/delete/1")
            .then((res)=>{
                console.log(res);
            });
    }

    return <>

        <div class="row">
            <div class="col-md-6 text-end">
                <div class="mb-3 ">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add your tweet" value={tweet} onChange={(e)=>{settweet(e.target.value)}}></textarea>
                </div>
                <button type="button" onClick={postTweet} class="btn btn-info ">Tweet</button>
            </div>
            <div class="col-md-6">
                <div class="card text-start">
                    <div class="card-body">
                        <h5 class="card-title">Hugo kapp</h5>
                        <h6 class="card-subtitle mb-2 text-muted">19:30</h6>
                        <p class="card-text">Hello my friends, I hope u re doing fine</p>
                    </div>
                </div>
                <div class="text-end" style={{fontSize : "18px", letterSpacing: "1em"}}>
                    <AiFillLike onClick={likeHandler}/> <FaCommentAlt onClick={commentTweet}/> <FaRetweet onClick={retweetHandler}/> <AiFillStar onClick={favoriteHandler}/> <AiFillDelete onClick={deleteHandler}/>
                </div>
            </div>
        </div>
    </>
}

export default Tweet;