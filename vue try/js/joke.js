var joke = new Vue({
    el:"#joke",
    data:{
        joke:"点击下方按钮，即刻获取笑话"
    },
    methods:{
    getjoke:function(){
        var that=this;
        axios.get("https://autumnfish.cn/api/joke").then(
            function(response){
                console.log(response.data);
                that.joke=response.data;
                
            },
            function(err){
            })
        }    
    },
});
