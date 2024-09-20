import React from 'react';

const Modals = (modal) => {
    return (
    <div className="modal" tabindex="-1" id={modal.number} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{modal.name}</h4>
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

export default Modals