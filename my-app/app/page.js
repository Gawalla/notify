import Sidebar from './components/sidebar';
import ChatBox from './components/ChatBox';
import FriendList from './components/friendList';
export default function Home() {
  return (
    <div className='flex'>
      <Sidebar/>
      <FriendList/>
      <ChatBox/>
    </div>
  );
}
