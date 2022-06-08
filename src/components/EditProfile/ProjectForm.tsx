import { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ProjectForm() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [linkUrl, setLinkUrl] = useState<string>("");

  function submitForm(event: FormEvent): void {
    event.preventDefault();
  }
  return (
    <Form className="mt-5">
      <h1 className="mt-5 mb-5">Add a Project</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name of your project"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Link</Form.Label>
        <Form.Control
          value={linkUrl}
          onChange={(event) => setLinkUrl(event.target.value)}
          type="text"
          placeholder="Add a Link"
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
