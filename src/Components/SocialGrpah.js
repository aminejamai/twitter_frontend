import axios from "axios";

function SocialGraph(){

    const followHandler = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8088/follow/1")
            .then((res)=>{
                console.log(res);
            });
    }

    return <>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-7 text-start">
                <strong>Ahmed Amine</strong> <br />
                <span class="text-muted">34 mutual friends</span>
            </div>
            <div class="col-3">
                <button type="button" onClick={followHandler} class="btn btn-info">Follow</button>
            </div>
        </div>
    </>
}

export default SocialGraph;