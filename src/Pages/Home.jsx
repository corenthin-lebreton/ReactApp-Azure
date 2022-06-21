import React from 'react';
import "./../css/styles.css";
import Ipssi from "../img/ipssi.png";
const homePage = () => {
    return (
        <div className="presentation">
            <p className="text">
                Sur ce site vous trouverez un chatbot vous permettant de vous renseignez sur la grande Ecole d'informatique : IPSSI !
            </p>

                    <img className="image" src={Ipssi} />

        </div>


    );
};

export default homePage;