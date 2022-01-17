import Box from '@mui/material/Box';
import RepositoryList from '../components/RepositoryList';
import SearchForm from '../components/SearchForm';

function RepositoryPage({
  isLoadingRepositories,
  repositories,
  onInteraction
}) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 70,
          backgroundColor: '#196fc4',
          color: '#e5832d',
          paddingLeft: '10px',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
      >
        Repository Finder
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px'
        }}
      >
        <SearchForm
          isLoadingRepositories={isLoadingRepositories}
          onInteraction={onInteraction}
        />
        <Box sx={{ marginTop: '50px' }}>
          {isLoadingRepositories ? (
            'Fetching List...'
          ) : (
            <RepositoryList repositories={repositories} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default RepositoryPage;
