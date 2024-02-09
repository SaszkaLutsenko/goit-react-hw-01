import {
    Container,
    Avatar,
    StatsContainer,
    StatsItem,
    Description,
    Info,
  } from './Profile.styled';
  
  export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }) => {
    return (
      <Container>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <Info>{username}</Info>
          <Info>@{tag}</Info>
          <Info>{location}</Info>
        </Description>
  
        <StatsContainer>
          <StatsItem>
            <span>Followers </span>
            <span>{followers}</span>
          </StatsItem>
          <StatsItem>
            <span>Views </span>
            <span>{views}</span>
          </StatsItem>
          <StatsItem>
            <span>Likes </span>
            <span>{likes}</span>
          </StatsItem>
        </StatsContainer>
      </Container>
    );
  };