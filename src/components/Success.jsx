import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Success() {
  const history = useHistory();

  return (
    <div className="error-container">
      <h2>Helal Len Sana</h2>
      <Button color="primary" onClick={() => history.push('/')}>
        Tekrar Dene
      </Button>
    </div>
  );
}
