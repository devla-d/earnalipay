const initialize = {

    setupajax(token) {
        window.$.ajaxSetup({
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    },






}











export default initialize