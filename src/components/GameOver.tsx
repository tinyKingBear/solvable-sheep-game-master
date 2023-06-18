import React, { FC } from 'react';
import './GameOver.scss';

const GameOverPage: FC<{
    handleGoHome: () => void;
}> = ({ handleGoHome }) => {
    return (
        <div className="game-over">
            <div className="tip">槽位已满</div>
            <div className="back" onClick={handleGoHome}>
                返回羊群
            </div>
        </div>
    );
};

export default GameOverPage;
