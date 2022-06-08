import {
  FormEvent,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import { getAllSkills } from "../../store/user/actions";
import axios from "axios";
import Pagination from "./Pagination";
import { idText } from "typescript";
export default function SkillForm() {
  const dispatch = useDispatch();
  // const [skills, setSkills] = useState<number[] | null | undefined>(null);

  const [allSkills, setAllSkills] = useState<any>();
  const [skillsPerPage] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("offset", offset);

  async function getSkills(): Promise<void> {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:4000/skills?limit=${skillsPerPage}&offset=${offset}`
    );
    console.log("prod", response);
    setOffset(offset + 10);
    setLoading(false);
    setAllSkills(response.data.rows);
  }

  useEffect(() => {
    getSkills();
  }, []);

  // useEffect(() => {
  //   dispatch(getAllSkills());
  // }, [dispatch]);

  // function submitForm(event: FormEvent): void {
  //   event.preventDefault();

  //   dispatch(updateMySkills(skills));
  // }
  return (
    <div>
      <>
        {!loading && allSkills ? (
          allSkills.map((s: { name: string }) => (
            <div className="card">{s.name}</div>
          ))
        ) : (
          <div>No more items</div>
        )}
        <div>
          <Pagination
            // offset={offset}
            // setOffset={setOffset}
            skillsPerPage={skillsPerPage}
            amountOfSkills={allSkills}
            getSkills={getSkills}
          />
        </div>
      </>
    </div>
  );
}
