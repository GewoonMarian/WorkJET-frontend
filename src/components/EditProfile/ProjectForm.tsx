import { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postProject } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export default function ProjectForm() {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");

  function submitForm(event: FormEvent): void {
    event.preventDefault();
    dispatch(postProject(name, description, linkUrl));

    setName("");
    setDescription("");
    setLinkUrl("");
  }
  return (
    <Form className="mt-5">
      <h1 className="mt-5 mb-5" style={{ color: "white" }}>
        Add a Project
      </h1>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name of your project"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Link</Form.Label>
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
