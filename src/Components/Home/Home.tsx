import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../Components/Navbar';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

const useStyle = makeStyles({
    background: {
        backgroundImage: `linear-gradient(rgba(0, 47, 95) 0%, rgba(121,120,1,1) 47%, rgba(249,249,249,1) 100%)`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'grey',
        textDecoration: 'none',
    },
});

export const Home = ( props: Props ) => {

    const classes = useStyle();  

  return (
    // <div className={classes.header}>
    //     { props.title }
    // </div>
    <>
       <Navbar />
       <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <button>
                    <Link to='/drinks' className={classes.button_text}>Take me to my Tequila Inventory</Link>
                </button>
            </div>
       </div>
    </>
  )
}
