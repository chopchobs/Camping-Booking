import { MapContainer, Marker, Popup, TileLayer, 
  useMap, useMapEvents, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' 
import { useState } from 'react'
import { Input } from '../ui/input'

// Location Marker
function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng) // getZoom - current zoom level , map.getZoom()
      if (setValue) {
        setValue("lat",e.latlng.lat);
        setValue("lng",e.latlng.lng);
      }},
  })
  return position === null ? null : (
    <Marker position={ position }>
      <Popup>You are here!</Popup>
    </Marker>
  )
}

// Location is undefined || is first true 
const MainMap = ({ register ,location, setValue}) => {
  const [ position, setPosition ] = useState( null ) // initial null
  const DEFAULT_CENTER = [ 13.736717, 100.523186 ]; // Thailand coordinates
  return (
    <div> {/* Show latitude and longitude use AND */}
        { register && (
            <>
             <Input hidden {...register ('lat')}  />
             <Input hidden {...register ('lng')}  />
            </>
          )}
        {/* HEADER */}
        <h1 className='font-bold mb-2'> Where are you? ( Click to select )</h1>
        {/* SHOW POSITION */}
        {/* AND (&&) first false , position is true */}
        { position && (
            <p className='mb-2 text-sm text-gray-500'>
             Latitude: { position.lat.toFixed(6) },
             Longitude: { position.lng.toFixed(6) }
            </p>
        )}
        {/* MAP */}
        <MapContainer
            className='h-[50vh] rounded-md z-0' // z-0 is for positioning
            center={ location || DEFAULT_CENTER} // Location is undefined(false), (OR)|| first true
            scrollWheelZoom={ true } zoom={ 6 }>
          <TileLayer
           attribution='&copy; 
           <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

         {/* Location Marker to show user's location */}
          { location && <Marker position={ location } />}

         {/* Location Marker */}
           <LocationMarker
            position={ position }
            setPosition={ setPosition }
            setValue={setValue}/>
        </MapContainer>
    </div>
  )
}
export default MainMap;