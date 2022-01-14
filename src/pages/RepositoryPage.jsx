import SearchForm from '../components/SearchForm';

function RepositoryPage({ onInteraction }) {
  return (
    <div>
      <nav
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#005cb9',
          color: '#e5832d'
        }}
      >
        Logo
      </nav>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}
      >
        <SearchForm onInteraction={onInteraction} />
      </div>
    </div>
  );
}

export default RepositoryPage;
