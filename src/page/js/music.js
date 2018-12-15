import end from "../../components/footer/footer";
export default {
    name: 'music',
    data () {
      return {

      }
    },
    components:{
        end
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    },
    mounted(){

    }
  }