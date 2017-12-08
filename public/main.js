//import Vue from 'vue'
//import Header from '/components/page-header'

//Vue.config.productionTip = false

//Page Header
var header = new Vue({
  el: '#header',
  template: `
	<div id="page-header">
		<h1>{{ headerTitle }}</h1>
	</div>
  `,
  data () {
	    return {
	    	headerTitle: 'Hello World!'
		}
	}
})

var contentBody = new Vue({
  el: '#content-body',
  template: `
	<ul class="list-group">
	    <li class="list-group-item" v-for="todo in todos">
	      {{ todo.text }}
	    </li>
    </ul>
  `,
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
