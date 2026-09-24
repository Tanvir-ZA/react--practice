import React from 'react';
import type { Iplayer } from '../../types/playerType';
import { FaUser } from 'react-icons/fa6';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ players }: { players: Iplayer[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {players.map((player: Iplayer, index: number) => {
                return <PlayerCard key={index} player={player} />;
            })}
        </div>
    );
};

export default AvailablePlayers;