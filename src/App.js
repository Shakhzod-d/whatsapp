import "./App.css";
import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <div className="appContainer">
      <div className="sidebar">
        <div className="header">
          <div className="avatar">
            <img src="avatar1.jpg" alt="" />
          </div>
          <div className="chat-header-right">
            <img src="circle-notch-solid.svg" alt="" />
            <img src="chat.svg" alt="" />
            <img src="more.svg" alt="" />
          </div>
        </div>
        <div className="sidebar-search">
          <div className="sidebar-search-container">
            <img src="search-solid.svg" alt="" />
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
        <div className="sidebar-chats">
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar3.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Mike Daisan</h4>
              <p>Hey meet me tomorrow</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar2.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Amelia Cuiree</h4>
              <p>Please reply</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar4.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Olivia Mike </h4>
              <p>I will be wating for you</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar5.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Sophia Daisan</h4>
              <p>Send me the photo immediately</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar6.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>David</h4>
              <p>I cannot give you the job offer</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar7.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Stieve Smith</h4>
              <p>Please commit the changes</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar8.jpg" alt="" />
            </div>
            <div className="chat-info">
              <h4>Kade Uncle</h4>
              <p>Pay your balance amount before you ask food</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar.png" alt="" />
            </div>
            <div className="chat-info">
              <h4>Mike Daisan</h4>
              <p>This is last message</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar.png" alt="" />
            </div>
            <div className="chat-info">
              <h4>Mike Daisan</h4>
              <p>This is last message</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
          <div className="sidebar-chat">
            <div className="chat-avatar">
              <img src="avatar.png" alt="" />
            </div>
            <div className="chat-info">
              <h4>Mike Daisan</h4>
              <p>This is last message</p>
            </div>
            <div className="time">
              <p>2:44 pm</p>
            </div>
          </div>
        </div>
      </div>
      <ChatList />
      <div className="message-container">
        <div className="header">
          <div className="chat-title">
            <div className="avatar">
              <img src="avatar2.jpg" alt="" />
            </div>
            <div className="message-header-content">
              <h4>Amelia Cuiree</h4>
              <p>online</p>
            </div>
          </div>
          <div className="chat-header-right">
            <img src="search-solid.svg" alt="" />
            <img src="more.svg" alt="" />
          </div>
        </div>
        <div className="message-content">
          <p className="chat-message">
            Hey John! What are you doing now?
            <span className="chat-timestamp">11:33 pm</span>
          </p>
          <p className="chat-message chat-sent">
            Waiting for the bus <span className="chat-timestamp">11:34 pm</span>
          </p>
          <p className="chat-message">
            Shall I come and pickup you?
            <span className="chat-timestamp">11:35 pm</span>
          </p>
          <p className="chat-message">
            I Have a new bike <span className="chat-timestamp">11:38 pm</span>
          </p>
          <p className="chat-message chat-sent">
            Wow very nice. Who gave it to you?{" "}
            <span className="chat-timestamp">11:40 pm</span>
          </p>
          <p className="chat-message">
            It is a gift from my uncle{" "}
            <span className="chat-timestamp">11:41 pm</span>
          </p>
          <p className="chat-message">
            Black color <span className="chat-timestamp">11:41 pm</span>
          </p>
          <p className="chat-message">
            Japan make. Brand new and very beautiful than your fathers' one{" "}
            <span className="chat-timestamp">11:33 pm</span>
          </p>
          <p className="chat-message chat-sent">
            This is a message <span className="chat-timestamp">11:33 pm</span>
          </p>
          <p className="chat-message chat-sent">
            This is a message <span className="chat-timestamp">11:33 pm</span>
          </p>
        </div>
        <div className="message-footer">
          <img src="smile.svg" alt=" " />
          <img src="paper-clip.svg" alt="" />
          <input type="text" placeholder="Type a message" />
          <img src="microphone.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
