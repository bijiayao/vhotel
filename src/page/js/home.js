import homeDetailList from "../html/homeDetailList";
import end from "../../components/footer/footer";
import router from "../../router";

export default {
    name: 'home',
    data () {
      return {
          imgList: [
               "../../../static/img/img-item1.jpeg",
               "../../../static/img/img-item2.jpeg",
               "../../../static/img/img-item3.jpeg",
               "../../../static/img/img-item4.jpeg"
          ]
      }
    },
    components:{
        homeDetailList,
        end
    },
    methods:{
       
    },
    mounted(){
    }
  }