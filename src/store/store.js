import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    // 设置属性
    isLogin:false
  },
  getters:{
    // 获取属性的状态
    isLogin:state => state.isLogin
  },
  mutations:{
    // 改变属性的状态
  }
})
