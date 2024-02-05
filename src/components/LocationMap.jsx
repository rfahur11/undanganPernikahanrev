import React from "react";

const LocationMap = () => {
  // Ganti URL `src` dengan kode iframe yang Anda dapat dari Google Maps
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3916087649927!2d108.8822691740453!3d-7.532196074339662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6579e3dfa05071%3A0x5699bf8bd9623093!2sSMA%20Negeri%201%20Bantarsari!5e0!3m2!1sid!2sid!4v1707112389510!5m2!1sid!2sid";

  return (
    // JANGAN lupa untuk mengganti `src` dengan URL yang Anda salin sebelumnya
    <iframe
      title="Lokasi Acara"
      src={iframeSrc}
      width="600" // Anda bisa mengatur ukuran iframe sesuai dengan kebutuhan
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
};

export default LocationMap;
