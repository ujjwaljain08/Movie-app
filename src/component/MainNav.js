import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
    background:"lightblack",
    zIndex:100,
     
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
const handleClick=()=>{
  window.scroll(0,0)
}
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <Link to="/"> <BottomNavigationAction label="Tranding" icon={<WhatshotIcon/>} /></Link>
     <Link to="/movies">  <BottomNavigationAction label="Movies" icon={<MovieIcon />} /></Link>
    <Link to="/series"> <BottomNavigationAction label="TV Series" icon={<LiveTvIcon />} /></Link>
     <Link to="/search">
     <BottomNavigationAction label="Search" icon={<SearchIcon />} />
     </Link>
     <BottomNavigationAction label="Go Top" onClick={handleClick} icon={<VerticalAlignTopIcon />} />
    </BottomNavigation>
  );
}