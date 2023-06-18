import React, { FC, useState } from 'react';
import style from './HomePage.module.scss';
import Ranking from './Ranking';
import { get } from '../axios';

// 该组件条件渲染
const HomePage: FC<{
    restartMethod: () => void;
}> = ({ restartMethod }) => {
    const joinGame = '/src/themes/homepage/begin.png';
    const friends = '/src/themes/homepage/ranking.png';
    const clothes = '/src/themes/homepage/clothes.png';
    const gameCount = 9;

    const [showRanking, setShowRanking] = useState(false);
    const [rankingList, setRankingList] = useState([]);

    const clickRankingButton = () => {
        requestRanking();
        setShowRanking(true);
    };
    const hiddenRanking = () => {
        setShowRanking(false);
    };
    const requestRanking = async () => {
        const res: any = await get('/rankings/getRankingScores', {});
        setRankingList(res.data);
    };

    return (
        <>
            <div className={style.modal}>
                <div className={style.footer}>
                    <div className={style.operation}>
                        <img
                            className={style.friends}
                            src={friends}
                            onClick={clickRankingButton}
                        />
                        <div className={style.joinGameContainer}>
                            <img
                                className={style.joinGame}
                                src={joinGame}
                                onClick={restartMethod}
                            />
                            <div className={style.gameLeftCount}>
                                <div className={style.text}>
                                    游戏剩余次数: {gameCount}
                                </div>
                            </div>
                        </div>
                        <img className={style.clothes} src={clothes} />
                    </div>
                </div>
            </div>
            {showRanking && (
                <Ranking
                    rankingList={rankingList}
                    handleHidden={hiddenRanking}
                />
            )}
        </>
    );
};

export default HomePage;
