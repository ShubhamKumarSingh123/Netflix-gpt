import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';

const Browse = () => {

    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <>
                <MainContainer />
                {/* <SecondaryContainer /> */}
            </>

        </div>
    )
}

export default Browse