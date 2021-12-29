import axios from "axios";

function HomeTimeline(){

    const submitHandler = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8085/home")
            .then((res)=>{
                console.log(res);
            });
    };

    return<>
        <form onSubmit={submitHandler}>
            <button type="submit" class="btn btn-primary">Call home timeline service</button>
        </form>
    </>
}

export default HomeTimeline;