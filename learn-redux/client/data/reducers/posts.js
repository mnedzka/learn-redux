// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state=[], action) {
    console.log(state, action);
}

export default posts;