import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import VanillaTilt from 'vanilla-tilt';


const Home = () => {

    const [userName, setUserName] = useState('');
    const user = useSelector(selectUser);

    useEffect(() => {
        const userHomePage = async () => {
            if (user) {
                try {
                    const res = await fetch('/getdata', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    });
                    const data = await res.json();
                    setUserName(data.name);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        userHomePage();
    }, []);

    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{user ? userName : ''}</h1>
                    <h2> {user ? 'Happy, to see you back' : 'To ExpressPay'}</h2>
                </div>
            </div>

        </>
    )
};


// const Home = () => {
//     const [userName, setUserName] = useState('');
//     const user = useSelector(selectUser);

//     useEffect(() => {
//         const userHomePage = async () => {
//             if (user) {
//                 try {
//                     const res = await fetch('/getdata', {
//                         method: "GET",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                     });
//                     const data = await res.json();
//                     setUserName(data.name);
//                 } catch (err) {
//                     console.log(err);
//                 }
//             }
//         }
//         userHomePage();
//     }, []);

//     useEffect(() => {
//         // Apply the tilt effect to the chatbot element
//         VanillaTilt.init(document.querySelector('.chatbot-container'), {
//             max: 15,
//             speed: 400,
//             glare: true,
//             "max-glare": 0.5,
//         });
//     }, []);

//     return (
//         <>
//             <div className="home-page">
//                 <div className="home-div">
//                     <p className="pt-5">WELCOME</p>
//                     <h1>{user ? userName : ''}</h1>
//                     <h2> {user ? 'Happy, to see you back' : 'To ExpressPay'}</h2>
//                 </div>
//             </div>
//             <div className="chatbot-container">
//                 {/* Chatbot component goes here */}
//             </div>
//         </>
//     );
// };

export default Home;


