var translator = new Vue({
  el: "#translator",
  data: {
    lanindex: ['zh', "en", "Japanese"],
    languages: [{
      value: 'zh',
      label: '中文',
      disabled: false
    }, {
      value: 'en',
      label: '英文',
      disabled: false
    }, {
      value: 'ja',
      label: '日语',
      disabled: false
    },],
    from: null,
    to: null,
    textarea: "",
    result: ""
  },
  methods: {
    getfrom: function (event) {
      var that = this;
      for (var i = 0; i < that.languages.length; i++) {
        that.languages[i].disabled = false;
      }
      console.log("from " + that.from);
      this.languages[that.lanindex.indexOf(event)].disabled = true;
    },
    getto: function (event) {
      var that = this;
      for (var i = 0; i < that.languages.length; i++) {
        that.languages[i].disabled = false;
      }
      console.log("to " + that.to);
      that.languages[that.lanindex.indexOf(event)].disabled = true;
    },
    translate: function () {
      var that = this;
      console.log("wait to translate: " + that.textarea);
      that.token = "fpag1ki0f4oe7fs5sqys";
      quary = "http://api.interpreter.caiyunai.com/v1/translator"
      data = {
        "source": that.textarea,
        "trans_type": "auto2"+that.to,
        "request_id": "demo",
        "detect": true,
      };
      headers = {
        'content-type': "application/json",
        'x-authorization': "token " + that.token,
      }
      axios.post(quary, data, {
        headers: headers
      }).then(
        function (response) {
          console.log(response);
          that.result = response.data.target
        },
        function (error) {}
      )

    }
  }
})