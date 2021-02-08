<script>

import { mapState } from 'vuex'

export default {
  computed: {

    ...mapState('Brothers', ['list'])

  }
}
</script>
<template>
  <div>
    <h3>
      Vue
    </h3>
  </div>
</template>
