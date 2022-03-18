import React from 'react';
import '../CSS/Modal.css';

const Modal = (props) => {
  return (
    <div>    
      <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 href="/" className = "font-main">gupta ji</h5> 
              <h6>says</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {props.message}
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn primary w-100" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
