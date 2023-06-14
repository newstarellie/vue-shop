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
          <span class="sr-only">搜尋</span>
          <i class="fa-solid fa-magnifying-glass"></i>
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

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

    }
  }
}
</style>
