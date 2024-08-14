import { useContext } from "react";
import { SongContext } from "../../context/useSongContext";

// 3. Acceder a la información compartida del contexto.
const SongList = () => {

    const songContext = useContext(SongContext);

    return (
        <div>
            {
                songContext.loading ? <h1>Cargando</h1>
                    : <ul>
                        {
                            songContext.songList.map((song, index) => {
                                return (<li key={index}>
                                    Canción: {song.title}
                                    Artista: {song.artist}
                                    <button onClick={() => { songContext.setSelectedSong(song.title) }}>Reproducir</button>
                                </li>)
                            }
                            )
                        }
                    </ul>
            }

        </div>
    )
}

export default SongList;