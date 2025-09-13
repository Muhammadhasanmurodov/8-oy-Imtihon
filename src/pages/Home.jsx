import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero start */}
      <div className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1 className="hero-text-title">Healthy meals, zero fuss</h1>
            <p className="hero-text-description">
              Discover eight quick, whole-food recipes that you can cook
              tonight—no processed junk, no guesswork.
            </p>
            <button className="hero-text-btn">Start exploring</button>
          </div>
          <img
            className="hero-img"
            src="/assets/images/image-home-hero-large.webp"
            alt="HeroImg"
            width={1192}
            height={530}
          />
        </div>
      </div>
      {/* Hero End */}

      {/* Info Start */}
      <div className="info">
        <div className="container info-container">
          <h2 className="infoTitle">What you’ll get</h2>
          <div className="infoCards">
            <div className="card">
              <div className="imgBgInfo">
                <img
                  src="/assets/images/icon-whole-food-recipes.svg"
                  alt="recipes"
                  width={23}
                  height={32}
                />
              </div>
              <h3 className="infoSubTitle">Whole-food recipes</h3>
              <p className="infoDescription">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
            <div className="card">
              <div className="imgBgInfo">
                <img
                  src="/assets/images/icon-minimum-fuss.svg"
                  alt="fuss"
                  width={23}
                  height={32}
                />
              </div>
              <h3 className="infoSubTitle">Minimum fuss</h3>
              <p className="infoDescription">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div className="card">
              <div className="imgBgInfo">
                <img
                  src="/assets/images/icon-search-in-seconds.svg"
                  alt="search"
                  width={23}
                  height={32}
                />
              </div>
              <h3 className="infoSubTitle">Search in seconds</h3>
              <p className="infoDescription">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Info End */}

      {/* Built Start */}
      <div className="built">
        <div className="container built-container">
         <div className="built-content">
           <h2 className="built-title">Built for real life</h2>
           <p className="built-description-one">Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat. </p>
           <p className="built-description-two">Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
         </div>
         <img className="builtImg" src="/assets/images/image-home-real-life-large.webp" alt="Built" width={635} height={450}/>
        </div>
      </div>
      {/* Built End */}


      {/* CTA Start */}
      <div className="container">
        <CTA/>
      </div>
      {/* CTA End */}
    </>
  );
}
