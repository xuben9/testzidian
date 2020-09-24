<template>
    <div class="dropdown" style="float: right">
        <button class="dropbtn">下载</button>
        <div class="dropdown-content">
            <a href="#">导出当前结果</a>
            <a href="#">导出完整字典</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"droplist"
}
</script>

<style scoped>
.dropbtn {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>