import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const playPause = () => {
    if (!audio || !audioPlayer.current) {
      console.error("🚨 Nenhuma fonte de áudio disponível!");
      return;
    }

    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.onloadedmetadata = () => {
        setAudioDuration(audioPlayer.current.duration || 0);
      };

      audioPlayer.current.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
    }
  }, [audio]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioPlayer.current) {
        setCurrentTime(audioPlayer.current.currentTime);
        const progressPercentage =
          (audioPlayer.current.currentTime / audioDuration) * 100;
        progressBar.current.style.setProperty(
          "--_progress",
          `${progressPercentage}%`
        );
      }
    };

    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [audioDuration, isPlaying]);

  //PARAR A MÚSICA AO MUDAR
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause(); // Para a música atual
      audioPlayer.current.currentTime = 0; // Reseta o tempo da música
      setIsPlaying(false); // Define o estado como pausado
    }
  }, [audio]); // Dispara quando o caminho do áudio muda

  // PARAR A MÚSICA E REINICIAR SE NECESSÁRIO

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{formatTime(audioDuration)}</p>
      </div>

      <audio ref={audioPlayer}>
        <source src={audio} type="audio/mpeg" />
        <source src={audio.replace(".mp3", ".ogg")} type="audio/ogg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default Player;
