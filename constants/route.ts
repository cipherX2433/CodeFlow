const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    PROFILE: (id: String) => `profile/${id}`,
    ASK_QUESTION: "/ask-question",
};

export default ROUTES;