import PropTypes from 'prop-types';
import {FriendsList, FriendSection, Item, Status, Avatar, Name} from './Friends.styled'

export const FriendList = ({friends}) =>{
    return(
        <FriendSection>
            <FriendsList>FriendsList
                {friends.map(friend=>(
                    <Item key={friend.id}>
                        <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
                        <Avatar src={friend.avatar} alt={friend.name}/>
                        <Name>{friend.name}</Name>
                    </Item>
                ))}
                
            </FriendsList>
        </FriendSection>
    )
}

FriendList.propTypes = {
    Status: PropTypes.bool,
    Avatar: PropTypes.string,
    Name: PropTypes.string,
  };