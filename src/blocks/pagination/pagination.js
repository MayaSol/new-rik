var Vue = require("vue");
var pagination = require("vuejs-uib-pagination");

Vue.use(pagination);

var app = new Vue({
    el: "#app",
    data: {
        totalItems: 9,
        pagination1: { currentPage: 4 },
        pagination2: { currentPage: 1 },

        setPage: function(pageNo) {
            this.pagination1.currentPage = pageNo;
        },

        pageChanged: function() {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
 pageLabelHtml: function (pageNo) {
            return "<b>" + pageNo + "</b>";
        },
        maxSize: 5,
        bigTotalItems: 9
    }
});
