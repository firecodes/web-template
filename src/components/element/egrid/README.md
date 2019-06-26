# Egrid

### 基于 `Element-UI` `Table` 组件封装的高阶表格组件，可无缝支持 element 的 table 组件。

element 升级到了 2.0 了， 不用担心可以无缝升级的~

文档 [http://kinglisky.github.io/egrid](http://kinglisky.github.io/egrid)


### 开发

> `npm run dev`

> `npm run build`

> `npm run doc`


### 使用

安装 Element：

> `npm i element-ui -S`

安装 egrid:

> `npm i egrid -S`

`egrid` 只依赖 `Element` 中的 `Table` 与 `TableColumn` 组件不会将整个 `Element` 导入。
但不包含样式，`Table` 的样式需要用户手动引入。

使用：
```javascript
import Vue from 'vue'
import Egrid from 'egrid'

// table 的样式需要手动引入
import 'element-ui/lib/theme-default/icon.css'
import 'element-ui/lib/theme-default/table.css'
import 'element-ui/lib/theme-default/table-column.css'





Vue.use(Egrid)
```

为什么要在 element table 组价之上再封装一层呢？

平时我们使用的 element table 时候往往是这样写的：

```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
```

如果每次使用表格都要重复这一段代码，那久而久之你的项目肯定会冗余很多重复的代码，而且也不利于维护。
这时候我们就有必要在原始的表格组件基础上再封装一层，将这些重复的代码放在组件内部，使用时考虑如何通过一种配置的方式去定制表格。

`egrid` 就是为此而生的，少写两行是两行。耶~~~


<template>
  <div id="app">
    <egrid stripe
      max-height="500"
      :data="data"
      :columns="columns">
    </egrid>
    <egrid ref="egrid" stripe
      :column-type="['expand', 'selection']"
      :column-type-props=columnTypeProps
      :column-key-map="{ label: 'name' }"
      max-height="500"
      :data="data"
      :columns="columns"
      :columns-schema="columnsSchema"
      :columns-handler="columnsHandler"
      @selection-change="selectionChange">
      <template slot="expand" slot-scope="{ row }">
        <section class="expand-detail">
          <div v-for="col in columns" :key="col.label">
            {{ col.name }}：{{ row[col.prop] }}
          </div>
        </section>
      </template>
    </egrid>
    <button @click="clearSelection">CLEAR</button>
  </div>
</template>

<script>
import Vue from 'vue'
// import Egrid from '../lib/index.com'
import Egrid from '../src/index'
import Data from './data'
import Btn from './cell-btn.vue'
import Editor from './cell-editor.vue'
export default {
  name: 'app',
  data () {
    this.columnTypeProps = {
      selection: {
        // reserveSelection: true,
        selectable (row, index) {
          return index < 2
        }
      }
    }
    return {
      data: Data.data,
      columns: Data.columns,
      // columnsProps 用于定义所有 columns 公共的属性，
      // 这里属性可以参考这里： http://element.eleme.io/#/zh-CN/component/table#table-column-attributes
      // columnsProps: {
      //   width: 120,
      //   sortable: true,
      //   // 定义表格列如何渲染
      //   component: Editor
      // },
      // columnsSchema 可以用来单独定义 columns 的某一列，这里的设置会覆盖 columnsProps 的配置属性
      columnsSchema: {
        '地址': {
          width: 'auto',
          // propsHandler 可用于转换传给自定义组件的 props
          propsHandler ({ col, row }) {
            return { address: row[col.prop] }
          },
          component: Vue.extend({
            props: ['address'],
            render (h) {
              return h('span', {
                style: { color: '#20A0FF' }
              }, this.address)
            }
          })
        },
        '邮编': {
          formater (row, col) {
            return row[col.prop] + '...'
          }
        }
      },
      selecetedRows: []
    }
  },
  methods: {
    // columnsHandler 可用于在现有的 columns 进行操作，对 columns 进行增删改，这里新增了操作列
    columnsHandler (cols) {
      return cols.concat({
        // fixed: 'right',
        label: '操作',
        align: 'left',
        component: Btn,
        // listeners 可用于监听自定义组件内部 $emit 出的事件
        listeners: {
          'row-edit' (row) {
            console.log('row-edit', row)
          }
        }
      })
    },
    selectionChange (rows) {
      this.selecetedRows = rows
      console.log('selected', rows)
    },
    clearSelection () {
      const { egrid } = this.$refs
      if (egrid && egrid.clearSelection) {
        egrid.clearSelection()
      }
    }
  },
  components: { Egrid }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 60px;
}
.expand-detail div {
  text-align: left;
  padding: 4px 0;
}
</style>