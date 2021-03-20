import React from "react";
import imageBig from '../../assets/bannerImg.jpg'

class BannerImage extends React.Component {
    render() {
        return (
            <div>
                <img className="rounded-3xl max-h-80 h-40 lg:h-60 xl:h-80" src={imageBig} alt="Something went wrong here.."/>
            </div>
        )
    }
}

export {
    BannerImage
}