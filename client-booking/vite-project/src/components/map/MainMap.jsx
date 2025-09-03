import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' 
import { useState } from 'react'
import { Input } from '../ui/input'


// Location Marker
function LocationMarker({position, setPosition}) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng) // getZoom - current zoom level , map.getZoom()
    },
  })
  console.log(position);
  return position === null ? null : (
    <Marker position={ position }>
      <Popup>You are here!</Popup>
    </Marker>
  )
}
// Location is undefined || is first true 
const MainMap = ({ register ,Location}) => {
    const [ position, setPosition ] = useState(null)
    const DEFAULT_CENTER = [15.8700, 100.9925]; // Thailand coordinates
  return (
    <div>
        {/* Show latitude and longitude */}
        <Input hidden {...register ('lat')} value={ position ? position.lat : ''} />
        <Input hidden {...register ('lng')} value={ position ? position.lng : ''} />

        {/* HEADER */}
        <h1 className='font-bold mb-2'>Where are you? ( Click to select )</h1>
        {/* SHOW POSITION */}
        {/* AND (&&) first falsy , position is true */}
        {position && (
            <p className='mb-2 text-sm text-gray-500'>
             Latitude: { position.lat.toFixed(6) },
             Longitude: { position.lng.toFixed(6) }
            </p>
        )}

        {/* MAP */}
        <MapContainer
            className='h-[50vh] rounded-md z-0' // z-0 is for positioning
            center={ Location || DEFAULT_CENTER} // Location is undefined(false), (OR)|| first true
            scrollWheelZoom={true}
            zoom={6}>
               <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={ position } setPosition={ setPosition }/>
        </MapContainer>
    </div>
  )
}
export default MainMap;