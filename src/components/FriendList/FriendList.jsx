import FriendListItem from '../FriendListItem/FriendListItem';
import { Item, List } from './FriendList.styled';

export const FriendList = ({friends}) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Item key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Item>
        );
      })}
    </List>
  );
};