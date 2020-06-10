import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  TopBar,
  FeedContainer,
  StoriesContainer,
  StoryItem,
  StoryLabel,
} from './styles';

import avatarImg from '../../assets/avatar.png';
import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';
import dummyUser4 from '../../assets/dummyUser4.png';
import dummyUser5 from '../../assets/dummyUser5.png';
import dummyUser6 from '../../assets/dummyUser6.png';
import FeedPost from '../../Components/FeedPost/';
import AvatarStoryPhoto from '../../Components/AvatarStoryPhoto/';

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Icon name="camera" size={32} style={{marginLeft: 10}} />
        <Text>NATIVEGRAM</Text>
        <Icon name="send" size={32} style={{marginRight: 10}} />
      </TopBar>

      <FeedContainer>
        <StoriesContainer>
          <StoryItem>
            <AvatarStoryPhoto image={dummyUser4} size={64} />
            <StoryLabel>Your Story</StoryLabel>
          </StoryItem>
          <StoryItem>
            <AvatarStoryPhoto image={dummyUser2} size={64} />
            <StoryLabel>celinedion</StoryLabel>
          </StoryItem>
          <StoryItem>
            <AvatarStoryPhoto image={dummyUser3} size={64} />
            <StoryLabel>missjacks...</StoryLabel>
          </StoryItem>
          <StoryItem>
            <AvatarStoryPhoto image={dummyUser4} size={64} />
            <StoryLabel>Peter23</StoryLabel>
          </StoryItem>
          <StoryItem>
            <AvatarStoryPhoto image={dummyUser5} size={64} />
            <StoryLabel>neymar</StoryLabel>
          </StoryItem>
        </StoriesContainer>

        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </FeedContainer>
    </Container>
  );
};
export default Home;