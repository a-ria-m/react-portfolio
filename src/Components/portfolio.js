import React from 'react';

const Portfolio = (props) => {
    return (
        <><div className="col">
            <div className="content">
                <img src={props.art} alt="art" style={{ width: '100%' }} />
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <button
                    className="btn btn-sm btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={props.modal}
                >
                    More info
                </button>
            </div>
        </div></>
        
    );
};



export default Portfolio
