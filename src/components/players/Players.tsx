import { use, useState } from 'react';
import type { Iplayer } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers';



interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {

    const players = use(playersPromise);

    const [activeTab, setActiveTab] = useState("available");
    console.log(activeTab);


    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between gap-4 my-2">
                <h2 className="font-bold text-xl">{activeTab === "available" ? "Available Players" : "Selected Players"}</h2>

                <div className="flex ">
                    <button
                        className={`btn ${activeTab === "available" ? "btn-primary" : "btn-secondary"} rounded-r-none`}
                        onClick={() => setActiveTab("available")}
                    >
                        available
                    </button>
                    <button
                        className={`btn ${activeTab === "selected" ? "btn-primary" : "btn-secondary"} rounded-l-none`}
                        onClick={() => setActiveTab("selected")}
                    >
                        selected
                    </button>



                </div>
            </div>

            

            {activeTab === "available" && <AvailablePlayers players={players} />}

{activeTab === "selected" && <SelectedPlayers />}
        </div>
    );
};

export default Players;