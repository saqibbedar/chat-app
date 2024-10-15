import './ChatBox.css'
import assets from "../../assets/assets"

const ChatBox = () => {
  return (
    <div className='chat-box'>

      {/* Chat header */}
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Richard Sanford <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>

      {/* Chat body */}
      <div className="chat-msg">

        {/* Sender Message */}
        <div className="sender-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="sender-msg">
          <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        {/* Receiver Message */}
        <div className="receiver-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

      </div>

      {/* Chat footer */}
      <div className="chat-input">
        <input type="text" name="message" placeholder='Send a message' />
        <input type="file" name='image' id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>


    </div>
  )
}

export default ChatBox
