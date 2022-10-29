import {observer} from "mobx-react";

const LoadingSvg = (observer(({fill = '#FF9F1C', size = 150}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
            width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style={{zIndex:999}}
              xmlSpace="preserve" className=""><g><path xmlns="http://www.w3.org/2000/svg" d="m12 24a12 12 0 1 1 10.714-17.41 1 1 0 1 1 -1.785.9 10 10 0 1 0 -.011 9.038 1 1 0 0 1 1.781.908 11.955 11.955 0 0 1 -10.699 6.564z" fill="#000000" data-original="#000000" className=""></path></g></svg>
    );
}))

export default LoadingSvg;
