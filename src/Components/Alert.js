import React from 'react'

function Alert(props) {
    return (
        <div className="container my-3">
            {props.message && <div className='container'>
                <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
                    {props.message}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </div>}
        </div>
    )
}

export default Alert
