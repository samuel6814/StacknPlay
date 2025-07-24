import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';

//============================================================================
// STYLED COMPONENTS (Shared & for GameList)
//============================================================================
// Note: Some styles are reused from your existing GamesList for consistency.

const GamesSection = styled.section`
  padding: 6rem 2rem;
  background-color: #111;
  color: #ffffff;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const GameCard = styled.div`
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer; // Make it look clickable
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(244, 114, 182, 0.2);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f472b6;
`;

const GameInfo = styled.div`
  padding: 1rem;
`;

const GameTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
`;

const GameMeta = styled.p`
  margin: 0.5rem 0 0 0;
  color: #a0a0a0;
  font-size: 0.9rem;
  span { color: #facc15; font-weight: 700; }
`;

//============================================================================
// STYLED COMPONENTS (For GameDetail Page)
//============================================================================

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background-color: #f472b6;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover { background-color: #fff; }
`;

const DetailHeaderImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const DetailTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const DetailDescription = styled.div`
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  color: #ccc;
  font-size: 1.1rem;
  
  p { margin-bottom: 1rem; }
`;

//============================================================================
// NEW GameDetail COMPONENT
//============================================================================

const GameDetail = ({ gameId, onBack }) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'd0a7f23174d8491f8f57069861117e39';

  useEffect(() => {
    const fetchGameDetails = async () => {
      if (!gameId) return;
      setLoading(true);
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setGame(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGameDetails();
  }, [gameId]);

  if (loading) return <SectionTitle>Loading Details...</SectionTitle>;
  if (error) return <SectionTitle>Error loading details.</SectionTitle>;
  if (!game) return null;

  return (
    <GamesSection>
      <DetailContainer>
        <BackButton onClick={onBack}><ArrowLeft size={20} /> Back to List</BackButton>
        <DetailHeaderImage src={game.background_image} alt={game.name} />
        <DetailTitle>{game.name}</DetailTitle>
        <DetailDescription dangerouslySetInnerHTML={{ __html: game.description }} />
      </DetailContainer>
    </GamesSection>
  );
};

//============================================================================
// UPDATED GamesList COMPONENT
//============================================================================

const GamesList = ({ onGameSelect }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const API_KEY = 'd0a7f23174d8491f8f57069861117e39';

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=12&ordering=-rating`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setGames(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [page]);

  return (
    <GamesSection id="games">
      <SectionTitle>Most Popular Games</SectionTitle>
      {loading ? <SectionTitle>Loading...</SectionTitle> : error ? <SectionTitle>Error</SectionTitle> : (
        <GamesGrid>
          {games.map(game => (
            <GameCard key={game.id} onClick={() => onGameSelect(game.id)}>
              <GameImage src={game.background_image} alt={game.name} />
              <GameInfo>
                <GameTitle>{game.name}</GameTitle>
                <GameMeta>Rating: <span>{game.rating} / 5</span></GameMeta>
              </GameInfo>
            </GameCard>
          ))}
        </GamesGrid>
      )}
      {/* Pagination can be added here as before */}
    </GamesSection>
  );
};

//============================================================================
// MAIN APP COMPONENT (To manage routing)
//============================================================================

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);

  // This is our simple router.
  // If a game ID is selected, show the detail page.
  // Otherwise, show the list of games.
  if (selectedGameId) {
    return <GameDetail gameId={selectedGameId} onBack={() => setSelectedGameId(null)} />;
  }

  return <GamesList onGameSelect={setSelectedGameId} />;
}
