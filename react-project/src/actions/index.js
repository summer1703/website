/**
 * Created by Excalibur on 16/10/24.
 */



export default {
    change(data) {
        return dispath => {
            dispath({
                type: 'hehe',
                data: {
                    text: "k3k3k3"
                }
            })
        }

    }
}