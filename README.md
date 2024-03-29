
## Getting started

```bash

## npm registry
npm config set registry https://registry.npm.taobao.org

# enter the project directory
cd web-template

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:8888

# Build

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

# You can axios like this:
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.$http.get(api).then((response) => {
  console.log(response.data)
})