import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} size={25} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
        stars.push(
            <FaStarHalfAlt key="half" size={25} className="text-yellow-500" />
        );
    }

    return stars;
};