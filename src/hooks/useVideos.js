import { useEffect, useState } from "react";
import { getVideos } from "../services/getVideos";

export const useVideos = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        getVideos().then(res => {
            setVideos(res.items);
        })
    }, [])

    return videos;
}