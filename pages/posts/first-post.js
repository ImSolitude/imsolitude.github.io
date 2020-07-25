import PropTypes from "prop-types";
import { Link } from "components/shared";
import { Button } from "components/shared";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const FirstPost = (props) => {
  return (
    <>
      <h1>First Post</h1>
      <h1>First Post</h1>
      <div className="flex flex-row items-center">
        <Button color="secondary">Close</Button>
        <Button color="danger" icon={{ icon: faArrowRight }} reverse size="lg">
          Send
        </Button>
        <Button color="primary">Send</Button>
        <Button color="danger" isLoading={true}>
          Delete
        </Button>
      </div>
      <h2>
        <Link href="/" icon={{ icon: faArrowRight }}>
          Back to home
        </Link>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
};

FirstPost.propTypes = {};

export default FirstPost;
