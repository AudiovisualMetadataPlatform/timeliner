import {
  AUDIO_LOADING,
  AUDIO_LOADED,
  AUDIO_ERROR,
  LOAD_CANVAS,
  UNLOAD_AUDIO,
} from '../constants/canvas';
import invariant from '../utils/invariant';

export const audioLoading = (bytesLoaded, bytesTotal, duration) => {
  invariant(
    () => bytesLoaded <= bytesTotal,
    'Bytes loaded cannot be more than the total'
  );
  const percent = parseInt((bytesLoaded / bytesTotal) * 100, 10);
  const percentLoaded = Number.isNaN(percent) ? 100 : percent;

  return {
    type: AUDIO_LOADING,
    payload: {
      percentLoaded,
      duration,
    },
  };
};

export const audioLoaded = isLoaded => ({
  type: AUDIO_LOADED,
  payload: {
    isLoaded,
  },
});

export const audioError = (code, description = 'Unknown error') => ({
  type: AUDIO_ERROR,
  payload: {
    code,
    description,
  },
});

export const loadCanvas = state => ({
  type: LOAD_CANVAS,
  state,
});

export const unloadAudio = () => ({
  type: UNLOAD_AUDIO,
});
