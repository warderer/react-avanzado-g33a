import { createContext, useEffect, useState } from "react";
import listaCanciones from '../assets/listaCanciones.json';

// 1. Crear el contexto
const SongContext = createContext();

// 2. Crear el proveedor (provider)
const SongProvider = ({children}) => {

    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState('');
    const [loading, setLoading] = useState(true);

    // Simulando una petición a una api
    useEffect(() => {
        setTimeout(() => {
            setSongList(listaCanciones)
            setLoading(false)
        }, 3000);
    }, []);

    const data = {
        songList,
        selectedSong,
        setSelectedSong,
        clima: "soleado",
        loading
    }

    return (
        <SongContext.Provider value={data}>
            {children}
        </SongContext.Provider>
    )
}

export {SongContext, SongProvider};