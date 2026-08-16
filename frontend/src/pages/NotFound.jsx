import Button from "../components/Button";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <p className="not-found__code">404</p>
        <h1>Page not found.</h1>
        <p className="text-secondary">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button to="/" variant="primary">
          Back Home
        </Button>
      </div>
    </section>
  );
}
