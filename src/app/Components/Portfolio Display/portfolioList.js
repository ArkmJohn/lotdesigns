
export default function PortfolioSlides() {
    return (
      <div>
        <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-full w-full min-h-[50vh]"
      >
        {portfolioItem.map((variables, index) => (
          <SwiperSlide style={{margin:0}} key={index}>
            <PortfolioDisplayItem data={variables}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    )
}  
