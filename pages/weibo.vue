<template lang="pug">
  section.container
    .card-wrap
      .title
        .left
          img(src="")
          .content
            h2 优秀网页设计
            p
              span 五小时前
              span 来自微博
        i.fa.fa-angle-down.more
      .intro
        p
          | 平面设计入门// 
          a(href) 老司机
          | :排版
      .menu
    h1.title
      | USERS1
    ul.users
      li(v-for="(user, index) in users", :key="index").user
        nuxt-link(:to="{ name: 'id', params: { id: index }}") {{ user.name }}


</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    console.log(data);
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  layout: 'weibo'
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
}
.title {
  // margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
.card-wrap {
  width: 100%;
  .title {
    position: relative;
    padding: 15px 15px 10px 15px;
    display: flex;
    .left {
      display: flex;
      img {
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .content {
        h2 {
          line-height: 24px;
          color: orange;
        }
        p {
          font-size: 10px;
          color: #999;
        }
      }
    }
    .more {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 18px;
      color: #999;
    }
  }
  .intro {
    padding: 0 15px;
    p {
      line-height: 16px;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>