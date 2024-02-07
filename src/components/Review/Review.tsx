import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";

function Review() {
  return (
    <section className="section" id="review-section">
      <h2 className="section-title review-section-title">Recenzje</h2>
      <ReviewCard />
    </section>
  );
}

export default Review;
