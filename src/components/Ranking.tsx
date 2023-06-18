import React, { FC } from 'react';
import './Ranking.scss';
interface Player {
    id: number;
    playerId: string;
    score: number;
    playerRank: number;
    avatar?: string;
}
const Ranking: FC<{
    rankingList: Player[];
    handleHidden: () => void;
}> = ({ rankingList, handleHidden }) => {
    const radomAvatar = () => {
        console.log('radomAvatar');
        const randomNum = Math.floor(Math.random() * 5) + 1;
        return `/src/themes/homepage/${randomNum}.jpeg`;
    };
    const list = rankingList.map((player: Player) => (
        <div className="list-row" key={player.id}>
            <img className="avatar" src={radomAvatar()} />
            <div className="nickname">{player.playerId}</div>
            <div className="score">{player.score} 分</div>
        </div>
    ));
    return (
        <div className="ranking">
            <div className="playerList">
                <div className="rank-title">排行榜</div>
                <img
                    className="close"
                    src="/src/themes/homepage/modal_close.png"
                    onClick={handleHidden}
                />
                <div className="list-table">{list}</div>
            </div>
        </div>
    );
};
export default Ranking;
