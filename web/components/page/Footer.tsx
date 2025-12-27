const Footer = () => {
  return (
    <div className="mb-20">
      <div className="grid gap-4 text-center">
        <p className="text-sm lg:text-2xl font-bold">
          &quot; Loans are written as documents. They should behave like data
          &quot;
        </p>
        <span>&copy;2025-{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
