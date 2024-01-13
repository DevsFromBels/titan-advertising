export const userContext = ({ req }) => {
    if(req) {
        console.log(req)
        return req
    }
    console.log(req)
    return
}