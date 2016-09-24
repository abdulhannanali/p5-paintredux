export default function selectedColor (state="#00FF00", action) {
    if (action.type == "SELECT_COLOR") {
      return action.color || state
    }

    return state
}
