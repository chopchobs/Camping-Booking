const turf = require("@turf/turf")
// https://turfjs.org/docs/api/center

exports.findCenter =(data)=>{
 if (data.length === 0 ) { // not data
    return null;
 }
 const feature = data.map((item)=>{
    return turf.point( [ item.lng, item.lat ] );
 });
//  https://turfjs.org/docs/api/featureCollection
    const featureCollection = turf.featureCollection(feature)
    const center = turf.center(featureCollection);
    const lng = center.geometry.coordinates[0]
    const lat = center.geometry.coordinates[1]

return([lat,lng])
}