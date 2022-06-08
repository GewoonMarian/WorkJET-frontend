import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../store/user/selectors";
// import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";

export default function SkillForm() {
  const skill = useSelector(selectUsers);
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>("");

  function submitForm(event: FormEvent): void {
    event.preventDefault();

    console.log(name);
    //updateMySkills(name)
  }
  return (
    <Form className="mt-5">
      <h1 className="mt-5 mb-5">Add a skill</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name of your skill"
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
