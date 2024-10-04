import React from 'react';
import { Orangeboxsmall } from './orangebox';
import '../styles/profile.css';


export const profileData = {
  dPicture: <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" 
            alt='my image' 
            width={"80px"} 
            height={"80px"}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
            />,
  name: "winsome Code",
  bio: "I'm a full stack developer, with passion of making the tech world a home where problems are solved at ease",
  proflieViewer: 65,
  postImpression: 50,
  date: new Date().toLocaleString()
}

function Profile() {
  return (
    <div className='profile-card-container max-w-60 bg-gray rounded-lg '>
      <div className='profile-bg-cover'></div>
      <div className='relative flex flex-row justify-center'>
        <span className='absolute mt-6'>{profileData.dPicture}</span>
      </div>
      <div class="flex flex-col items-center text-center rounded-b-lg mt-14 pt-8 bg-white">
        <a href='/' className='prolfile-name text-base font-bold mt-2 hover:underline'>
          {profileData.name}
        </a>
        <div className='profile-bio text-xs max-w-[70%] py-4'>
          {profileData.bio}
        </div>
      </div>
      <div className='border-2 py-4 font-semibold text-xs rounded-lg mt-1 bg-white'>
        <div className='flex flex-row justify-between py-1 px-4 hover:bg-gray-100'>
          <span>Proflie Viewer</span>
          <span>{profileData.proflieViewer}</span>
        </div>
        <div className='flex flex-row justify-between py-1 px-4 hover:bg-gray-100'>
          <span>Post Impression </span>
          <span>{profileData.postImpression}</span>
        </div>
      </div>
      <div className='group border-2 text-xs text-left p-3 space-y-2 rounded-lg mt-1 bg-white hover:bg-gray-100 hover:cursor-pointer'>
        <div>Job search smarter with prenium </div>
        <div className='flex items-center font-bold gap-x-2 group-hover:text-[#0a66c2] group-hover:underline'>
          <Orangeboxsmall />
          Try for NGN0
        </div>
      </div>

      <div className='group flex flex-row justify-start items-center border-2 text-xs text-left p-2 gap-x-2 rounded-lg mt-1 bg-white hover:bg-gray-100 hover:cursor-pointer'>
        <span className='text-gray-800'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentcolor", transform: ";msFilter:;" }}><path d="M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"></path></svg>
        </span>
        <span className='font-bold group-hover:text-[#0a66c2] group-hover:underline'>
          Saved items
        </span>
      </div>
    </div>
  )
}

export default Profile;