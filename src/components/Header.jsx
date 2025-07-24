import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { removeGptMovies, toggleGptSearchView } from '../redux/gptSlice';
import { changeLanguage } from '../redux/configSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useEffect(() => {

    }, [userData])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {

        });
    }

    const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
        dispatch(removeGptMovies());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt='logo' />
            {userData && <div className='flex p-2'>
                {showGptSearch && (
                    <select
                        className="p-2 m-2 bg-gray-900 text-white"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                )}
                <button
                    className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {showGptSearch ? "Homepage" : "GPT Search"}
                </button>
                <img className='w-12 h-12 ' alt='usericon' src={userData?.photoURL} />
                <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>(Sign Out)</button>
            </div>}
        </div>

    )
}

export default Header