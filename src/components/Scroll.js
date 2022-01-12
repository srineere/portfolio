import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '5vh',
        right: '0   ',
        backgroundColor: '#DCDCDC',
        color: 'black',
        borderRadius: '50px',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'white',
            backgroundColor: '#626262'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: 'rgb(220,220,220,0.7)',
        },
        [theme.breakpoints.up('lg')]: {
            right: '3%',
        },
    }
})
)

const Scroll = ({
    showBelow,
}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    <FontAwesomeIcon icon={faAngleUp}/>
                </IconButton>
            }
        </div>
    )
}
export default Scroll