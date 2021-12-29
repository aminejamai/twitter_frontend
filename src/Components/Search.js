import {useState} from 'react';
import axios from 'axios';

function Search(){
    const [user, setUser] = useState('');
    const [tweet, setTweet] = useState('');
    const [hashtag, setHashtag] = useState('');

    const submitHandlerUser = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8080/search-service/search/user/+{user}")
            .then((res)=>{
                console.log(res);
            });

        setUser('');
    };

    const submitHandlerTweet = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8080/search-service/search/tweet/test")
            .then((res)=>{
                console.log(res);
            });

        setTweet('');
    };

    const submitHandlerHashtag = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8080/search-service/search/hashtag/+{hashtag}")
            .then((res)=>{
                console.log(res);
            });

        setHashtag('');
    };

    return <>
        <div class="row">
            <div class="col-md-4">
                <h4>Search for a user</h4> <br />
                <form class="d-flex" onSubmit={submitHandlerUser}>
                    <input class="form-control me-2" type="search" placeholder="Search for a user" aria-label="Search" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="col-md-4">
                <h4>Search for a tweet</h4> <br />
                <form class="d-flex" onSubmit={submitHandlerTweet}>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={tweet} onChange={(e)=>{setTweet(e.target.value)}}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div class="col-md-4">
                <h4>Search for a hashtag</h4> <br />
                <form class="d-flex" onSubmit={submitHandlerHashtag}>
                    <input class="form-control me-2" type="search" placeholder="Search for a hashtag" aria-label="Search" value={hashtag} onChange={(e)=>{setHashtag(e.target.value)}}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </>
}

export default Search;