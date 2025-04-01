function Button(props) {
  const { text, action } = props;

  return (
    <button
      className="bg-blue-500 border-none
       text-white font-normal 
      text-sm py-2 px-4 m-1 
      rounded-md hover:bg-blue-800 
      transition duration-300 
      ease-in-out"
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;
