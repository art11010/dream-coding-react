import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const hadleClick = (event) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={hadleClick}>button</button>
      <Avatar image="https://velog.velcdn.com/images/art11010/profile/6a4adef6-1241-4f3c-a98a-8b6c56e494a6/social.png" />
      <Profile
        image="https://velog.velcdn.com/images/art11010/profile/6a4adef6-1241-4f3c-a98a-8b6c56e494a6/social.png"
        name="치히로"
        job="프론트앤드 개발자"
        isNew
      />
      <Profile
        image="https://velog.velcdn.com/images/art11010/post/304651d8-b0e5-4176-a1de-b7c22405f225/image.png"
        name="치히로"
        job="프론트앤드 개발자"
      />
      <Profile
        image="https://velog.velcdn.com/images/art11010/post/274a4bd6-2085-44ff-a164-96ecf9a3d68d/image.jpeg"
        name="치히로"
        job="프론트앤드 개발자"
      />
    </>
  );
}

export default AppProfile;
