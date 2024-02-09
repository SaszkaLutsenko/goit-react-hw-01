import { Name, OnlineStatus } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <Name>{name}</Name>
      <OnlineStatus style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </OnlineStatus>
    </div>
  );
};

export default FriendListItem;