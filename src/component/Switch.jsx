import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import successSound from "../assets/success.wav";

function Switch({ place }) {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(successSound);
    audioRef.current.play();

    navigate(`/${place.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="botn bg-green-400 text-black w-40 p-3 rounded shadow text-center hover:bg-green-500 transition cursor-pointer"
    >
      {place.name}
    </button>
  );
}

export default Switch;
