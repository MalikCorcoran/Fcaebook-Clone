import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className= "header">
            <div className= "header__left">
                <img src="data:image/png;base64,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" alt="" />
                <div className="header__input">
                    <SearchIcon  />
                    <input placeholder="Search Facebook" type= "text" />
                </div>

            </div>

            <div className= "header__center">
               <div className = "header__option header__option--active">
                    <HomeIcon fontSize="large" />  
                </div> 
               <div className = "header__option">
                    <FlagIcon fontSize="large" />  
                </div> 
               <div className = "header__option">
                    <SubscriptionsIcon fontSize="large" />  
                </div> 
               <div className = "header__option">
                    <StorefrontOutlinedIcon fontSize="large" />  
                </div> 
               <div className = "header__option">
                    <SupervisedUserCircleIcon fontSize="large" />  
                </div> 
            </div>

            <div className= "header__right">
                <div className="header__info">
                    <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>


            </div>

        </div>
    )
}

export default Header
