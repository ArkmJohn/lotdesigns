import CallToAction from "./call-to-action";
import KnowUsMore from "./know-us-more";
import PortfolioSlides from "./portfolio-slides";

const top = {
    height:'80%'
  };
const bottom = {
    height: '80%'
};

const left = {
    width: '45%'
}

const right = {
    width: '55%'
}

export default function Hero() {
    return (
      <section className="min-h-94vh flex">
        <div style={left} className="row">
            <div style={top}><KnowUsMore/></div> 
            <div style={bottom}><CallToAction/></div>
        </div>
        <div style={right} className="">
            <div><PortfolioSlides/></div>
        </div>
      </section>
    )
  }
  