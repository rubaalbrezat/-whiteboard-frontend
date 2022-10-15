import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Example(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => props.setShowModal(false);
  const handletitle = (e) => setTitle(e.target.value)
  const handlecontent = (e) => setContent(e.target.value)


  const handleSave = (e) => {
    props.updatePost(title,content)

  }


  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave} >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={`${title}`}
                onChange = {handletitle}
                placeholder="Enter the Title "
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="content"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3}
              
              value={`${content}`}
              onChange = {handlecontent}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}