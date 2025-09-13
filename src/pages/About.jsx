import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      {/* Built Start */}
      <div className="built">
        <div className="container built-container">
          <div className="built-content">
            <span className="built-span">Our mission</span>
            <h2 className="built-title">
              Help more people cook nourishing meals, more often.
            </h2>
            <p className="built-description-one">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="built-description-two">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <img
            className="builtImg"
            src="/assets/images/image-about-our-mission-large.webp"
            alt="mission"
            width={635}
            height={450}
          />
        </div>
      </div>
      {/* Built End */}

      <hr />

      {/* Reason Start */}
      <div className="reason">
        <div className="reason-container container">
          <h2 className="reasonMainTitle">Why we exist</h2>
          <div className="reasonContent">
            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Cut through the noise.</h3>
                <p className="reasonDescription">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </div>

            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Empower home kitchens.</h3>
                <p className="reasonDescription">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </div>

            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Make healthy look good.</h3>
                <p className="reasonDescription">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reason End */}

      <hr />

      {/* Reason Start */}
      <div className="reason">
        <div className="reason-container container">
          <h2 className="reasonMainTitle">Our food philosophy</h2>
          <div className="reasonContent">
            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Whole ingredients first.</h3>
                <p className="reasonDescription">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </div>

            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Flavor without compromise.</h3>
                <p className="reasonDescription">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </div>

            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Respect for time.</h3>
                <p className="reasonDescription">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </div>

            <div className="reasonCard">
              <img
                src="/assets/images/icon-bullet-point.svg"
                alt="bullet"
                width={32}
                height={32}
              />
              <div className="reasonText">
                <h3 className="reasonSubTitle">Sustainable choices.</h3>
                <p className="reasonDescription">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reason End */}

      <hr />

      {/* Family Start */}
      <div className="family">
        <div className="container family-container">
          <div className="family-content">
            <h2 className="familyTitle">Beyond the plate</h2>
            <p className="familyDescription">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="fathoption">
              <li className="optionFamily">
                Encourage family dinners and social cooking.
              </li>
              <li className="optionFamily">
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className="optionFamily">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <img
            src="/assets/images/image-about-beyond-the-plate-large.webp"
            alt="Family"
            className="familyImg"
            width={744}
            height={400}
          />
        </div>
      </div>

      {/* Family End */}

      {/* CTA Start */}
      <div className="container">
        <CTA />
      </div>
      {/* CTA End */}
    </>
  );
}
