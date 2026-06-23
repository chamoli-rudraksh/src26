import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bentoCards } from './teamsData';
import './TeamProfile.css';

const TeamProfile = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const team = bentoCards.find(t => t.id === teamId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!team) {
    return (
      <div className="team-profile-not-found">
        <h2>Team not found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>RETURN TO HOME</button>
      </div>
    );
  }

  return (
    <div className="team-profile-container">
      <div className="team-profile-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          RETURN TO HOME
        </button>
      </div>
      
      <div className="team-profile-content">
        {/* Left Column */}
        <div className="team-profile-left">
          <h1 className="team-profile-title">{team.name.toUpperCase()}</h1>
          <p className="team-profile-subtitle">2026 &nbsp;&nbsp; The minds behind SRC '26.</p>

          <div className="team-image-container">
            {/* Placeholder for actual team image */}
            <div className="team-image-placeholder">
              <h2>{team.name.toUpperCase()}</h2>
              <p>SRC 2026</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="team-profile-right">
          <section className="profile-section">
            <h3 className="section-title">DESCRIPTION</h3>
            <p className="section-text">{team.description}</p>
          </section>

          <div className="profile-details-grid">
            <section className="profile-section">
              <h3 className="section-title">LEADERSHIP</h3>
              <ul className="details-list">
                {team.chairs.map((chair, index) => (
                  <li key={index}>{chair}</li>
                ))}
              </ul>
            </section>

            {team.coordinators && team.coordinators.length > 0 && (
              <section className="profile-section">
                <h3 className="section-title">COORDINATORS</h3>
                <ul className="details-list">
                  {team.coordinators.map((coordinator, index) => (
                    <li key={index}>{coordinator}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
