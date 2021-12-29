import axios from "axios";

function UserTimeline(){

    const submitHandler = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8082/timeline/user/1")
            .then((res)=>{
                console.log(res);
            });
    };

    return<>
        <form onSubmit={submitHandler}>
            <button type="submit" class="btn btn-primary">Call user timeline service</button>
        </form>
    </>
}

export default UserTimeline;