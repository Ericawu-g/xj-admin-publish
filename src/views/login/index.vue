<template>
  <div class="login-container">
    <el-button type="primary" @click="onLogin">主要按钮</el-button>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  methods: {
    onLogin () {
      login({
        login_account: '15110283003',
        login_password: '283003'
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
