import React, { useEffect } from 'react'
import { LOGO, USER_AVATAR } from "../utils/constants"
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);
    useEffect(() => {

    }, [userData])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {

        });
    }

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
                <img className='w-12 h-12 ' alt='usericon' src={userData?.photoURL} />
                <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>(Sign Out)</button>
            </div>}
        </div>

    )
}

export default Header