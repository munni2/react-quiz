import classes from "../styles/video.module.css";
import videoThumbnail from "../assets/images/download.png";
const Video = ({title, id, noq}) => {
    return ( 
      <div className={classes.video}>
        {/* <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} /> */}
        <img src={videoThumbnail} alt={title} />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total point : {noq * 5}</p>
        </div>
      </div>
    );
}
 
export default Video;