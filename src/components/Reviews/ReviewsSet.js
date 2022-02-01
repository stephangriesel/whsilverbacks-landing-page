import AddReview from "../components/Reviews/AddReview"
import Reviews from "../components/Reviews/Reviews"

function ReviewsSet() {
  // All States
    const [reviews, setReviews] = useState([]); 
    const [showAddReview, setShowAddReview] = useState(false);
    return (
        <>
          <div className="container">
            {/* App Header */}
            <Header showForm={() => setShowAddReview(!showAddReview)} changeTextAndColor={showAddReview} />
            {/* Revealing the Add Review Form */}
            {showAddReview && <AddReview onSave={addReview} />}
            
            {/* Displaying Reviews */}
            {
              reviews.length > 0 ?
                (<Reviews reviews={reviews} />) :
                ('No Review Found!')
            }
          </div>
        </>
    )
}
export default ReviewsSet;