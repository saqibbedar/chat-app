import "./Chat.css"
import {ChatBox, LeftSidebar, RightSidebar} from "../../components/components"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Chat
