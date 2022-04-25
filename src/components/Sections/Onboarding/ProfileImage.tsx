import profile from '../../../assets/profile.jpg';

const ProfileImage = () => {
  return <div className='rounded-full w-56 h-56 mx-auto overflow-hidden shadow-xl shadow-gray-300 md:mx-0 md:w-80 md:h-80 shrink-0'>
  <img src={profile} className='object-cover h-full w-full ' />
</div>
}

export default ProfileImage