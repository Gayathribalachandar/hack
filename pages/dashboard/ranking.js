import Navbar from '../../components/Navbar';
import styles from '../../styles/ranking.module.css';

const teamRankings = [
  { team: 'Team Alpha', leader: 'Aarav Sharma', score: 95 },
  { team: 'Team Beta', leader: 'Diya Mehta', score: 89 },
  { team: 'Team Gamma', leader: 'Raj Verma', score: 82 },
  { team: 'Team Delta', leader: 'Sanya Kapoor', score: 76 },
  { team: 'Team Omega', leader: 'Riya Joshi', score: 68 },
];

export default function RankingPage() {
  const sortedTeams = [...teamRankings].sort((a, b) => b.score - a.score);

  const getMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>🏆 Team Rankings</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Team Leader</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <tr key={team.team}>
                <td>{getMedal(index + 1)}</td>
                <td>{team.team}</td>
                <td>{team.leader}</td>
                <td>{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
