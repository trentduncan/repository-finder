import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import RepositoryList from '../components/RepositoryList';
import SearchForm from '../components/SearchForm';

const PAGE_SIZE = 30;

function RepositoryPage({
  isLoadingRepositories,
  pageNumber,
  repositories,
  totalResults = 0,
  onInteraction
}) {
  // Githubs Search API tops out at 1000 results for a given query, before narrowing the parameters: https://docs.github.com/en/rest/reference/search
  const totalPages = Math.ceil(
    (totalResults > 1000 ? 1000 : totalResults) / PAGE_SIZE
  );

  function handleChangePage(_event, value) {
    onInteraction({
      type: RepositoryPage.INTERACTION_PAGE_CHANGED,
      pageNumber: value
    });
  }

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
        {totalPages === 0 ? null : (
          <Pagination
            sx={{ marginTop: '50px' }}
            count={totalPages}
            page={pageNumber}
            shape="rounded"
            size="small"
            onChange={handleChangePage}
          />
        )}
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

RepositoryPage.INTERACTION_PAGE_CHANGED =
  'RepositoryPage.INTERACTION_PAGE_CHANGED';

export default RepositoryPage;
