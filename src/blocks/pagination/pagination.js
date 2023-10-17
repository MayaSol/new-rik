var Vue = require("vue");
var pagination = require("vuejs-uib-pagination");
const makeEllipsis = require('../../js/utils/ellipsis.js');

//https://github.com/typicode/json-server
async function getData(url) {
    let response = await fetch(url);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        let result = await response.json();
        return result;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
}

var url="";

Vue.use(pagination);

var publications = [];

for (var i=0; i<18; i++) {
  publications[i] = {};
  publications[i]['title'] = 'Лекция: Лазерная терапия в педиатрии ' + i;
  publications[i]['href'] = '#' + i;
}

console.log(publications);

// var totalItems = publications.length;

var app = new Vue({
  el: "#pagination1",
  data: {
    totalItems: publications.length,
    itemsPerPage: 3,
    maxSize: 3,
    itemSelector: '.add-info__item',
    items: publications,
    itemsVisible: [],
    pagination: { currentPage: 1 },

    setPage: function(pageNo) {
      this.pagination.currentPage = pageNo;
    },

    pageChanged: function() {
      console.log('Page changed to: ' + this.pagination.currentPage);
      this.currentPage = this.pagination.currentPage;
      // Update your data array based on the current page
      this.itemsVisible = this.getItemsOnPage(this.pagination.currentPage);
    },
    pageLabelHtml: function(pageNo) {
      return "<b>" + pageNo + "</b>";
    },
    getItemsOnPage(pageNumber) {
      // Calculate the start and end indexes of items on the current page
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Return the items on the current page
      return this.items.slice(startIndex, endIndex);
    },
    // bigTotalItems: 9
  },
  mounted() {
    this.initItemsList();
  },
  updated() {

  },
  methods: {
    initItemsList() {
      // console.log('initItemsList');
      // console.log(this);
      // console.log(this.items);
      // let itemsList = Array.from(this.$el.querySelectorAll(this.itemSelector));
      // console.log(itemsList);
      // for (let i = 0; i < itemsList.length; i++) {
      //   let link = itemsList[i].querySelector('a');
      //   let href = link && link.getAttribute('href');
      //   this.items.push({
      //     text: itemsList[i].innerText,
      //     href: href
      //   });
      // }
      this.itemsVisible = this.getItemsOnPage(this.pagination.currentPage);
      if (this.totalItems <= this.itemsPerPage) {
        let pagination = this.$el.querySelector('.pagination')
        if (pagination) {
          pagination.style.display = "none";
        }
      }

    },

    previousPage() {
      setPage(this.pagination.currentPage - 1);
    },

    nextPage() {
      setPage(this.pagination.currentPage + 1);
    }
  }
});

var articles = [];

for (var i=0; i<4; i++) {
  articles[i] = {};
  articles[i]['title'] = 'Лекция: Лазерная терапия в педиатрии ' + i;
  articles[i]['text'] = 'В конце июля на одной из клинических баз Межрегионального института подготовки кадров (МИПК), кафедре «Реабилитологии и инновационных медицинских технологий» – «МЕДЭП-регионы» – прошли практические занятия в рамках семинара (вебинара)';
  articles[i]['href'] = '#' + i;
}

console.log(articles);

var app = new Vue({
  el: "#pagination2",
  data: {
    totalItems: articles.length,
    itemsPerPage: 3,
    maxSize: 3,
    itemSelector: '.add-info__item',
    items: articles,
    itemsVisible: [],
    pagination: { currentPage: 1 },

    setPage: function(pageNo) {
      console.log('setPage');
      this.pagination.currentPage = pageNo;
    },

    pageChanged: function() {
      console.log('Page changed to: ' + this.pagination.currentPage);
      this.currentPage = this.pagination.currentPage;
      // Update your data array based on the current page
      this.itemsVisible = this.getItemsOnPage(this.pagination.currentPage);
    },
    pageLabelHtml: function(pageNo) {
      return "<b>" + pageNo + "</b>";
    },
    getItemsOnPage(pageNumber) {
      // Calculate the start and end indexes of items on the current page
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Return the items on the current page
      return this.items.slice(startIndex, endIndex);
    },
    // bigTotalItems: 9
  },
  mounted() {
    this.initItemsList();
  },
  updated() {
      console.log('----------------------');
      console.log('updated');
      console.log(this.$el);
      let ellipsis = this.$el.querySelectorAll('.ellipsis');
      console.log(ellipsis);
      if (ellipsis.length > 0) {
        for (var i=0; i<ellipsis.length; i++) {
          makeEllipsis(ellipsis[i]);
        }
      }
      console.log('-----------------------');
  },
  methods: {
    initItemsList() {
      console.log('initItemsList');
      console.log(this.items);
      this.itemsVisible = this.getItemsOnPage(this.pagination.currentPage);
      if (this.totalItems <= this.itemsPerPage) {
        let pagination = this.$el.querySelector('.pagination')
        if (pagination) {
          pagination.style.display = "none";
        }
      }

    },

    previousPage() {
      setPage(this.pagination.currentPage - 1);
    },

    nextPage() {
      setPage(this.pagination.currentPage + 1);
    }
  }
});

// Vue.component('my-cmp',{
//   data: function() {
//     return {status: 'Critical'}
//   },
//   template: '<p>Status: {{status}}</p>'
// });

// new Vue({
//   el: '#simple-component',
// })
