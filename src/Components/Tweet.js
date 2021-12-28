import {AiFillLike, AiFillStar, AiFillDelete} from 'react-icons/ai'
import {FaCommentAlt, FaRetweet} from 'react-icons/fa'

function Tweet(){
    return <>

        <div class="row">
            <div class="col-md-6 text-end">
                <div class="mb-3 ">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add your tweet"></textarea>
                </div>
                <button type="button" class="btn btn-info ">Tweet</button>
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
                    <AiFillLike /> <FaCommentAlt /> <FaRetweet /> <AiFillStar /> <AiFillDelete />
                </div>
            </div>
        </div>
    </>
}

export default Tweet;