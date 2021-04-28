<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';


export default {
  mounted () {

    window.setInterval(() => {
      this.setData()
    }, 30000);
    this.setData()

  },
  components: {

    IOdometer

  },
  methods:{

    ...mapActions('Brothers', ['setData', 'getBrotherSocialData'])

  },
  computed: {

    ...mapState('Brothers', ['data']),
    ...mapGetters('Brothers', ['brothers']),

  }
}
</script>

<template>
  <div>

      <div class="d-flex justify-content-around row">

          <div v-for="brother in brothers"
               :key="brother.id"
               class="card my-2 col-3 "
               style="width: 330px; max-width: 330px; min-width: 330px;" >

              <div class="card-img-top">
                      <img :src="brother.photo"
                           :alt="brother.name"
                           class="card-img-top w-100 p-1"
                           v-bind:class="{ 'eliminated' : brother.eliminated }">
              </div>

              <div class="card-footer card_text_track">
                  <span class="card-text d-block">{{ brother.name }}</span>

                  <!-- <span class="card-text d-block">
                    <IOdometer
                      class="iOdometer"
                      :value="brother.instagramData.edge_followed_by.count"
                    />
                    seguidores
                  </span> -->

              </div>

          </div>


      </div>

    </div>
</template>

<style>
.eliminated {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
</style>
