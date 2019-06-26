<template>
  <el-table ref="grid" class="egrid" :data="data" v-bind="tableBind" v-on="$listeners">
    <template v-for="tp in typesColumns">
      <el-table-column v-if="tp.type === 'expand'" :key="tp.type" v-bind="tp.props" type="expand">
        <template slot-scope="props">
          <slot name="expand" v-bind="props" />
        </template>
      </el-table-column>
      <el-table-column v-else :key="tp.type" :type="tp.type" v-bind="tp.props" />
    </template>
    <template v-for="(col,index) in renderColumns">
      <template v-if="col.template">
        <el-table-column :key="index" v-bind="getColBind(col)">
          <template slot-scope="scope">
            <slot :is="col.template" :name="col.template" :$index="scope.index" :row="scope.row" :store="scope.store" />
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column :key="index" v-bind="getColBind(col)">
          <template slot-scope="scope">
            <component :is="col.component" v-bind="getCptBind(scope, col)" v-on="col.listeners" />
          </template>
        </el-table-column>
      </template>
    </template>
    <template v-if="slotAppend" slot="append">
      <slot name="append" />
    </template>
  </el-table>
</template>

<script>
import ElTable from 'element-ui/lib/table'
import ElTableColumn from 'element-ui/lib/table-column'
import methods from './methods'
import Text from './text'

const BOOLEAN_KEYS = [
  'fit',
  'stripe',
  'border',
  'show-header',
  'highlight-current-row',
  'default-expand-all',
  'show-summary'
]

const COLUMN_PROPS = {
  align: 'left',
  component: Text
}

const TYPES = ['selection', 'expand', 'index']

const COLUMN_KEY_MAP = {
  label: 'label',
  prop: 'prop'
}

export default {
  name: 'Egrid',
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn
  },
  mixins: [methods],
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    columnType: {
      type: [String, Array],
      default() {
        return ''
      }
    },
    columnTypeProps: {
      type: Object,
      default() {
        return {}
      }
    },
    columnKeyMap: {
      type: Object,
      default() {
        return {}
      }
    },
    columnsProps: {
      type: Object,
      default() {
        return {}
      }
    },
    columnsSchema: {
      type: Object,
      default() {
        return {}
      }
    },
    columnsHandler: {
      type: Function,
      default() {
        return null
      }
    },
    slotAppend: Boolean
  },

  computed: {
    // 处理 $attrs 里面 Boolean 类型的 prop 和统一 prop 命名
    tableBind() {
      const { $attrs } = this
      const bind = {}
      Object.keys($attrs).forEach(key => {
        const v = $attrs[key]
        const uniformKey = key.replace(/([A-Z])/, '-$1').toLowerCase()
        bind[key] = ~BOOLEAN_KEYS.indexOf(uniformKey) && v === '' ? true : v
      })
      return bind
    },
    renderColumns() {
      const {
        columns,
        columnKeyMap,
        columnsHandler,
        columnsProps: props,
        columnsSchema: schema
      } = this
      const map = Object.assign({}, COLUMN_KEY_MAP, columnKeyMap)
      const renderColumns = columns.map(col => {
        const mix = schema && schema[col[map.label]] || {}
        const it = Object.assign({}, COLUMN_PROPS, props, col, mix)
        it.label = it[map.label]
        it.prop = it[map.prop]
        return it
      })
      return columnsHandler && columnsHandler(renderColumns) || renderColumns
    },
    // 用于渲染特殊列
    typesColumns() {
      const { columnType: type, columnTypeProps } = this
      let typeColums = []
      if (typeof type === 'string' && ~TYPES.indexOf(type)) {
        typeColums = [type]
      }
      if (Array.isArray(type)) {
        typeColums = type.filter(it => ~TYPES.indexOf(it))
      }
      const map = columnTypeProps || {}
      return typeColums.map(type => {
        return {
          type,
          props: map[type]
        }
      })
    }
  },

  methods: {
    getColBind(col) {
      const bind = Object.assign({}, col)
      delete bind.component
      delete bind.listeners
      delete bind.propsHandler
      return bind
    },
    getCptBind({ row, column }, col) {
      const props = { row, col, column }
      const handler = col.propsHandler
      return handler && handler(props) || props
    }
  }
}
</script>
