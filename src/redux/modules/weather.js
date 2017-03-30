const initialState = {
  weather: []
};

export default function reducers(state = initialState, action = {}) {
  switch(action.type) {
    case ADD_WEATHER:
      return {
        ...state,
        weather: [...this.state.weather, weather]
      };
  }
}

export function addWeather(weather) {
  return { type: ADD_WEATHER, weather};
};