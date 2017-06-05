//ACTIONS
const MODE_SET_NORMAL = 'APP/MODE_SET_NORMAL';
const MODE_SET_ADDING = 'APP/MODE_SET_ADDING';
const MODE_SET_CHANGING = 'APP/MODE_SET_CHANGING';
const MODE_SET_CANCELING = 'APP/MODE_SET_CANCELING';
const MODE_SET_DELETE = 'APP/MODE_SET_DELETE';

export const modeSetNormal = () => ({
  type: MODE_SET_NORMAL,
});

export const modeSetAdding = () => ({
  type: MODE_SET_ADDING,
});

export const modeSetChanging = () =>({
  type: MODE_SET_CHANGING,
})

export const modeSetCanceling = () =>({
  type: MODE_SET_CANCELING,
})

export const modeSetDelete = () =>({
  type: MODE_SET_DELETE,
})

//REDUCERS

export enum Mode {
  NORMAL,
  ADDING,
  CHANGING
};

export const mode = (state: string = 'NORMAL', action) => {

  switch(action.type){
  case MODE_SET_NORMAL:
  case MODE_SET_CANCELING:
  case MODE_SET_DELETE:
    return Mode.NORMAL
  case MODE_SET_ADDING:
    return Mode.ADDING;
  case MODE_SET_CHANGING:
    return Mode.CHANGING;
  default:
    return state;
  }

}

