import React, { FC } from 'react';
import './Setting.scss';

const SettingPage: FC<{
    musicOn: boolean;
    handleSwitch: () => void;
    handleGiveUp: () => void;
    handleHidden: () => void;
}> = ({ musicOn, handleSwitch, handleGiveUp, handleHidden }) => {
    return (
        <div className="popup">
            <div className="container">
                <div className="popup-title">设置</div>
                <img
                    className="close"
                    src="/src/themes/homepage/modal_close.png"
                    onClick={handleHidden}
                />
                <div className="item-row">
                    <img className="icon" src="/src/themes/default/music.png" />
                    <div>音乐</div>
                    <img
                        className="switch"
                        src={
                            musicOn
                                ? '/src/themes/default/switch_on.png'
                                : '/src/themes/default/switch_off.png'
                        }
                        onClick={handleSwitch}
                    />
                </div>
                <div className="give-up" onClick={handleGiveUp}>
                    放弃挑战
                </div>
            </div>
        </div>
    );
};
export default SettingPage;
