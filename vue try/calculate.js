var calculator=new Vue({
    el:"#calculator",
    data:{
        input:"",
    },
    methods:{
        clear:function(){
            var that= this;
            that.input=""
        },
        equal:function(){
            var that=this;
        },
        insert:function(a){
            var that=this;
            that.input+=a;
        }
    }
})