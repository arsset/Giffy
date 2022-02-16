

import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

const useGlobalGifs = () => {
    return useContext( GifsContext ).gifs;
}

export default useGlobalGifs