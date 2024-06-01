export const InitialState = {
    orderStatus: "Pending",
    memberDisalbe: false,
    SearchMember: null,
    SearchOrder: null,
    RobiToggole: false,
    toggle: false,
}


export const AdminReducer = (InitialState, action) => {
    switch (action.type) {
        case "ORDER_STATUS":
            return {
                ...state,
                orderStatus: action.payload
            }
        case "MEMBER_DISABLE":
            return {
                ...state,
                memberDisalbe: action.payload
            }
        case "SEARCH_MEMBER":
            return {
                ...state,
                SearchMember: action.payload
            }
        case "SEARCH_ORDER":
            return {
                ...state,
                SearchOrder: action.payload
            }
        case "TOGGOLE":
            return {
                ...state,
                toggle: action.payload
            }
        default:
            return InitialState
            break;
    }

}