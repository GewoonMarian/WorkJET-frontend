import { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CertificationForm() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");

  function submitForm(event: FormEvent): void {
    event.preventDefault();
  }
  return (
    <Form className="mt-5">
      <h1 className="mt-5 mb-5">Add a Certification</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Name "
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="text"
          placeholder="Date"
          required
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save
        </Button>
      </Form.Group>
    </Form>
  );
}
