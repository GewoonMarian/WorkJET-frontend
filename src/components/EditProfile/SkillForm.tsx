import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMySkills } from "../../store/user/actions";
import { AppDispatch } from "../../store";
import axios from "axios";
import Pagination from "./Pagination";
import "./styles/addSkill.scss";
import "./styles/skills.css";
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "300px",
                padding: "20px",
                background: "#818d8d",
                margin: "25px auto",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.22)",
                fontSize: "20px",
              }}
            >
              {" "}
              {skill.name}
              <div className="check">
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  name={`${skill.id}`}
                  onChange={(e) => onCheckboxClick(e)}
                />
                <label></label>{" "}
              </div>
            </div>
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
