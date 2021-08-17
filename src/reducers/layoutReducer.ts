export const layoutInitialState = {
  isHeaderFixed: false,
};

export type layoutStateType = typeof layoutInitialState;
export type layoutActionType = { type: "TOGGLE_HEADER"; payload: boolean };

export const layoutReducer: React.Reducer<layoutStateType, layoutActionType> = (
  state: layoutStateType,
  action: layoutActionType
) => {
  switch (action.type) {
    case "TOGGLE_HEADER":
      return {
        ...state,
        isHeaderFixed: action.payload,
      };

    default: {
    }
  }
};
