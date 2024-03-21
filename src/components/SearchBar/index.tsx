import { Input } from '@mui/material';

type SearchBarProps = {
  search: string;
  onSearchChange: (search: string) => void;
};

const SearchBar = ({ search, onSearchChange }: SearchBarProps) => {
  return (
    <Input
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search for a topic"
      autoFocus
      sx={{
        margin: 6,
        width: { xs: '80%', lg: 600, sm: 400 },
      }}
      color="info"
      type="search"
      margin="dense"
      endAdornment={
        <span role="img" aria-label="search" style={{ marginLeft: 10 }}>
          🔍
        </span>
      }
    />
  );
};

export default SearchBar;
