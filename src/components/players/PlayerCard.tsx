import React from "react";
import type { Iplayer } from "../../types/playerType";
import { FaUser, FaBasketball } from "react-icons/fa6";

const PlayerCard = ({ player }: { player: Iplayer }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Player Image */}
            <figure className="relative h-64 overflow-hidden bg-base-200">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Player Type Badge */}
                <div className="absolute right-3 top-3">
                    <span className="badge badge-primary px-3 py-3 font-semibold shadow-lg">
                        {player.playerType}
                    </span>
                </div>
            </figure>

            {/* Card Content */}
            <div className="card-body p-5">

                {/* Name */}
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <FaUser />
                    </div>

                    <h2 className="card-title text-lg">
                        {player.playerName}
                    </h2>
                </div>

                {/* Origin */}
                <p className="mt-1 text-sm text-base-content/60">
                    🌍 From {player.origin}
                </p>

                <div className="divider my-2"></div>

                {/* Playing Style */}
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-base-content/50">
                        Playing Style
                    </p>

                    <div className="grid grid-cols-2 gap-3">

                        <div className="rounded-xl bg-base-200 p-3">
                            <p className="text-xs text-base-content/50">
                                Batting
                            </p>
                            <p className="mt-1 font-semibold">
                                {player.battingStyle}
                            </p>
                        </div>

                        <div className="rounded-xl bg-base-200 p-3">
                            <p className="text-xs text-base-content/50">
                                Bowling
                            </p>
                            <p className="mt-1 font-semibold">
                                {player.bowlingStyle}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Price + Button */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

                    <div>
                        <p className="text-xs text-base-content/50">
                            Price
                        </p>

                        <h3 className="text-xl font-bold text-primary">
                            ${player.price}
                        </h3>
                    </div>

                    <button className="btn btn-primary rounded-xl px-6 shadow-md transition hover:scale-105">
                        Buy Now
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;