const initialState = {
    email: ""
}

export const userReducer = (state = initialState, action) => {
    console.log("reducersssss")
    switch (action.type) {
        case "Email_Text":
            return {
                ...state, email: action.payload
            }

         default:
            return initialState

        }
    }