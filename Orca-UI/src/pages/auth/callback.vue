 <template>
  <div class="callback">Callback</div>
</template>

<script>
export default {
  name: 'callback',
  mounted () {
    let vueThis = this
    this.$auth.handleAuthentication().then((data) => {
      debugger
      vueThis.$router.push({ path: vueThis.$auth.fromPath })
    })
  }
}
</script>
