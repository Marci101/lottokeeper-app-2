import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div id='not-found-page'>
      This is the Not Found Page Block!
      <p>
        <Link to='/'>Back to Homepage</Link>
      </p>
    </div>
  );
}