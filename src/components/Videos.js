import classes from "../styles/videos.module.css";
import Video from "../components/Video";
import {Link} from "react-router-dom"

const Videos = () => {
    return ( 
        <div className={classes.videos}>
          <Link to="/quiz"><Video /></Link>
        </div>
    );
}
 
export default Videos;