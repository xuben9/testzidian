import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionary: [
      {
        "ID" : 1,
        "CODE" : 500,
        "MEA_NAME" : "PhV_phsA",
        "NOTE" : "A 相电压"
      },
      {
        "ID" : 2,
        "CODE" : 502,
        "MEA_NAME" : "PhV_phsB",
        "NOTE" : "B 相电压"
      },
      {
        "ID" : 3,
        "CODE" : 504,
        "MEA_NAME" : "PhV_phsC",
        "NOTE" : "C 相电压"
      },
      {
        "ID" : 4,
        "CODE" : 506,
        "MEA_NAME" : "PhV_neut",
        "NOTE" : "零序电压"
      },
      {
        "ID" : 5,
        "CODE" : 510,
        "MEA_NAME" : "SeqV_c1",
        "NOTE" : "正序电压"
      },
      {
        "ID" : 6,
        "CODE" : 512,
        "MEA_NAME" : "SeqV_c2",
        "NOTE" : "负序电压"
      },
      {
        "ID" : 7,
        "CODE" : 514,
        "MEA_NAME" : "A_phsA",
        "NOTE" : "A 相电流"
      },
      {
        "ID" : 8,
        "CODE" : 516,
        "MEA_NAME" : "A_phsB",
        "NOTE" : "B 相电流"
      },
      {
        "ID" : 9,
        "CODE" : 518,
        "MEA_NAME" : "A_phsC",
        "NOTE" : "C 相电流"
      },
      {
        "ID" : 10,
        "CODE" : 520,
        "MEA_NAME" : "A_neut",
        "NOTE" : "零序电流"
      },
      {
        "ID" : 11,
        "CODE" : 522,
        "MEA_NAME" : "SeqA_c1",
        "NOTE" : "正序电流"
      },
      {
        "ID" : 12,
        "CODE" : 524,
        "MEA_NAME" : "SeqA_c2",
        "NOTE" : "负序电流"
      },
      {
        "ID" : 13,
        "CODE" : 526,
        "MEA_NAME" : "Hz",
        "NOTE" : "频率"
      },
      {
        "ID" : 14,
        "CODE" : 528,
        "MEA_NAME" : "TotW",
        "NOTE" : "有功功率"
      },
      {
        "ID" : 15,
        "CODE" : 530,
        "MEA_NAME" : "TotVAr",
        "NOTE" : "无功功率"
      },
      {
        "ID" : 16,
        "CODE" : 532,
        "MEA_NAME" : "TotVA",
        "NOTE" : "视在功率"
      },
      {
        "ID" : 17,
        "CODE" : 534,
        "MEA_NAME" : "TotPE",
        "NOTE" : "功率因数"
      },
      {
        "ID" : 18,
        "CODE" : 536,
        "MEA_NAME" : "ImbNgV",
        "NOTE" : "三相电压不平衡度"
      },
      {
        "ID" : 19,
        "CODE" : 538,
        "MEA_NAME" : "ImbNgA",
        "NOTE" : "三相电流不平衡度"
      },
      {
        "ID" : 20,
        "CODE" : 540,
        "MEA_NAME" : "ImbNgL",
        "NOTE" : "三相负荷不平衡度"
      }
    ],
    keyWords:"",
    res:[],
  },
  mutations: {
    getKeyWords(state,val) {
      state.keyWords = val
    },
    showResults(state,val) {
      state.res = state.dictionary.filter(function(element){
        return element.NOTE.indexOf(val) != -1
      })
    },

  },
  actions: {
  },
  modules: {
  }
})
