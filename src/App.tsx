import logo from './assets/images/logo.svg';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import TrendGraphic from './components/TrendGraphic';
import { Typography, Container } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Container sx={containerStyle}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h4" sx={{ margin: 4 }} color="blue">
          Google Trends Widget
        </Typography>
        <SearchBar search={search} onSearchChange={(search) => setSearch(search)} />
        {search?.length > 0 && (
          <Typography variant="h5" color="InfoText" sx={{ marginTop: 4, width: { xs: '80%' } }}>
            Showing results for: {search}
          </Typography>
        )}
        {search?.length > 0 && <TrendGraphic search={search} />}
      </Container>
    </div>
  );
}

export default App;
