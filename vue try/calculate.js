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
            console.log(priority["+"]);
            for(i=0;i<that.input.length;i++){
                console.log(that.input[i]);
                if(!op.includes(that.input[i])){
                    tmp=tmp*10+parseInt(that.input[i]);
                }
                else{
                    if(opstack.length==0||priority[opstack[opstack.length-1]]<=priority[that.input[i]]){
                    equation.push(tmp);
                    tmp=0;
                    opstack.push(that.input[i]);
                    }
                    else{
                        equation.push(tmp);
                        tmp=0;
                        while(opstack.length>0 && priority[opstack[opstack.length-1]]>priority[that.input[i]]){
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
                        opstack.push(that.input[i]);
                    }
                }
            }
            equation.push(tmp);
            console.log(equation);
            console.log(opstack);
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
            that.input=equation.pop().toString();
            },
        insert:function(a){
            var that=this;
            that.input+=a;
        }
    }
})