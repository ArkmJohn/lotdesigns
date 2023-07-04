import CallToAction from "./call-to-action";
import KnowUsMore from "./know-us-more";
import PortfolioSlides from "./portfolio-slides";
import Image from "next/image";
const heroStyle = {
  paddingTop: '7vh',
  minHeight: '93vh',
  overflow: 'hidden',
}

const firstPrev = {
  backgroundImage: "url('/Images/Quiq.png')",
  backgroundPosition: "center"
}

const secPrev = {
  backgroundImage: "url('/Images/HiveSoapsPackaging.png')",
  backgroundPosition: "center"
}

const thirdPrev = {
  backgroundImage: "url('/Images/SMMWebsiteMockup.png')",
  backgroundPosition: "right"
}

const mainBanner = {
  minHeight: '65.8vh',
}

const cta = {
  minHeight: '28.2vh',
}

export default function Hero() {
    return (
      <section style={heroStyle} className="flex flex-wrap">
        <div className="lg:basis-2/5 basis-full sm:basis-full overflow-hidden row">
            <div style={mainBanner} className="justify-between content-center grid grid-cols-1"><KnowUsMore/></div> 
            <div style={cta}><CallToAction/></div>
        </div>
        {/* <div className="lg:basis-3/5 basis-full sm:basis-full overflow-hidden">
            <div><PortfolioSlides/></div>
        </div> */}
        <div className="lg:basis-1/5 basis-full sm:basis-full" style={firstPrev}>
        </div>
        <div className="lg:basis-1/5 basis-full sm:basis-full" style={secPrev}>
        </div>
        <div className="lg:basis-1/5 basis-full sm:basis-full" style={thirdPrev}>
        </div>
      </section>
    )
  }
  