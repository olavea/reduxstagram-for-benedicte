// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      //console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;



// function posts(state = [], action) {
//   return state;
// }
// export default posts;
// action(what happenededd), store

//ok let me see

//return: an actual copy of our store 

// Jeg kommenterte ut alt under og lagde linje 6 til og med 9 som er fra video 7
// function posts(state = [], action) {
//   switch(action.type) {
//     case 'INCREMENT_LIKES' :
//       //console.log("Incrementing Likes!!");
//       const i = action.index;
//       return [
//         ...state.slice(0,i), // before the one we are updating
//         {...state[i], likes: state[i].likes + 1},
//         ...state.slice(i + 1), // after the one we are updating
//       ]
//     default:
//       return state;
//   }
// }

// export default posts;

