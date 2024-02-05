import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import LocationMap from "../components/LocationMap";
import MusicPlayer from "../components/MusicPlayer";
import "./invitation.css";
import music from "../assets/music/X2Download.com - Teddy -Instrumental- (320 kbps).mp3";
import gambar from "../assets/images/cowo.png";
import cewe from "../assets/images/cewe.png";

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk menentukan apakah undangan sudah dibuka
  const navigate = useNavigate(); // Digunakan untuk navigasi
  const params = useParams();
  const guestName = params.guestName.replace("-", " ");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Fungsi untuk membuka undangan
  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true); // Mulai memutar musik
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Kondisional rendering untuk menampilkan sampul atau isi undangan
  if (!isOpen) {
    return (
      <div className="invitation-cover">
        <h2>Welcome, {guestName}</h2>
        <p>Kami mengundang Anda untuk turut serta dalam perayaan kami.</p>
        <button onClick={handleOpenInvitation}>Buka Undangan</button>
        <MusicPlayer src={music} />
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{ display: isPlaying ? "block" : "none" }}
    >
      <div className="body">
        <header>
          <h1>Undangan Pernikahan</h1>
          <nav>
            {/* Links untuk navigasi */}
            <a href="#wedding">Wedding</a>
            <a href="#location">Location</a>
            <a href="#footer">Contact</a>
          </nav>
        </header>
        <section id="guest">
          <h1>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
          <h2>Selamat Datang, {guestName}</h2>
          <h1 className="salam">Assalamualaikum Warahmatullahi Wabarakatuh</h1>
          <p>
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </section>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause Musik" : "Play Musik"}
        </button>

        <section id="wedding">
          <h2>Our Wedding</h2>
          <div>
            <img className="gambar" src={gambar} alt="Logo" />;
            <h2 className="nama">Muhammad Fikri Zen</h2>
            <p>Putra</p>
            <p>Bapak ... & Ibu ...</p>
          </div>
          <div>
            <img className="gambar" src={cewe} alt="Logo" />;
            <h2 className="nama">Ayu Ulfatussuroya N</h2>
            <p>Putri</p>
            <p>Bapak ... & Ibu ...</p>
          </div>
          <div className="container">
            <h1> Allah Subhanahu Wa Ta'ala berfirman</h1>
            <p>
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>
            <span>QS. Ar-Rum Ayat 21</span>
          </div>
          <p>We are excited to invite you to celebrate our wedding day.</p>
          {/* Tambahkan informasi tentang acara pernikahan di sini */}
        </section>
        <div className="countdown-timer">
          {/* Tambahkan komponen CountdownTimer di bawah ini */}
          <CountdownTimer targetDate="2024-02-28T00:00:00" />{" "}
          {/* <-- Ganti dengan tanggal acara yang sebenarnya */}
        </div>

        <section className="location-map" id="location">
          <h2>Lokasi Acara</h2>
          <LocationMap />
        </section>
        {/* Anda bisa menambahkan bagian lain dari undangan di sini */}
        <footer id="footer">
          <p>Terima kasih telah menjadi bagian dari hari spesial kami.</p>
          <p>
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan.
          </p>
        </footer>
      </div>
      {/* Elemen audio tersembunyi untuk kontrol pemutaran */}
      <audio
        ref={audioRef}
        src="../assets/music/X2Download.com - Teddy -Instrumental- (320 kbps).mp3"
        autoPlay={isPlaying}
      />
    </div>
  );
};

export default Invitation;
