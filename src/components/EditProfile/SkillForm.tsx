import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import axios from "axios";
import Pagination from "./Pagination";
export default function SkillForm() {
  const dispatch: AppDispatch = useDispatch();
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
          allSkills.map((s: { name: string }) => (
            <div className="card">{s.name}</div>
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
    </div>
  );
}
