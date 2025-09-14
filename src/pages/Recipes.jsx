import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [prep, setPrep] = useState(0);
  const [cook, setCook] = useState(0);
  const [search, setSearch] = useState("");

  let forFetch = "";
  if (prep || cook || search) {
    forFetch = "?";
    if (prep) forFetch += `prepMinutes=${prep}&`;
    if (cook) forFetch += `cookMinutes=${cook}&`;
    if (search) forFetch += `slug=${search}&`;
    forFetch = forFetch.slice(0, -1);
  }

  useEffect(() => {
    const wait = setTimeout(() => {
      setLoader(true);

      fetch(`https://json-api.uz/api/project/recipes/recipes${forFetch}`)
        .then((res) => res.json())
        .then(({ data }) => {
          setData(data);
        })
        .catch(() => {
          setError(
            "Serverda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring."
          );
        })
        .finally(() => {
          setLoader(false);
        });
    }, 500);
    return () => clearTimeout(wait);
  }, [prep, cook, search]);

  return (
    <>
      {/* Introduction Recipes Start */}
      <section className="introRec">
        <div className="container introRec-container">
          <h2 className="introRecTitle">Explore our simple, healthy recipes</h2>
          <p className="introRecDescription">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>
      {/* Introduction Recipes End */}

      {/* The Main Section Start */}
      <section className="mainSection">
        <div className="container mainSectionContainer">
          <div className="filterSection">
            <div className="select-container">
              <select
                value={prep}
                onChange={(e) => setPrep(e.target.value)}
                className="custom-select"
              >
                <option value="">Max Prep Time</option>
                <option value={0}>0 minutes</option>
                <option value={5}>5 minutes</option>
                <option value={10}>10 minutes</option>
                <option value={15}>15 minutes</option>
                <option value={20}>20 minutes</option>
              </select>

              <select
                value={cook}
                onChange={(e) => setCook(e.target.value)}
                className="custom-select"
              >
                <option value="">Max Cook Time</option>
                <option value={0}>0 minutes</option>
                <option value={5}>5 minutes</option>
                <option value={10}>10 minutes</option>
                <option value={15}>15 minutes</option>
                <option value={20}>20 minutes</option>
              </select>
            </div>
            <label className="search-input">
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
          <div className="dataSection">
            {loader && <div className="loader-box">Loading...</div>}
            {!loader && data?.length === 0 && (
              <p className="loader-box">No data</p>
            )}
            {!loader &&
              data.map(
                ({
                  id,
                  title,
                  image,
                  cookMinutes,
                  overview,
                  servings,
                  prepMinutes,
                  ingredients,
                  instructions,
                }) => {
                  return (
                    <div key={id} className="mainCard">
                      <img
                        className="mainCardImage"
                        src={image.large}
                        alt="Food"
                      />
                      <div className="mainCardContent">
                        <h2 className="mainContentTitle">{title}</h2>
                        <p className="mainContentDescription">{overview}</p>
                        <div className="contentInfo">
                          <div className="contentInfoOne">
                            <div className="infoimgtext">
                              <img
                                src="/assets/images/icon-servings.svg"
                                alt="servings"
                                width={19}
                                height={20}
                              />
                              <h4 className="servings">Servings: {servings}</h4>
                            </div>

                            <div className="infoimgtext">
                              <img
                                src="/assets/images/icon-prep-time.svg"
                                alt="prepTime"
                                width={20}
                                height={20}
                              />
                              <h4 className="prep">Prep: {prepMinutes} mins</h4>
                            </div>
                          </div>
                          <div className="infoimgtext">
                            <img
                              src="/assets/images/icon-cook-time.svg"
                              alt="cookTime"
                              width={20}
                              height={20}
                            />
                            <h4 className="cook">Cook: {cookMinutes} mins</h4>
                          </div>
                        </div>
                      </div>

                      <Link className="mainBtn" to={`/recipesDetail/${id}`}>
                        View Recipe
                      </Link>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </section>
      {/* The Main Section End */}

      {/* Error Start */}
      {error && (
        <div className="container">
          <div className="error-box">
            <div className="error-content">
              <div className="error-text">
                <strong className="error-title">Xatolik:</strong>
                <span id="error-message">{error}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Error End */}
    </>
  );
}
