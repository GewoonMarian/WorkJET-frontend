import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import axios from "axios";
import Pagination from "./Pagination";

import { GiSkills } from "react-icons/gi";
export default function SkillForm() {
  const dispatch: AppDispatch = useDispatch();
  // const [skills, setSkills] = useState<number[] | null | undefined>(null);

  const [allSkills, setAllSkills] = useState<any>();
  const [skillsPerPage] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("offset", offset);

  async function getSkills(): Promise<void> {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:4000/skills?limit=${skillsPerPage}&offset=${offset}`
    );
    console.log("prod", response);
    setLoading(false);
    setAllSkills(response.data.rows);
  }

  useEffect(() => {
    getSkills();
  }, [offset]);

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
          allSkills.map((skill: { name: string }) => (
            <div className="card">{skill.name}</div>
          ))
        ) : (
          <div>No more items</div>
        )}
        <div>
          <Pagination
            offset={offset}
            setOffset={setOffset}
            skillsPerPage={skillsPerPage}
            amountOfSkills={allSkills}
          />
        </div>
      </>
      <>
        <form>
          <label>
            <h4 style={{ color: "white" }}>
              Name A Skill <GiSkills />
            </h4>

            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    </div>
  );
}
