import { Card } from '@mui/material';

type GraphicProps = {
  search: string;
};

const TrendGraphic = ({ search }: GraphicProps) => {
  const trendUrl = 'https://trends.google.com/trends/embed/explore/TIMESERIES';
  // trend params are encoded in a specific way to be used in the iframe
  const trendParams = `%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22${search}%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%201-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-120&eq=date%3D2021-10-01T0%3A0%3A0%2F2021-10-01T0%3A0%3A0`;
  return (
    <Card sx={{ width: '70%', margin: 4 }}>
      <iframe
        id="trends-widget"
        src={`${trendUrl}?req=${trendParams}`}
        width="100%"
        height="450px"
        title="Google Trends"
      />
    </Card>
  );
};

export default TrendGraphic;
