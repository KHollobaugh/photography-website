import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContactForm extends React.Component {

  render() {
    return (
      <div className="form-container">
      <Form
      className="contact-form"
      method="POST"
      action="https://formspree.io/eturk95@gmail.com">
        <FormGroup
        className="form-group">
          <Input
          className="input"
          type="name"
          name="name"
          id="name"
          placeholder="Name" />
        </FormGroup>
        <FormGroup
        className="form-group">
          <Input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Email" />
        </FormGroup>
        <FormGroup
        className="form-group">
          <Input
          className="input"
          type="type"
          name="type"
          id="type"
          placeholder="Type of session: Wedding? Portrait? Elopement?" />
        </FormGroup>
        <FormGroup
        className="form-group">
          <Label for="description">Tell me about your photography needs!</Label>
          <Input
          className="input"
          type="textarea"
          name="description"
          id="description" />
        </FormGroup>
        <FormGroup
        className="form-group">
          <Label for="socialmedia">Do you have FB? Instagram? Twitter? I'd love to follow you!</Label>
          <Input
          className="input"
          type="textarea"
          name="socialmedia"
          id="socialmedia" />
        </FormGroup>
        <FormGroup
        className="form-group">
          <Label for="search">How did you find me?</Label>
          <Input
          className="input"
          type="textarea"
          name="search"
          id="search" />
        </FormGroup>
        <Button className="button" size="lg">Submit</Button>
      </Form>
      </div>
    );
  }
}

export default ContactForm;