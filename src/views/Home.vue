<template>
<v-layout column wrap>
<v-flex>
<v-card color="blue" >
 <router-link to="/about"><v-btn class="center" >About</v-btn></router-link>
 <router-link to="/"><v-btn class="center" >Home</v-btn></router-link>
</v-card>

</v-flex>

</v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
