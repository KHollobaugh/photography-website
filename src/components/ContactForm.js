import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContactForm extends React.Component {

  render() {
    return (
      <Form
      method="POST"
      action="https://formspree.io/khollobaugh@gmail.com">
        <FormGroup>
          <Input
          className="input"
          type="name"
          name="name"
          id="name"
          placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input
          className="input"
          type="type"
          name="type"
          id="type"
          placeholder="Type of session: Wedding? Portrait? Elopement?" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Tell me about your photography needs!</Label>
          <Input
          className="input"
          type="textarea"
          name="description"
          id="description" />
        </FormGroup>
        <FormGroup>
          <Label for="socialmedia">Do you have FB? Instagram? Twitter? I'd love to follow you!</Label>
          <Input
          className="input"
          type="textarea"
          name="socialmedia"
          id="socialmedia" />
        </FormGroup>
        <FormGroup>
          <Label for="search">How did you find me?</Label>
          <Input
          className="input"
          type="textarea"
          name="search"
          id="search" />
        </FormGroup>
        <Button className="button">Submit</Button>
      </Form>
    );
  }
}

export default ContactForm;