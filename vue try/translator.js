var translator = new Vue( {
    el:"#translator",
    data:{
        lanindex:['zh',"en","Japanese"],
        languages: [{
          value: 'zh',
          label: '中文',
          disabled:false
        }, {
          value: 'en',
          label: '英文',
          disabled:false
        }, {
          value: 'Japanese',
          label: '日语',
          disabled:false
        }, {
          value: '选项4',
          label: '龙须面',
          disabled:false
        }, {
          value: '选项5',
          label: '北京烤鸭',
          disabled:false
        }],
        from:null,
        to:null,
        textarea:"",
        result:""
      },
    methods:{
        getfrom:function(event){
            var that=this;
            for(var i=0;i<that.languages.length;i++){
                that.languages[i].disabled=false;
            }
            console.log("from "+that.from);
            this.languages[that.lanindex.indexOf(event)].disabled=true;
        },
        getto:function(event){
            var that=this;
            for(var i=0;i<that.languages.length;i++){
                that.languages[i].disabled=false;
            }
            console.log("to "+that.to);
            that.languages[that.lanindex.indexOf(event)].disabled=true;
        },
        translate:function(){
            var that=this;
            console.log("wait to translate: "+that.textarea)
            console.log("20210527000844094"+that.textarea+"1435660288osnzIH44YDlLl8UpI6_L")
            sign=md5("20210527000844094"+that.textarea+"1435660288osnzIH44YDlLl8UpI6_L")
            console.log(sign)
            quary="http://api.fanyi.baidu.com/api/trans/vip/translate?q="+that.textarea+"&from="+that.from+"&to="+that.to+"&appid=20210527000844094&salt=1435660288&sign="+sign
            
            axios.get(quary,{
                }).then(
                function(response){
                    console.log(response);
                    that.result=response.data
                },
                function(error){}
            )

        }
    }
  })