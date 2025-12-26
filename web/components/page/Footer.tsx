const Footer = () => {
  return (
    <div className="mb-20">
      <div className="grid gap-4 text-center">
        <p className="text-2xl font-bold">
          &quot;If you can invest 3% of your wealth in developing yourself and{" "}
          <br /> stay consistent at it for the next five years, you will be{" "}
          <br />
          amazed at how much productivisty you will achieve &quot;
        </p>
        <span className="text-right">- Fisayo Obadina</span>
        <span>&copy;2025-{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
