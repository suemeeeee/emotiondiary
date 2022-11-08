const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "nagative"].includes(type) ? type : "default";
  return (
    // type에 따라 className 달라지게!
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// type이 전달되지 않으면, 디폴트로 default
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
