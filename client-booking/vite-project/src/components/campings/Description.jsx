const Description = ({ text , name}) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold leading-snug">{name}</h2>
      <p className="mt-2">{text}</p>
    </div>
  )
}
export default Description