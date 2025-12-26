const Button = ({ text }: { text: string }) => {
  return (
    <button className="outline-none border-none bg-black px-4 py-3 rounded-full text-white text-sm">
      {text}
    </button>
  );
};

export default Button;
