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

}

.mallSearch {
  width: 500px;
  padding-top: 30px;

  form {
    width: 100%;
    display: flex;

    input {
      width: 100%;
    }


  }
}
</style>
