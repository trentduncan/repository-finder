import { Box, Grid, Link, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export function RepositoryList({ repositories = [] }) {
  const isMobileSized = useMediaQuery('(max-width:750px)');

  return (
    <Box>
      <Grid container spacing={5}>
        {repositories.map(repository => (
          <Item isMobileSized={isMobileSized} repository={repository} />
        ))}
      </Grid>
    </Box>
  );
}

function Item({ isMobileSized, repository = {} }) {
  return (
    <Grid key={repository.id} item xs={12} sm={6} md={4}>
      <Paper
        sx={{ padding: '20px', minHeight: '100px', minWidth: '240px' }}
        elevation={3}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <Link href={repository.htmlURL} target="_blank" rel="noopener">
            {truncateText(isMobileSized ? 25 : 50, repository.fullName)}
          </Link>
          <p>{repository.stars} stars</p>
        </Box>
        <p>{truncateText(100, repository.description)}</p>
      </Paper>
    </Grid>
  );
}

function truncateText(number, text) {
  return text.length > number ? `${text.slice(0, number)}...` : text;
}

export default RepositoryList;
