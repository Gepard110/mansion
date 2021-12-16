const tab = {
  data() {
    return {
      isActive: '1'
    }
  }
}

Vue.createApp(tab).mount('#tabBox')

const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
  
  Vue.createApp(Counter).mount('#counter')

  const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
  
  Vue.createApp(AttributeBinding).mount('#bind-attribute')

  const EventHandling = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(EventHandling).mount('#event-handling')

  const TwoWayBinding = {
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
  
  Vue.createApp(TwoWayBinding).mount('#two-way-binding')

  const reverseinput = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(reverseinput).mount('#reverse-input')
  
  const ConditionalRendering = {
    data() {
      return {
        seen: true
      }
    }
  }
  
  Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

  const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    }
  }
  
  Vue.createApp(ListRendering).mount('#list-rendering')

  const ComponentsApp = {
    data() {
      return {
        myList: [
          { id: 0, text: '個人の意見です' },
          { id: 1, text: '適当に書いてます' },
          { id: 2, text: '自分でもよくわかりません' }
        ]
      }
    }
  }

  const app = Vue.createApp(ComponentsApp)

  app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
  })

  app.mount('#components-app')
  
