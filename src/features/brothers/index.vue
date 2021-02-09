<script>

import { mapActions, mapGetters, mapState } from 'vuex'



export default {
  mounted () {

    this.setData()

  },

  methods:{
    ...mapActions('Brothers', ['setData'])
  },
  computed: {

    ...mapState('Brothers', ['data', 'maxBrothersPerRow']),
    ...mapGetters('Brothers', ['brothers']),

  }
}
</script>

<template>
  <div>

      <div class="card-deck card-list-itens col-12 justify-content-between">

          <div v-for="brother in brothers"
               :key="brother.id"
               class="card bg-dark my-2 col-3"
               style="width: 330px; max-width: 330px; min-width: 330px;" >

              <div class="card-img-top">
                      <img :src="brother.photo"
                           :alt="brother.name"
                           class="card-img-top w-100 p-1 "
                           v-bind:class="{ 'eliminated' : brother.eliminated}">
              </div>

              <div class="card-footer card_text_track">
                  <span class="card-text d-block">{{ brother.name }}</span>
                  <small class="text-muted d-block">{{ brother.description }}</small>
              </div>

          </div>


      </div>

    </div>
</template>

<style>
.eliminated {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
</style>
