import { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ProjectForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  function submitForm(event: FormEvent): void {
    event.preventDefault();
  }
  return (
    <Form className="mt-5">
      <h1 className="mt-5 mb-5">Edit your profile</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name "
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          placeholder="Location"
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
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="text"
          placeholder="Add an image"
          required
        />
      </Form.Group>
      <Form.Group>
        <div>
          <label> Are you Available?</label>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={() => setIsAvailable(!isAvailable)}
          />
        </div>
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save
        </Button>
      </Form.Group>
    </Form>
  );
}
