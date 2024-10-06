import './App.css';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import 'boxicons';
import Profile from './components/Profile.js';
import CreatePost from './components/CreatePost.js';
import Post from './components/Post.js';


function App() {

  const postData =[
    {
    name: "George Chisom",
    bio: "I'm a full stack developer, with passion of making the tech world a home where problems are solved at ease",
    text: "we are diving into the tech world to hel solve problems and enjoy the benefits"
    },
    {
      name: "Joshua Ade",
      bio: "I'm a musician and producer, with the spirit of producting inspiring songs that will change the world",
      },
    {
      name: "Sani Aliyu",
      bio: "I'm a business  mugu and philantropis, navigating the poximity of business the will metamorphose into an empire to enable future generations to aspire and grow",
    },
    {
      name: "Gift Kalu",
      bio: "A fashion designer and stylist extract the astetist art of beauty around the globe",
    },
    {
      name: "user one",
      bio: "user one bio",
    },
    {
      name: "user two",
      bio: "user two bio",
    },
    {
      name: "user three",
      bio: "user three bio",
    },
    {
      name: "user four",
      bio: "user four bio",
    },
    {
      name: "user five",
      bio: "user five bio",
    },
    {
      name: "user six",
      bio: "user six",
    },
  
  ]

  return (
    <div className="App">
      <Navbar />

      <div className='content-container mt-8 flex flex-row gap-x-8 mx-auto max-w-6xl'>
        <div>
          <Profile />
        </div>
        <div className='w-[60%] max-w-[60%]'> 
          <CreatePost />  
          
          <div className='space-y-2 py-2'>
            {
              postData.map((eachPost) => (<Post {...eachPost}/>))
            }
          </div>
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
