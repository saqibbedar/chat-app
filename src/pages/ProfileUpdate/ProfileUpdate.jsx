import './ProfileUpdate.css'
import assets from "../../assets/assets"
import { useState } from 'react'

const ProfileUpdate = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("Upload profile image");

  return (
    <div className='profile'>
      <div className="profile-container">
        <form >
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                setFileName(file.name);
              }}
              type="file" id='avatar' accept='.png, .jpg, jpeg' hidden />
            <img  src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
            {image ? fileName: "Upload profile image"}
          </label>
          <input type="text" name="name" className="t" placeholder='Your name' required />
          <textarea placeholder='Write profile bio' required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className='profile-logo' src={image ? URL.createObjectURL(image): assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate
