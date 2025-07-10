import styled from "styled-components";
import { useField } from "formik";

const HiddenColorInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ColorBox = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  cursor: pointer;
  position: relative;
`;

const ColorPicker = ({ name }) => {
  const [field, , helpers] = useField(name)

  const handleChange = (e) => {
    helpers.setValue(e.target.value)
  };

  return (
    <div>
      <ColorBox color={field.value}>
        <HiddenColorInput
          type="color"
          name={field.name}
          value={field.value}
          onChange={handleChange}
          onBlur={field.onBlur}
        />
      </ColorBox>
      <p>Color elegido: <span style={{ color: field.value }}>{field.value}</span></p>
    </div>
  )
}

export default ColorPicker;


