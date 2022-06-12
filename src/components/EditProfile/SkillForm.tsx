import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import axios from "axios";
import Pagination from "./Pagination";
// import "./style.scss";
import "./styles/skills.scss";
import { GiSkills } from "react-icons/gi";

export default function SkillForm() {
  const dispatch: AppDispatch = useDispatch();
  const [skills, setSkills] = useState<number[]>([]);
  const [extraSkill, setExtraSkill] = useState<string>("");

  const [allSkills, setAllSkills] = useState<any>();
  const [skillsPerPage] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [checked] = useState<boolean>(false);

  async function getSkills(): Promise<void> {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:4000/skills?limit=${skillsPerPage}&offset=${offset}`
    );
    console.log("allSkills", response.data);
    setLoading(false);
    setAllSkills(response.data.rows);
  }

  useEffect(() => {
    getSkills();
  }, [offset]);

  useEffect(() => {
    dispatch(updateMySkills(skills, extraSkill));
  }, [dispatch]);

  function submitForm(event: FormEvent): void {
    event.preventDefault();

    dispatch(updateMySkills(skills, extraSkill));
  }

  const onCheckboxClick = (e: FormEvent) => {
    const { name } = e.target as HTMLButtonElement;
    const parsedSkill = parseInt(name);

    if (skills.includes(parsedSkill)) {
      const filterSkills = skills.filter((s) => s !== parsedSkill);
      setSkills(filterSkills);
    } else {
      setSkills([...skills, parsedSkill]);
    }
  };

  return (
    <div>
      <>
        {!loading && allSkills ? (
          allSkills.map((skill: { name: string; id: number }) => (
            <main>
              {skill.name}
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={(e) => onCheckboxClick(e)}
                name={`${skill.id}`}
                id="id"
              />
              <label htmlFor="id" className="checkbox">
                <div className="checkbox__inner">
                  <div className="green__ball"></div>
                </div>
              </label>
              <div className="checkbox__text">
                <span>turned</span>
                <div className="checkbox__text--options">
                  <span className="off">off</span>
                  <span className="on">on</span>
                </div>
              </div>
            </main>
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
        <form onSubmit={submitForm}>
          <label>
            <h4 style={{ color: "white" }}>
              Name A Skill <GiSkills />
            </h4>

            <input
              type="add"
              name="add"
              value={extraSkill}
              onChange={(e) => setExtraSkill(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    </div>
  );
}
