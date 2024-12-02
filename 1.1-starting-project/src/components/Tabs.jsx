/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
