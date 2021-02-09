import axios from 'axios'

const setData = async ({commit}, obj) => {

  const data = ( await axios.get('http://k-nella.ddns.net/bbb-abstract/getBigBrotherBrasilData.php')).data
  commit('SET_DATA', { data });

}

export default {

  setData

}
