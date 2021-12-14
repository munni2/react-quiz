import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, startAt, get, limitToFirst } from "firebase/database";

const useVideoList = (page) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] =  useState([]);
    const [hasMore, sethasMore] =  useState(true);

    useEffect(() => {
    async function fetchVideos() {
        //   database related works
        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videoQuery = query(
            videosRef,
            orderByKey(),
            startAt("" + page),
            limitToFirst(9)
        );

        try{
            setError(false); 
            setLoading(true);
            // request firebase database
            const snapshort = await get(videoQuery);
            setLoading(false);

            if(snapshort.exists()) {
                setVideos((preVideos) => {
                    return [...preVideos, ...Object.values(snapshort.val())];
                });
            }else {
                sethasMore(false);
            }

        } catch(err) {
            console.log(err);
            setLoading(false);
            setLoading(true);
        }
    }

    setTimeout(() => {
        fetchVideos(); 
    }, 1000);

    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore
    }
}
 
export default useVideoList;