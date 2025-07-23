import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
            <Header />
            <div className='w-screen'>
                <MainContainer />
                <SecondaryContainer />
            </div>

        </div>
    )
}

export default Browse