import { formatDate } from '../../lib/formatDate';

const withFormattedDate =
  (Component) =>
  ({ date, ...props }) => {
    return <Component date={formatDate(date)} {...props} />;
  };

export const DateTime = ({ date }) => {
  return <p className="date">{date}</p>;
};

export const DateTimePretty = withFormattedDate(DateTime);
