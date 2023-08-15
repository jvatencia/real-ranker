import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import styled from "styled-components";
import { devices } from "../../utils/Breakpoints";

interface IDropdown {
  options: Array<any> | null;
  addSchool(school: any): void;
}
const Dropdown = ({ options, addSchool }: IDropdown) => {
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(options);
  return (
    <>
      <TextLabel>Select College :</TextLabel>
      <DropdownWrapper>
        <div style={{ width: "100%" }}>
          <Typeahead
            id="id"
            labelKey={(option: any) =>
              `${option}`
            }
            onChange={(val: any) => setSelectedOption(val)}
            //@ts-ignore
            options={options}
            placeholder="Search here..."
            selected={selectedOption}
            clearButton
            isLoading={options == undefined}
            disabled={options == undefined}
          />
        </div>
        <button
          onClick={(e) => {
            addSchool(selectedOption?.[0]);
            setSelectedOption([]);
          }}
          className="add"
          disabled={!selectedOption?.length}
        >
          Add College
        </button>
      </DropdownWrapper>
    </>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${devices.mobileL} {
    flex-direction: column;
  }

  button.add {
    padding: 0.7rem 1rem;
    background: #1061c4;
    border-radius: 4px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    transition: all 0.3s;

    :disabled {
      background-color: #f4f4f4;
      color: #676565;
      cursor: no-drop;
    }

    :hover {
      background-color: #85a1c4;
    }
  }
`;

const TextLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: #676565;
  display: block;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 8px;
`;
