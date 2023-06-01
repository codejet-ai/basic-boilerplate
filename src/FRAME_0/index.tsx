import { Input as Input_0 } from "./Input_0";
import { Input as Input_1 } from "./Input_1";
import { Button as Button_0 } from "./Button_0";

export const FRAME = () => {
  return (
    <div
      style={{
        width: "min(1568px, 100%)",
        minHeight: "946px",
        backgroundColor: "rgba(255, 137.7000054717064, 0, 1)",
        border: "none",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      <Input_0 />
      <Input_1 />
      <Button_0 />
    </div>
  );
};
