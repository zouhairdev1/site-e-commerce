export default function MainContent(){
    return (
        <div className="desc">
          <div className="w-full md:w-1/2 ">
              <div className="video">
              <div className="relative">
                <img className="image" src="https://placehold.co/600x400" alt="E-commerce Video Thumbnail" />
                <button className="play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="M11.596 7.304L6 4.13v7.739l5.596-3.565z"/>
                  </svg>
                </button>
              </div>
            </div>
            </div>
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <h2 className="title">Welcome to E-com World
              Your Ultimate E-commerce Destination!</h2>
              <p className="description">Add Description</p>
              <div className="buttons">
              <div className="flex">
              <a href="#" className="button button-primary">Get Started</a>
                <a href="#" className="button button-secondary">Learn More</a>
              </div></div>
            </div>
          </div></div></div>
      );
}