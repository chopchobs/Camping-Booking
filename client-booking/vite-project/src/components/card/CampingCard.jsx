import { motion } from "framer-motion"
import { Link } from "react-router"
import FavoriteToggleButton from "./FavoriteToggleButton"

const CampingCard = ({camping}) => {
//  console.log(" camping in card ", camping); 
  return (
    <motion.div
        whileHover={{ scale: 1, rotate: 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Card Content */}
      <article className= "relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Link to Camping Detail */}
        <Link to={ `/user/camping/${camping.id}` }>
          <h2 className="text-lg font-semibold mb-2">{camping.title}</h2>
          <div>
            {/* Image */}
            {/* /default.png คือไฟล์รูป placeholder ที่คุณเตรียมไว้ใน /public ของ Next.js */}
            <img
              src={camping.secure_url || "/default.png"}
              className="w-full h-48 object-cover rounded-lg"/>
          </div>
            {/* Description */}
              <p className="mt-2 text-gray-600 text-sm ">
              {camping.description.substring(0,40)} ดูเพิ่มเติม...
              </p>
            {/* Price and Location */}
              <div className="mt-2 font-bold text-gray-800 flex justify-between">
                {camping.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                <span className="text-xs text-gray-500" >
                 {camping.lat.toFixed(2)}, {camping.lng.toFixed(2)}
                </span>
              </div>
        </Link>
        {/* Favorite Button */}
          <div className="absolute top-4 right-4">
           <FavoriteToggleButton
            campingId={ camping.id }
            isFavorite={ camping.isFavorite }/>
          </div>
      </article>
    </motion.div>
  )
}
export default CampingCard