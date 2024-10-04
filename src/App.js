import './App.css';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import 'boxicons';
import Profile from './components/Profile.js';
import CreatePost from './components/CreatePost.js';
import Post from './components/Post.js';


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content-container mt-8 flex flex-row gap-x-8 mx-auto max-w-6xl'>
        <div>
          <Profile />
        </div>
        <div className='w-[60%] max-w-[60%]'> 
          <CreatePost />  
          
          <div>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((eachPost) => {
                <Post />
               })
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
