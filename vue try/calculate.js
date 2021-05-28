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
            var equation=[];
            var priority={"*":2,"/":2,"+":1,"-":1};
            var opstack=[];
            var op=["+","-","*","/"];
            var tmp=0;
            for(i=0;i<that.input.length;i++){
                console.log(that.input[i]);
                if(!op.includes(that.input[i])){
                    tmp=tmp*10+parseInt(that.input[i]);
                }
                else{
                    if(opstack.length==0||priority[opstack[-1]>=that.input[i]]){
                    equation.push(tmp);
                    tmp=0;
                    opstack.push(that.input[i]);
                    }
                    else{
                        equation.push(tmp);
                        tmp=0;
                        while(priority[opstack[-1]<=that.input[i]]){
                            a=equation.pop()
                            b=equation.pop()
                            c=opstack.pop()
                            if(c=="*"){
                                equation.push(a*b);
                            }
                            if(c=="/"){
                                equation.push(b/a);
                            }
                        }   
                        opstack.push(that.input[-1]);
                    }
                }
            }
            equation.push(tmp);
            console.log(equation);
            while(opstack.length>0){
                a=equation.pop();
                b=equation.pop();
                c=opstack.pop();
                if(c=="*"){
                    equation.push(a*b);
                }
                if(c=="/"){
                    equation.push(b/a)
                }
                if(c=="+"){
                    equation.push(b+a);
                }
                if(c=="-"){
                    equation.push(b-a);
                }
            }
            that.input=equation.pop();
            },
        insert:function(a){
            var that=this;
            that.input+=a;
        }
    }
})