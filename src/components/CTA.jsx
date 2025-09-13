export default function CTA() {
  return (
    <div className="cta">
      <div className="container cta-container">
        <img
          className="imgBackLeft"
          src="/assets/images/pattern-fork.svg"
          alt="fork"
          width={314}
          height={390}
        />
        <div className="cta-content">
          <h2 className="ctaTitle">Ready to cook smarter?</h2>
          <p className="ctadescription">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className="btnCta">Browse recipes</button>
        </div>
        <img
          className="imgBackRight"
          src="/assets/images/pattern-knife.svg"
          alt="knife"
          width={338}
          height={338}
        />
      </div>
    </div>
  );
}
