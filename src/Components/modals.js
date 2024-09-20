import React from 'react';

const Modals = (modal) => {
    return (
<div className="modal" tabindex="-1" id={modal.number} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">{modal.name}</h5>
      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <p>{modal.description}</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" >Close</button>
    </div>
  </div>
</div>
</div>
    )
}

export default modals;