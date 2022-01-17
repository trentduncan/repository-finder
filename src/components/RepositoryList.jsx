import { Box, Grid, Paper } from '@mui/material';

export function RepositoryList({ repositories = [] }) {
  return (
    <Box>
      <Grid container spacing={5}>
        {repositories.map(repository => (
          <Item repository={repository} />
        ))}
      </Grid>
    </Box>
  );
}

function Item({ repository = {} }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{ padding: '20px', minHeight: '100px' }}
        elevation={3}
        key={repository.id}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <p>{repository.fullName}</p>
          <p>{repository.stars} stars</p>
        </Box>
        <p>{repository.description}</p>
      </Paper>
    </Grid>
  );
}

export default RepositoryList;

// Finish responsiveness
// Add loading to button and list
// Add logo to page
// Check other browsers
// add envs with github accessToken (Check how much you can do without)
// fix colors
// add pagination
