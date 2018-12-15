import router from "../../router";

export default {
    name: 'end',
    data () {
      return {
          
      }
    },
    components:{
        
    },
    methods:{
        toHome: function() {
            router.push('/')
        },
        toMusic: function() {
            router.push('/music')
        }
    },
    mounted(){
    }
  }