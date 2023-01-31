import React from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfile,
  setIsEdit,
  setMyName,
  uploadPhoto,
} from "../../redux/actions";

function Modal() {
  const { myName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="modalS" onClick={() => setIsEdit(false)}>
      <div className="modalS__content" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h4>Add Your Accaunt Photo</h4>
          <i
            onClick={() => dispatch(setIsEdit(false))}
            className="small material-icons "
          >
            close
          </i>
        </div>
        <div className="modalContent">
          <div className="file-field input-field">
            <div className="btn #0d47a1 blue darken-4">
              <i className="material-icons">add_a_photo</i>
              <input
                type="file"
                onChange={(e) => uploadPhoto(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Your Photo"
              />
            </div>
          </div>
          <div className="input-field col s6 edit-name">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              onChange={(e) => dispatch(setMyName(e.target.value))}
            />
            <label htmlFor="icon_prefix">First Name</label>
          </div>
        </div>
        <div className="modalFooter">
          <button
            className="btn #0d47a1 blue darken-4"
            onClick={() => dispatch(editProfile(myName))}
          >
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
