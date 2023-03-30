import './styles.css';

type Props = {
  errorMessage: string;
};

export const ValidationError = ({ errorMessage }: Props) => {
  return <>{errorMessage && <h6 className="error">{errorMessage}</h6>}</>;
};
