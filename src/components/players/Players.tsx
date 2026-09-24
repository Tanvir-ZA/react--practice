import React, { use } from 'react';
import type { Iplayer } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';



interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {

    const players = use(playersPromise);


    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between gap-4 my-2">
                <h2 className="font-bold text-xl">Available Players</h2>

                <div className="flex gap-2">
                    <button className="btn btn-primary">available</button>
                    <button className="btn btn-secondary">selected</button>



                </div>
            </div>

            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;