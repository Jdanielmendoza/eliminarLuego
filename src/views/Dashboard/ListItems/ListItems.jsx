import './ListItems.css';

import { useState } from 'react';

function ListItems({ lista, sublistas }) {
    const [subListOpen, setSubListOpen] = useState(false);

    const toggleSubList = () => {
        setSubListOpen(!subListOpen);
    };

    return (
        <li className='li'>
            <div onClick={toggleSubList} className={`navList__subheading  row row--align-v-center ${!subListOpen ? '' : 'navList__subheading--open'}`} >
                <span className="navList__subheading-icon"><i className="fas fa-briefcase-medical"></i></span>
                <span className="navList__subheading-title"> {lista} </span>
            </div>
            <ul className={`subList ${subListOpen ? '' : 'subList--hidden'}`}>
                {sublistas.map((item,index) => (
                    <li key={index} className="subList__item">
                        {item.titulo}
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default ListItems ;


/* 
const ListItems = ({ index, lista, sublistas }) => {

    const viewList = (index) => {
        console.log(document.getElementById({index}));
        document.querySelector('.subList').classList.toggle('subList--hidden')[index];
    }



    return (
        <li onClick={() => viewList(index)} id={index}>
            <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-briefcase-medical"></i></span>
                <span className="navList__subheading-title"> {lista} </span>
            </div>
            <ul className="subList subList--hidden">
                {sublistas.map((item, index) =>
                    <li key={index} className="subList__item">
                        {item.titulo}
                    </li>
                )}
            </ul>
        </li>
    )
}
export default ListItems */