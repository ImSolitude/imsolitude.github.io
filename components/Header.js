import { Link } from "components/shared";

const Header = () => {
  return (
    <header className="container max-w-screen-lg mx-auto py-4 px-4">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="plain-link">
            <h1 className="">Muhammad J</h1>
          </Link>
          <span className="text-gray-400 hidden md:block">
            — Front-end Developer
          </span>
        </div>
        <div className="flex items-center space-x-4 ml-auto text-sm md:text-lg">
          <Link href="/#work">Work</Link>
          {/* <Link href="/posts/first-post">Resume</Link> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
