const ImageContainer = ({ image, name }) => {
  return (
    <section className="mt-4">
        {/* Image */}   
        <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-md" />
    </section>
  )
}
export default ImageContainer