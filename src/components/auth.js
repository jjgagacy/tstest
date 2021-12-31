const fakeAuth = {
    isAuth: false,
    signin(callback) {
        fakeAuth.isAuth = true;
        setTimeout(callback, 1000);
    },
    signout(callback) {
        fakeAuth.isAuth = false;
        setTimeout(callback, 1000);
    }
}
export { fakeAuth }