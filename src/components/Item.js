import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Item(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="item">
      <div className="left">
        {props.imageUrl ? (
          <img
            className="item-pic"
            src={props.imageUrl}
            alt={`${props.title} Cover Art`}
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <div style={{ textAlign: 'center' }}>Loading: Please Wait</div>
        )}
      </div>
      <div className="right">
        <div className="item-header">
          <h1 className="item-name">{props.title}</h1>
          <p className="item-price">${props.price}</p>
        </div>
        <div className="item-content">
          <p className="item-description">{props.description}</p>
          <p className="item-contact">
            <span style={{ fontWeight: 'bold' }}>Contact Owner:</span>{' '}
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </p>
        </div>
        <div className="item-btns">
          <div className="btn">
            <Button variant="outlined" color="secondary" onClick={props.goBack}>
              Back
            </Button>
          </div>
          {props.email === 'evan.doherty.ny@gmail.com' ? (
            <div style={{ display: 'flex' }}>
              <div className="btn">
                <Button variant="outlined" color="primary">
                  <Link to={`/items/${props._id}/update`}>Update</Link>
                </Button>
              </div>
              <div className="btn">
                <Button
                  variant="contained"
                  color="secondary"
                  // onClick={props.deleteItem}
                  onClick={handleShow}
                >
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            <div className="btn">
              <Button variant="contained" color="primary">
                Place Bid
              </Button>
            </div>
          )}
        </div>
      </div>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Body closeButton>
          Are you sure you'd like to delete this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Never Mind
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(handleClose, props.deleteItem)}
          >
            Yep
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Item
