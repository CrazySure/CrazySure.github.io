import drag from './drag'


const install = function(Vue) {
  Vue.directive('el-drag-dialog-text', drag)
}



if (window.Vue) {
  window['el-drag-dialog-text'] = drag
  Vue.use(install); // eslint-disable-line

}


drag.install = install

export default drag