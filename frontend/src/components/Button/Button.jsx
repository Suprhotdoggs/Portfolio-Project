import Button from "@mui/material/Button";

export default function ButtonElem({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
