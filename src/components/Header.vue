<template>
  <header>
    <h1 class="mallLogo">
      <a href="#"
        title="母婴商城">
        <img src="res/static/img/logo.png">
      </a>
    </h1>
    <div class="mallSearch">
      <form action=""
        novalidate>
        <input type="text"
          name="title"
          required
          autocomplete="off"
          placeholder="请输入需要的商品">
        <button type="submit">
          <i class="layui-icon layui-icon-search"></i>
          搜尋
        </button>
      </form>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.mallSearch {
  width: 500px;

  // todo 這些可以整理進去scss模組 
  form {
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: $input-border-color 1px solid;

    input {
      width: 100%;
      background-color: $input-background-color;
      text-align: left;

    }

    button {
      height: 100%;
      text-indent: -9999px;
      overflow: hidden;
    }
  }
}
</style>
