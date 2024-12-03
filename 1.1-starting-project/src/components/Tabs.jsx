/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
