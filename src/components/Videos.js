import classes from "../styles/videos.module.css";
import Video from "../components/Video"

const Videos = () => {
    return ( 
        <div className={classes.videos}>
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
    );
}
 
export default Videos;