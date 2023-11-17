import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAudio } from '../redux/audioReducer';

export const Button = (props) => {
  const dispatch = useDispatch();
  const playing = useSelector((state) => state.audio.playing);
  const { name, path } = props;

  const [audio] = useState(new Audio(path));
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleEnded = () => {
      dispatch(toggleAudio());
      setIsDisabled(false); // Enable the button when audio ends
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audio, dispatch]);

  const initAudio = () => {
    dispatch(toggleAudio());
    setIsDisabled(true); // Disable the button when audio starts playing
    audio.play();
  };

  useEffect(() => {
    if (playing) {
      setIsDisabled(true); // Disable the button when audio is playing
    } else {
      setIsDisabled(false); // Enable the button when audio stops playing
    }
  }, [playing]);

  return (
    <button onClick={initAudio} disabled={isDisabled}>
      {name}
    </button>
  );
};
