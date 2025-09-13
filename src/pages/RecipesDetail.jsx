import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipesDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoader(true);
    fetch(`https://json-api.uz/api/project/recipes/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch(() => {
        setError("Serverda xatolik yuz berdi. Keyinroq urinib ko‘ring.");
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  return (
    <>
      <section className="singleRecipe">
        {loader && <div className="loader-box">Loading...</div>}

        <div className="container singleRecipe-container">
          {!loader && data && (
            <>
              <img
                src={`.${data.image.large}`}
                className="singleImg"
                alt="Meals"
              />
              <div className="singleCardContent">
                <h1 className="singleTitle">{data.title}</h1>
                <p className="singleDescription">{data.overview}</p>
                <div className="singleText">
                  <div className="infoimgtext">
                    <img
                      src="/assets/images/icon-servings.svg"
                      alt="servings"
                      width={19}
                      height={20}
                    />
                    <h4 className="servings">Servings: {data.servings}</h4>
                  </div>

                  <div className="infoimgtext">
                    <img
                      src="/assets/images/icon-prep-time.svg"
                      alt="prepTime"
                      width={20}
                      height={20}
                    />
                    <h4 className="prep">Prep: {data.prepMinutes} mins</h4>
                  </div>

                  <div className="infoimgtext">
                    <img
                      src="/assets/images/icon-cook-time.svg"
                      alt="cookTime"
                      width={20}
                      height={20}
                    />
                    <h4 className="cook">Cook: {data.cookMinutes} mins</h4>
                  </div>
                </div>

                <div className="ingredient">
                  <h2 className="ingredientTitle">Ingredients:</h2>
                  {data.ingredients.map((text) => {
                    return (
                      <div className="imgTextIngredient">
                        <img
                          className="ingredientIcon"
                          src="../assets/images/icon-bullet-point.svg"
                          alt="icon"
                        />
                        <p className="ingredientText">{text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="ingredient">
                  <h2 className="ingredientTitle">Instructions:</h2>
                  {data.instructions.map((text) => {
                    return (
                      <div className="imgTextIngredient">
                        <img
                          className="ingredientIcon"
                          src="../assets/images/icon-bullet-point.svg"
                          alt="icon"
                        />
                        <p className="ingredientText">{text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

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
