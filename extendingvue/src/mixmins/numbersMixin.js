import colorize from "../directives/colorize";

export default {
    data: function () {
        return {
            first: 50,
            second: 20
        }
    },
    computed: {
        total() {
            return 0;
        }
    },
    directives: {
        colorize
    }
}