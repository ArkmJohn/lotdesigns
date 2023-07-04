
import arrowStroke from "../../Images/HomeArrowStroke.svg";
import Image from 'next/image';

const sideType = {
  position: 'absolute',
  top: 0,
  right: 0,
  rotate: '-90deg',
  transformOrigin: 'top right',
};

const upperSection = {
  minHeight : '30vh',
}

const lowerSection = {
  minHeight : '30vh',
}

export default function PortfolioDisplayItem(props) {
    return (
      <div className="min-h-full">
        <h4 style={sideType}>{props.data.type}</h4>
        <section style={upperSection}>
          <h1>{props.data.title}</h1>
          <a href="#">
              <Image src={arrowStroke} alt="Your SVG" style={{position: 'absolute'}} />
              <div className="pl-20 pt-8">
                  <h5 className="pl-20 uppercase font-bold ml-10 text-lg mb-10 mt-0">Know Us More</h5>
              </div>
          </a>
        </section>
        <section style={{...lowerSection, backgroundImage:`url(${props.data.imageURL})`}}>
          <Image width={100} height={100} src={props.data.image}/>
        </section>
      </div>
    )
  }
  