<template>
  <div>
    <ul style="pa" class="nav">
      <nuxt-link tag="li" to="/home" activeClass="active">Home</nuxt-link>
      <nuxt-link tag="li" to="/cinema" activeClass="active">Cinema</nuxt-link>
      <nuxt-link tag="li" to="/user" activeClass="active">User</nuxt-link>
    </ul>

    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
ul {
  display: flex;
}
li {
  text-decoration: none;
  list-style: none;
  margin: 0 20px;
}
.active {
  color: red;
}
.nav {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: #fff;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
