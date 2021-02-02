import Vue from 'vue'
import Vuex from 'vuex'
//store持久化，刷新后不消失
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		userInfo: {
			token: "",
			user: {
				name: "",
				password: "",
				img: ""
			}
		}
	},
	mutations: { //设置用户数据
		setUserInfo(state, data) {
			state.userInfo = data;
		},
		// 删除用户数据
		clearUserInfo(state) {
			state.userInfo = {
				token: "",
				user: {}
			}
		}
	},
	actions: {
		//resolve
		login({
			commit
		}, data) {
			data = {
				token: "111",
				user: {
					name: "Tom",
					password: "123456",
					img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1844749954,940436127&fm=26&gp=0.jpg"
				}
			}
			commit("setUserInfo", data)
			return data
			// console.log(this.state.userInfo);

			// Promise.resolve()

		}
	},
	modules: {},
	plugins: [createPersistedState()]
})