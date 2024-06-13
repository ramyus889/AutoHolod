"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl:
    "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-karten-standortmarkierung.png",
  iconSize: [50, 50],
});

export default function Map() {
  return (
    <div className="relative">
      <FaMapMarkerAlt
        color="red"
        size={40}
        className="absolute left-[270px] top-[120px] z-10 animate-bounce max-[530px]:left-[250px] max-[480px]:left-[230px] max-[440px]:left-[210px] max-[410px]:left-[190px] max-[370px]:left-[170px]"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1794.207945650357!2d47.949646203080675!3d42.37470123434952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1718256596729!5m2!1sru!2sru"
        className="w-full rounded-xl"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
