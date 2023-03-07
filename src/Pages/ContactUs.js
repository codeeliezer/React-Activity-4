import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ContactUs = () => {
  return (
  <div className="ContactUs">
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Inquiry</Form.Label>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    

  </div>


  )
}

export default ContactUs;