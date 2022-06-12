import { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postCertification } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import "./styles/certification.css";

export default function CertificationForm() {
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const token = useSelector(selectToken);

  if (!token) return null;

  function submitForm(event: FormEvent): void {
    event.preventDefault();
    dispatch(postCertification(title, date));

    setTitle("");
    setDate("");
  }
  return (
    <Form className="form-style-6">
      <h1 className="mt-5 mb-5" style={{ color: "white" }}>
        Add a Certification
      </h1>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Name "
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Date</Form.Label>
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
