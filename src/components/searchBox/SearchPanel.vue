<template>
    <div class="nav">
    <h1 class="iconfont icon-zidian font">标准量测字典</h1>
    <div class="in-layout">
        <input class="input "  type="text" placeholder="在此输入……" v-model="keyWords" @keyup.enter="pushInput">
        <span>
            <input type="submit" value="搜索" id="se" class="search" @click="pushInput" >
        </span>
    </div>
    <button class="btn" @click="showAll">查看所有</button>
  </div>
</template>

<script>
export default {
    name:"searchPanel",
    data() {
        return {
            keyWords:'',
        }
    },
    methods: {
        pushInput() {
            if (this.keyWords != null && this.keyWords.split(" ").join("").length != 0){
                this.$emit('valuein')
                this.$store.commit('getKeyWords',this.keyWords)
                this.$store.commit('showResults',this.keyWords)
            }
        },
        showAll() {
            this.$emit('showAll')
            this.$axios.get('/')
            .then(function(res){
                console.log('success');
                console.log(res.data.result);
            })
            .catch(function(err){
                 console.log('failed');
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.nav {
  text-align: center;
}
.font {
    font-size: 2em;
    cursor: pointer;
}
.font:hover {
    color: #3e8e41;
}
.in-layout {
    display: flex;
    align-items: center;
    justify-content: center;
}
.in-layout input {
    outline: none;
}
.input {
    box-sizing: border-box;
    height: 2rem;
    width: 40%;
    box-shadow: none;
    border-radius: 10px 0 0 10px;
    border: 2px solid #c4c7ce;
}
.input:focus {
    border-color: #4CAF50;
}
.search {
    box-sizing: border-box;
    height: 2rem;
    padding: 1px 2px;
    box-shadow: none;
    border-radius: 0 10px 10px 0;
    border: 2px solid #c4c7ce;
    background-color:#4CAF50;
    border: none;
    cursor: pointer;
}
.search:hover {
    background-color: #3e8e41;
}
.btn {
    
    cursor: pointer;
}
.btn:hover {
    background-color: #3e8e41;
}
</style>