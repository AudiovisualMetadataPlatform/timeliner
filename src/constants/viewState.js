export const VIEWSTATE = {
  RUNTIME: 'runTime',
  IS_PLAYING: 'isPlaying',
  CURRENT_TIME: 'currentTime',
  ZOOM: 'zoom',
  X: 'x',
  IS_IMPORT_OPEN: 'isImportOpen',
  IS_SETTINGS_OPEN: 'isSettingsOpen',
  VOLUME: 'volume',
  METADATA_TO_EDIT: 'metadataToEdit',
  PROJECT_METADATA_EDITOR_OPEN: 'projectMetadataEditorOpen',
  VERIFY_DIALOG: 'verifyDialog',
  SOURCE: 'source',
  VIEWER_WIDTH: 'viewerWidth',
  CALLBACK: 'callback',
};

export const DEFAULT_VIEWSTATE_STATE = {
  [VIEWSTATE.RUNTIME]: 0,
  [VIEWSTATE.IS_PLAYING]: false,
  [VIEWSTATE.CURRENT_TIME]: 0,
  [VIEWSTATE.ZOOM]: 1.0,
  [VIEWSTATE.X]: 0,
  [VIEWSTATE.IS_IMPORT_OPEN]: true,
  [VIEWSTATE.IS_SETTINGS_OPEN]: false,
  [VIEWSTATE.VOLUME]: 70,
  [VIEWSTATE.METADATA_TO_EDIT]: null,
  [VIEWSTATE.PROJECT_METADATA_EDITOR_OPEN]: false,
  [VIEWSTATE.SOURCE]: null,
  [VIEWSTATE.VERIFY_DIALOG]: {
    open: false,
    title: '',
  },
  [VIEWSTATE.VIEWER_WIDTH]: 0,
  [VIEWSTATE.CALLBACK]: null,
};

export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const ZOOM_TO = 'ZOOM_TO';
export const RESET_ZOOM = 'RESET_ZOOM';
export const PAN_TO_POSITION = 'PAN_TO_POSITION';
export const SHOW_IMPORT_MODAL = 'SHOW_IMPORT_MODAL';
export const DISMISS_IMPORT_MODAL = 'DISMISS_IMPORT_MODAL';
export const SHOW_SETTINGS_MODAL = 'SHOW_SETTINGS_MODAL';
export const DISMISS_SETTINGS_MODAL = 'DISMISS_SETTINGS_MODAL';
export const NEXT_BUBBLE = 'NEXT_BUBBLE';
export const PREVIOUS_BUBBLE = 'PREVIOUS_BUBBLE';
export const FAST_FORWARD = 'FAST_FORWARD';
export const FAST_REWARD = 'FAST_REWARD';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const LOAD_VIEW_STATE = 'LOAD_VIEW_STATE';
export const LOAD_SOURCE = 'LOAD_SOURCE';
export const EDIT_METADATA = 'EDIT_METADATA';
export const SET_VERIFY_DIALOG = 'SET_VERIFY_DIALOG';
export const OPEN_CONFIRM_DIALOG = 'OPEN_CONFIRM_DIALOG';
export const CLOSE_CONFIRM_DIALOG = 'CLOSE_CONFIRM_DIALOG';
export const CONFIRM_YES = 'CONFIRM_YES';
export const CONFIRM_NO = 'CONFIRM_NO';
export const EDIT_PROJECT_METADATA = 'EDIT_PROJECT_METADATA';
export const CANCEL_PROJECT_METADATA_EDITS = 'CANCEL_PROJECT_METADATA_EDITS';
export const SAVE_PROJECT_METADATA = 'SAVE_PROJECT_METADATA';
export const FINISHED_PLAYING = 'FINISHED_PLAYING';
export const UPDATE_VIEWER_WIDTH = 'UPDATE_VIEWER_WIDTH';
export const SET_CALLBACK = 'SET_CALLBACK';
export const UNDO_ALL = 'UNDO_ALL';
