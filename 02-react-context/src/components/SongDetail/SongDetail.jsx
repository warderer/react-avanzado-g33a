import { useContext } from "react";
import { SongContext } from "../../context/useSongContext";



const SongDetail = () => {

    const songContext = useContext(SongContext);

    return (
        <div>
            {songContext.selectedSong}
        </div>
    )
}

export default SongDetail;