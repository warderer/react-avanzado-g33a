import SongDetail from "../components/SongDetail/SongDetail";
import SongList from "../components/SongList/SongList";
import { SongProvider } from "../context/useSongContext";
import './home.css'

const Home = () => {

    return (
        <>
            <SongProvider>
                <div className="home-container">
                    <div className="izquierdo">
                        <SongList></SongList>
                    </div>
                </div>
                <div className="derecho">
                    <SongDetail></SongDetail>
                </div>
            </SongProvider>

        </>

    )
}

export default Home;