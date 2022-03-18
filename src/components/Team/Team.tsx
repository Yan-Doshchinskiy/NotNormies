import React from "react";
import './Team.scss';
import { ReactComponent as Boss } from "assets/img/team/Boss.svg";
import { ReactComponent as Developer } from "assets/img/team/Developer.svg";
import { ReactComponent as Promoter } from "assets/img/team/Promoter.svg";
import { ReactComponent as NftArtist } from "assets/img/team/NftArtist.svg";
import { ReactComponent as Underline } from "assets/img/team/vectors/underline.svg";
import { ReactComponent as VectorFirstRight } from "assets/img/team/vectors/first_right.svg";
import { ReactComponent as VectorFirstTop } from "assets/img/team/vectors/first_top.svg";
import { ReactComponent as VectorSecTop } from "assets/img/team/vectors/sec_top.svg";
import { ReactComponent as VectorSecLeft } from "assets/img/team/vectors/sec_left.svg";
import { ReactComponent as VectorThirdTop } from "assets/img/team/vectors/third_top.svg";
import { ReactComponent as VectorThirdRight } from "assets/img/team/vectors/third_right.svg";
import { ReactComponent as VectorFourthTop } from "assets/img/team/vectors/fourth_top.svg";
import { ReactComponent as VectorFourthLeft } from "assets/img/team/vectors/fourth_left.svg";
import Carousel from 'react-material-ui-carousel';

export const Team = () => {
    return (
        <div className="team">
            <div className="team__anchor" id="team" />
            <h3 className="team__title">Our Team</h3>
            <Underline className="team__underline" />
            <div className="team__members">
                <div className="team__singleMember singleMember">
                    <NftArtist className="singleMember__photo" />
                    <VectorFirstTop className="vector vector__top vector__top_first" /> {/* postiton absolute */}
                    <VectorFirstRight className="vector vector__right" /> {/* postiton absolute */}
                    <div className="singleMember__badge">Nft Artist</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Promoter className="singleMember__photo" />
                    <VectorSecTop className="vector vector__top" /> {/* postiton absolute */}
                    <VectorSecLeft className="vector vector__left vector__left_sec" /> {/* postiton absolute */}
                    <div className="singleMember__badge">Promoter</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Boss className="singleMember__photo" />
                    <VectorThirdTop className="vector vector__top" /> {/* postiton absolute */}
                    <VectorThirdRight className="vector vector__right" /> {/* postiton absolute */}
                    <div className="singleMember__badge">DEV</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Developer className="singleMember__photo" />
                    <VectorFourthTop className="vector vector__top" /> {/* postiton absolute */}
                    <VectorFourthLeft className="vector vector__left vector__left_fourth" /> {/* postiton absolute */}
                    <div className="singleMember__badge">DEV</div>
                </div>
            </div>
            <Carousel
                stopAutoPlayOnHover
                animation="slide"
                swipe
                indicators={false}
                navButtonsAlwaysVisible
                className="team__carousel"
            >
                <div className="team__singleMember singleMember">
                    <NftArtist className="singleMember__photo" />
                    <div className="singleMember__badge">Nft Artist</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Promoter className="singleMember__photo" />
                    <div className="singleMember__badge">Promoter</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Boss className="singleMember__photo" />
                    <div className="singleMember__badge">DEV</div>
                </div>
                <div className="team__singleMember singleMember">
                    <Developer className="singleMember__photo" />
                    <div className="singleMember__badge">DEV</div>
                </div>
            </Carousel>
        </div>
    );
};

export default Team;
