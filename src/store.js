// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)
// Vue.use(axios)

// export default new Vuex.Store({
//     state: {
//         // 所有的任务列表
//         list:[],
//         inputValue:'aaa',
//         nextId:5
//     },
//     mutations: {
//         initList(state, list) {
//             state.list = list
//         },
//         addInput(state,data) {
//             const obj={
//                 id:state.nextId,
//                 content:data,
//                 checked:false
//             }
//             state.list.push(obj)
//             state.nextId++;
//         },
//         changeCheck(state,obj){
//             const i = state.list.findIndex(x => x.id===obj.id)
//             if(i !== -1){
//                 state.list[i].checked = obj.checked
//             }
//         }
//     },
//     actions: {
//         getList(context) {
//             axios.get('/list.json').then(({data}) => {
//                context.commit('initList',data)
//             })
//         }
//     }
// })